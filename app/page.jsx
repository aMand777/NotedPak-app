'use client';
import Button from './components/elements/Button';
import Image from 'next/image';
import NavAuth from './components/fragments/NavAuth';
import Link from 'next/link';
import InputLabel from './components/elements/InputLabel';
import SampleNotes from './components/templates/SampleNotes';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const [sampleNotes, setSampleNotes] = useState('');
  const focusInput = useRef();

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  const handleChange = (event) => {
    setSampleNotes(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('Please login first');
      router.push('/login');
    }
  };

  return (
    <>
      <NavAuth />
      <div className="w-9/12 sm:w-1/3 mx-auto bg-green-100 rounded-lg sm:mt-5 mt-3 py-5">
        <div className="text-lg text-center font-semibold italic pt-3">
          <h1>Welcome to NotedPak</h1>
          <div className="w-32 h-32 mx-auto relative my-5">
            <Image src="/img/favicon.ico" alt="notedPak-icon" fill={true} />
          </div>
          <InputLabel inputRef={focusInput} placeholder="catatan hari ini.." onChange={handleChange} onKeyDown={handleKeyDown} className="text-xs p-1 italic mb-2 focus:outline-primary" />
          <div className="flex flex-roe justify-evenly">
            <Link href="/login">
              <Button>Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
      <SampleNotes body={sampleNotes} className={`${sampleNotes.length > 0 ? 'block' : 'hidden'}`} />
    </>
  );
};

export default Home;
