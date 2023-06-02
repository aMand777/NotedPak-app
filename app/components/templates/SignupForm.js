'use client';
import InputLabel from '../elements/InputLabel';
import { useState, useEffect, useRef } from 'react';
import Checkbox from '../elements/Checkbox';
import Button from '../elements/Button';
import Link from 'next/link';
import ValidationError from '../fragments/ValidationErrorAuth';

const SignupForm = ({ isError, ...rest }) => {
  const focusInput = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  return (
    <div className="w-10/12 mt-5 pb-5 mx-auto">
      <InputLabel {...rest} inputRef={focusInput} htmlFor="name" id="name" type="text" name="name" placeholder="input your name" className="bg-slate-100 text-sm italic p-1 rounded-sm w-full focus:outline-primary">
        Name
      </InputLabel>
      <ValidationError className={isError && isError.includes('name') ? 'block' : 'hidden'} errorMessage={isError} />
      <InputLabel {...rest} htmlFor="email" id="email" type="email" name="email" placeholder="input your email" className="bg-slate-100 text-sm italic p-1 rounded-sm w-full focus:outline-primary">
        Email
      </InputLabel>
      <ValidationError className={isError && isError.includes('email') ? 'block' : 'hidden'} errorMessage={isError} />
      <InputLabel {...rest} htmlFor="password" id="password" type={!isChecked ? 'password' : 'text'} name="password" placeholder="input your password" className="bg-slate-100 text-sm italic p-1 rounded-sm w-full focus:outline-primary">
        Password
      </InputLabel>
      <ValidationError className={isError && isError.includes('password') ? 'block' : 'hidden'} errorMessage={isError} />
      <InputLabel
        {...rest}
        htmlFor="repeatPassword"
        id="repeatPassword"
        type={!isChecked ? 'password' : 'text'}
        name="confirmPassword"
        placeholder="repeat password"
        className="bg-slate-100 text-sm italic p-1 rounded-sm w-full focus:outline-primary">
        Confirm Password
      </InputLabel>
      <ValidationError className={isError && isError.includes('confirmPassword') ? 'block' : 'hidden'} errorMessage={isError} />
      <Checkbox className="my-3" checked={isChecked} onChange={handleCheckboxChange}>
        Show password
      </Checkbox>
      <div className="flex justify-between">
        <Link href="/login">
          <span className="text-sm font-semibold italic text-blue-500 hover:text-blue-800 cursor-pointer">Login</span>
        </Link>
        <Button className="flex justify-end">Signup</Button>
      </div>
    </div>
  );
};

export default SignupForm;
