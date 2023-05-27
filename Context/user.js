'use client';
import axios from 'axios';
import { createContext, useEffect, useState, useCallback, useMemo } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState([]);

  const getUserLogin = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users`);
      setUserLogin(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getUserLogin();
  }, []);

  return <UserContext.Provider value={{ userLogin }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
