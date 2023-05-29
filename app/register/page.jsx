'use client';
import React from 'react';
import RegisterForm from '../components/templates/RegisterForm';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/register`, user)
      .then((response) => {
        alert(response.statusText);
        router.replace('/login');
      })
      .catch((error) => {
        error.response.data.message === `"confirmPassword" must be [ref:password]` ? alert('Confirm Password Wrong') : alert(error.response.data.message);
      });
  };

  console.log(user);

  return (
    <div className="w-full h-full">
      <div className="w-1/2 h-5/6 mx-auto bg-green-100 rounded-lg mt-24">
        <h1 className="text-lg text-center font-semibold italic pt-3">Sign Up</h1>
        <form>
          <RegisterForm onChange={handleChange} onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
