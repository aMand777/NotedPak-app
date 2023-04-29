import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-center bg-primary sticky top-0 z-50">
      <div className="text-center py-1 cursor-pointer w-min hover:scale-110">
        <Link href="/">
          <span className="text-4xl text-black font-bold">NotedPak</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
