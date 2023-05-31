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
      const confirmation = window.confirm('Are you sure you want to delete this note?');
      if (confirmation) {
        try {
          await axios.delete(`http://localhost:5000/notes/${id}`, config);
          router.push('/notes');
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
        const response = await axios.post('http://localhost:5000/notes', data, config);
        router.push('/notes');
        alert(response.statusText);
      } catch (error) {
        console.log(error);
      }
    },
    [config, router]
  );

  const updatedNotes = useCallback(
    async (note, id) => {
      try {
        const response = await axios.put(`http://localhost:5000/notes/${id}`, note, config);
        router.push('/notes');
        alert(response.statusText);
        console.log('ini response detail :', response);
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
      console.log(error);
    }
  }, [user.token]);

  return <NotesContext.Provider value={{ deleteNote, insertedNotes, updatedNotes, getNotes, notes, isLoading }}>{children}</NotesContext.Provider>;
};
