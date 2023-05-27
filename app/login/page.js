'use client';
import { useAuth } from '../../Context/auth';
import LoginForm from '../components/templates/LoginForm';
import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Cookies from 'js-cookie';

const LoginPage = () => {
  const auth = useAuth();
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
    auth.Login(event, user);
  };

  console.log('user->', user);

  return (
    <div className="w-full h-full">
      <div className="w-1/2 h-5/6 mx-auto bg-green-100 rounded-lg mt-24">
        <h1 className="text-lg text-center font-semibold italic pt-3">Login</h1>
        <form onSubmit={handleSubmit}>
          <LoginForm onChange={handleChange} />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

// (event) => auth.handleSubmit(event, user)
// const handleSubmit = (event) => {
//   event.preventDefault();
//   axios
//     .post(`${process.env.NEXT_PUBLIC_API_URL}/login`, user)
//     .then((response) => {
//       console.log(response.data);
      // sessionStorage.setItem('user', response.data.token);
//       Cookies.set('token', response.data.token, { expires: 1 });
//       Cookies.set('id', response.data._id, { expires: 1 });
//       Cookies.set('user', response.data.name, { expires: 1 });

//       router.push('/notes');
//     })
//     .catch((error) => {
//       console.log(error);
//       // alert(error.response.data.message);
//     });
// };
