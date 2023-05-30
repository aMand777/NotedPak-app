import Image from 'next/image';

const NavAuth = () => {
  return (
    <>
      <nav className="flex flex-row bg-primary sticky top-0 items-center z-50">
        <div className="pr-1 flex-1">
          <Image src="/img/favicon.ico" alt="note-icon" width="25" height="25" className="mx-auto cursor-pointer origin-top-right duration-500 delay-300 hover:-rotate-12" />
        </div>
        <div className="flex-1 text-center py-1">
          <span className="text-2xl font-bold cursor-pointer">NotedPak</span>
        </div>
        <div className="flex-1 text-center">
          <p className="text-sm italic font-thin hidden sm:block">hi, Welcome back</p>
        </div>
      </nav>
    </>
  );
};

export default NavAuth;
