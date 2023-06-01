'use client';
import { useContext, createContext, useReducer } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const InitialAuthState = {
  isLogin: false,
  isLoading: false,
  isError: '',
  user: {} || '',
};

const AuthActions = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
  SIGN_OUT: 'SIGN_OUT',
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case AuthActions.SET_LOADING:
      return { ...state, isLoading: true };
    case AuthActions.SIGN_IN_SUCCESS:
      return {
        isLogin: true,
        isLoading: false,
        user: action.payload.user,
      };
    case AuthActions.SIGN_IN_FAILED:
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        isError: action.payload,
      };
    case AuthActions.SIGN_OUT:
      return InitialAuthState;
    default:
      break;
  }
};

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(AuthReducer, InitialAuthState);

  const Login = async (data) => {
    // const [errorLogin, setErrorLogin] = useState('')
    dispatch({ type: AuthActions.SET_LOADING });
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, data);
      Cookies.set('token', response.data.token, { expires: 1 });
      Cookies.set('id', response.data._id, { expires: 1 });
      Cookies.set('name', response.data.name, { expires: 1 });
      router.replace('/notes');
      dispatch({
        type: AuthActions.SIGN_IN_SUCCESS,
        payload: { user: response.data },
      });
    } catch (error) {
      // alert(error.response.data.message);
      // setErrorLogin(error.response.data.message);
      dispatch({
        type: AuthActions.SIGN_IN_FAILED,
        payload: error.response.data.message,
      });
    }
  };

  const Logout = () => {
    dispatch({ type: AuthActions.SET_LOADING });
    try {
      Cookies.remove('token');
      Cookies.remove('id');
      Cookies.remove('name');
      router.replace('/login');
      dispatch({
        type: AuthActions.SIGN_OUT,
        payload: {},
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    const userId = Cookies.get('id');
    const userName = Cookies.get('name');

    const user = {
      token: token,
      id: userId,
      name: userName,
    };

    const isLogin = Cookies.get('token') !== undefined;
    dispatch({
      type: AuthActions.SIGN_IN_SUCCESS,
      payload: { user },
    });
  }, []);

  return <AuthContext.Provider value={{ ...state, dispatch, Login, Logout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
