'use client';
import React from 'react';
import InputLabel from '../elements/InputLabel';
import { useState } from 'react';
import Checkbox from '../elements/Checkbox';
import Button from '../elements/Button';

const LoginForm = ({...rest }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="mt-5 pb-5">
      <InputLabel {...rest} htmlFor="email" id="email" type="email" name="email" placeholder="input your email" className="bg-slate-100 text-sm italic p-1 rounded-sm w-full">
        Email
      </InputLabel>
      <InputLabel {...rest} htmlFor="password" id="password" type={!isChecked ? 'password' : 'text'} name="password" placeholder="input your password" className="bg-slate-100 text-sm italic p-1 rounded-sm w-full">
        Password
      </InputLabel>
      <Checkbox className="my-3 w-1/2 mx-auto" checked={isChecked} onChange={handleCheckboxChange}>
        Show password
      </Checkbox>
      <Button className="flex justify-end mr-24">
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
