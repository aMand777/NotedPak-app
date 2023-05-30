'use client';
import React from 'react';
import InputLabel from '../elements/InputLabel';
import { useState, useEffect, useRef } from 'react';
import Checkbox from '../elements/Checkbox';
import Button from '../elements/Button';
import Link from 'next/link';

const LoginForm = ({ ...rest }) => {
  const focusInput = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    focusInput.current.focus();
  }, [])

  return (
    <div className="w-10/12 mt-5 pb-5 mx-auto">
      <InputLabel {...rest} inputRef={focusInput} htmlFor="email" id="email" type="email" name="email" placeholder="input your email" className="bg-slate-100 text-sm italic p-1 rounded-sm w-full focus:outline-primary">
        Email
      </InputLabel>
      <InputLabel {...rest} htmlFor="password" id="password" type={!isChecked ? 'password' : 'text'} name="password" placeholder="input your password" className="bg-slate-100 text-sm italic p-1 rounded-sm w-full focus:outline-primary">
        Password
      </InputLabel>
      <Checkbox className="my-3" checked={isChecked} onChange={handleCheckboxChange}>
        Show password
      </Checkbox>
      <div className="flex justify-between">
      <Link href='/signup'>
        <span className='text-sm font-semibold italic text-blue-500 hover:text-blue-800 cursor-pointer'>Sign up</span>
      </Link>
      <Button>
        Login
      </Button>
      </div>
    </div>
  );
};

export default LoginForm;
