'use client';
import React from 'react';
import InputLabel from '../elements/InputLabel';
import { useState } from 'react';
import Checkbox from '../elements/Checkbox';
import Button from '../elements/Button';

const RegisterForm = ({ onClick, ...rest }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="mt-5 pb-5">
      <InputLabel {...rest} htmlFor="name" id="name" type="text" name="name" placeholder="input your name">
        Name
      </InputLabel>
      <InputLabel {...rest} htmlFor="email" id="email" type="email" name="email" placeholder="input your email">
        Email
      </InputLabel>
      <InputLabel {...rest} htmlFor="password" id="password" type={!isChecked ? 'password' : 'text'} name="password" placeholder="input your password">
        Password
      </InputLabel>
      <InputLabel {...rest} htmlFor="repeatPassword" id="repeatPassword" type={!isChecked ? 'password' : 'text'} name="confirmPassword" placeholder="repeat password">
        Confirm Password
      </InputLabel>
      <Checkbox className="my-3 w-1/2 mx-auto" checked={isChecked} onChange={handleCheckboxChange}>
        Show password
      </Checkbox>
      <Button className="flex justify-end mr-24" onClick={onClick}>
        Signup
      </Button>
    </div>
  );
};

export default RegisterForm;
