'use client';
import SignupForm from '../components/templates/SignupForm';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import LoadingSpin from '../components/templates/LoadingSpin';

const SignupPage = () => {
  const [isErrorValidation, setIsErrorValidation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/register`, user)
      .then((response) => {
        if (response.status === 201) {
          alert('Signup success, please login');
        }
        router.replace('/login');
      })
      .catch((error) => {
        setIsErrorValidation(error.response.data.message)
        setIsLoading(false);
      });
  };

  return (
    <>
      <LoadingSpin validation={isLoading === true} />
      <div className="w-9/12 h-fit sm:w-1/3 sm:h-5/6 mx-auto bg-green-100 rounded-lg mt-24 my-auto">
        <h1 className="text-lg text-center font-semibold italic pt-3">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <SignupForm onChange={handleChange} isError={isErrorValidation} />
        </form>
      </div>
    </>
  );
};

export default SignupPage;
