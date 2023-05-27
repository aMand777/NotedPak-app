'use client';
import { useContext, createContext, useReducer } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const InitialAuthState = {
  isLogin: false,
  isLoading: false,
  isError: false,
  user: {},
};

const AuthActions = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
  SIGN_OUT: 'SIGN_OUT',
};

const AuthReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case AuthActions.SET_LOADING:
      return { ...state, isLoading: true };
    case AuthActions.SIGN_IN_SUCCESS:
      return {
        isLogin: true,
        isLoading: false,
        isError: false,
        user: action.payload.user,
      };
    case AuthActions.SIGN_IN_FAILED:
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        user: action.payload.error,
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
  const [state, dispatch] = useReducer(AuthReducer, InitialAuthState);

  const Login = async (event, data) => {
    event.preventDefault();
    dispatch({ type: AuthActions.SET_LOADING });
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, data);
      // sessionStorage.setItem('user', response.data);
      console.log('response.data', response.data);
      dispatch({
        type: AuthActions.SIGN_IN_SUCCESS,
        payload: { user: response.data },
      });
      Cookies.set('token', response.data.token, { expires: 1 });
      Cookies.set('id', response.data._id, { expires: 1 });
      Cookies.set('name', response.data.name, { expires: 1 });
      // router.push('/notes');
    } catch (error) {
      console.log(error);
      dispatch({
        type: AuthActions.SIGN_IN_FAILED,
        payload: { error },
      });
    }
  };

  // Mengisi ulang InitialAuthState setelah mengatur cookie
  useEffect(() => {
    const user = Cookies.get('id');
    const isLogin = !!user; 
    dispatch({
      type: AuthActions.SIGN_IN_SUCCESS,
      payload: { user },
    });
    console.log('isLogin->', isLogin);
  }, []);

  console.log('state->', state);

  return <AuthContext.Provider value={{ ...state, dispatch, Login }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
