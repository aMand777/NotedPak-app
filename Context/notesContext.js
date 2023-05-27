'use client';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { createContext, useEffect, useState, useCallback, useMemo } from 'react';

const Context = createContext(null);

const Provider = ({ children }) => {
  const router = useRouter();
  const token = Cookies.get('token');
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  const config = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    [token]
  );

  const deleteNote = useCallback(
    async (id) => {
      const confirmation = window.confirm('Are you sure you want to delete this note?');
      if (confirmation) {
        try {
          const response = await axios.delete(`http://localhost:5000/notes/${id}`, config);
          console.log(response.data);
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
      } catch (error) {
        console.log(error);
      }
      console.log('idContext :', id);
    },
    [config, router]
  );

  const getDataNotes = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/notes', config);
      setNotes(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [config]);

  useEffect(() => {
    getDataNotes();
  }, []);

  return <Context.Provider value={{ notes, isLoading, deleteNote, insertedNotes, updatedNotes }}>{children}</Context.Provider>;
};

export { Context, Provider };
  
  // getDataNotes, deleteNote, insertedNotes, updatedNotes
