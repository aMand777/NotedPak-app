import Image from 'next/image';

const NavAuth = () => {
  return (
    <nav className="flex flex-row justify-around bg-primary sticky top-0 z-50 items-center">
      <div className="pr-1">
        <Image src="/img/favicon.ico" alt="note-icon" width="25" height="25" className="cursor-pointer origin-top-right duration-500 delay-300 hover:-rotate-12" />
      </div>
      <div className=" text-center py-1 cursor-pointer">
        <span className="text-2xl text-black font-bold">NotedPak</span>
      </div>
      <div className="flex flex-row">
        {/* <span className="text-sm font-bold italic mr-3">Hi, {user.name} </span>
        <span onClick={userLogout} className="cursor-pointer text-xs font-bold text-blue-500 hover:text-blue-700 italic">
          Logout
        </span> */}
      </div>
    </nav>
  );
};

export default NavAuth;
