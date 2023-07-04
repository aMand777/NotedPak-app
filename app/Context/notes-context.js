'use client';
import axios from 'axios';
import { useAuth } from './auth-context';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { createContext, useCallback, useMemo, useContext, useState } from 'react';

export const NotesContext = createContext();
export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const { user } = useAuth();

  const [notes, setNotes] = useState([]);
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const token = Cookies.get('token');

  const config = useMemo(() => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }, [token]);

  const deleteNote = useCallback(
    async (id) => {
        try {
          const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`, config);
            setMessage(response.status)
            setAlert(true);
        } catch (error) {
          console.log(error);
      }
    },
    [config]
  );

  const insertedNotes = useCallback(
    async (data) => {
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/notes`, data, config);
        if (response.status === 201) {
          setMessage(response.status)
        }
      } catch (error) {
        if (error.response.data.status === 401) {
          setMessage(error.response.data.status)
          setAlert(true)
        }
        router.replace('/login');
      }
    },
    [config, router]
  );

  const updatedNotes = useCallback(
    async (note, id) => {
      try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`, note, config);
        if (response.status === 201) {
          setMessage(response.status)
        }
      } catch (error) {}
    },
    [config]
  );

  const getNotes = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/notes`, config);
      setNotes(response.data);
      setIsLoading(false);
    } catch (error) {
      if (error.response.data.status === 401) {
        setMessage(error.response.data.status)
        setAlert(true)
      }
      router.replace('/login');
    }
  }, [config, router]);

  return <NotesContext.Provider value={{
    deleteNote, insertedNotes, updatedNotes, getNotes, notes, isLoading, alert, setAlert, confirmation, setConfirmation, message
  }}>{children}</NotesContext.Provider>;
};
