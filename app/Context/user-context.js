// 'use client';
// import axios from 'axios';
// import { createContext, useEffect, useState, useCallback, useMemo, useContext } from 'react';

// export const UserContext = createContext();
// export const useUser = () => useContext(UserContext)

// export const UserProvider = ({ children }) => {
// const id = Cookies.get('id');
//   const [userLogin, setUserLogin] = useState([]);

//   const getUserLogin = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/users/${id}`);
//       setUserLogin(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUserLogin();
//   }, []);

//   return <UserContext.Provider value={{ userLogin }}>{children}</UserContext.Provider>;
// };