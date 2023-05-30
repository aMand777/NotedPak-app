'use client';
import { useAuth } from '../Context/auth-context';
import LoginForm from '../components/templates/LoginForm';
import { useState } from 'react';

const LoginPage = () => {
  const { Login } = useAuth();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    Login(event, user);
  };


  return (
    <div className="w-9/12 h-fit sm:w-1/3 sm:h-5/6 mx-auto bg-green-100 rounded-lg mt-24 my-auto">
      <h1 className="text-lg text-center font-semibold italic pt-3">Login</h1>
      <form onSubmit={handleSubmit}>
        <LoginForm onChange={handleChange} />
      </form>
    </div>
  );
};

export default LoginPage;
