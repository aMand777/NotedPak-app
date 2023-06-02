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
      const confirmation = window.confirm('Are you sure want to delete this note?');
      if (confirmation) {
        try {
          await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`, config);
          router.replace('/notes');
          alert('Deleted successfully');
        } catch (error) {
          console.log(error);
        }
      }
    },
    [config, router]
  );

  const insertedNotes = useCallback(
    async (data) => {
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/notes`, data, config);
        if (response.status === 201) {
          alert('Note added successfully');
        }
        router.replace('/notes');
      } catch (error) {
        console.log(error);
      }
    },
    [config, router]
  );

  const updatedNotes = useCallback(
    async (note, id) => {
      try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`, note, config);
        router.replace('/notes');
        if (response.status === 201) {
          alert('Updated success');
        }
      } catch (error) {}
    },
    [config, router]
  );

  const getNotes = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/notes`, config);
      setNotes(response.data);
      setIsLoading(false);
    } catch (error) {
      if (error.response.data.status === 401 && alert('Your session has expired, please login')) {
      }
      router.replace('/login');
    }
  }, [user.token]);

  return <NotesContext.Provider value={{ deleteNote, insertedNotes, updatedNotes, getNotes, notes, isLoading }}>{children}</NotesContext.Provider>;
};
