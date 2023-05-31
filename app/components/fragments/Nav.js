'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useAuth } from '../../Context/auth-context';

const Navbar = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { user, Logout } = useAuth();

  const userLogout = () => {
    Logout();
  };

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <nav className="flex flex-row bg-primary sticky top-0 z-50 items-center">
        {children}
        <div className="flex-row flex-1 justify-end mr-5 sm:hidden flex">
          <button onClick={handleClick} className="mr-10">
            <Image src="/img/menu-icon.png" alt="menu-icon" width={20} height={20} className={`${isVisible ? 'hidden' : 'block'} cursor-pointer hover:scale-95 md:hidden `} />
            <Image src="/img/close-icon.png" alt="close-icon" width={15} height={15} className={`${!isVisible ? 'hidden origin-center rotate-45 duration-1000' : 'block'} cursor-pointer hover:scale-95 md:hidden`} />
          </button>
        </div>
      </nav>
      <div
        className={`md:hidden transition-transform duration-1000 transform mt-1 ${
          !isVisible ? '-translate-y-44' : 'translate-y-0'
        } flex flex-col fixed bg-primary right-0 pr-20 pl-1 bg-opacity-70 font-semibold cursor-pointer rounded-md outline-double outline-green-200 z-40`}>
        <span className="hover:scale-105 active:opacity-70 z-50 text-xs italic mt-1 mb-2">Hi, {user.name}</span>
        <span onClick={userLogout} className="hover:scale-105 active:opacity-70 z-50 text-xs italic font-thin mb-1 text-blue-500">
          Logout
        </span>
      </div>
    </>
  );
};

export default Navbar;
