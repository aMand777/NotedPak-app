'use client';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../elements/Button';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../Context/user';
import { useAuth } from '../../../Context/auth';

const Navbar = () => {
  const [username, setUsername] = useState('');

  const { user } = useAuth();
  const { userLogin } = useContext(UserContext);
  const id = userLogin.filter((u) => u._id === user);

  return (
    <nav className="flex flex-row justify-around bg-primary sticky top-0 z-50 items-center">
      <div className="pr-1">
        <Link href="/">
          <Image src="/img/favicon.ico" alt="note-icon" width="25" height="25" className="cursor-pointer origin-top-right duration-500 delay-300 hover:-rotate-12" />
        </Link>
      </div>
      <div className=" text-center py-1 cursor-pointer w-min hover:scale-105 duration-500 ease-out">
        <Link href="/">
          <span className="text-2xl text-black font-bold">NotedPak</span>
        </Link>
      </div>
      <div className="flex flex-row">
        {id.map((i) => (
          <div key={i._id}>
            <span className="text-lg font-bold italic mr-3">{i.name}</span>
          </div>
        ))}
        <Button>Logout</Button>
      </div>
    </nav>
  );
};

export default Navbar;
