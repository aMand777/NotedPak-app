'use client';
import React from 'react';
import SignupForm from '../components/templates/SignupForm';
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

  return (
    <div className="w-9/12 h-fit sm:w-1/3 sm:h-5/6 mx-auto bg-green-100 rounded-lg mt-24 my-auto">
      <h1 className="text-lg text-center font-semibold italic pt-3">Sign Up</h1>
      <form>
        <SignupForm onChange={handleChange} onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default RegisterPage;
