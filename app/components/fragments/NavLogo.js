import Image from 'next/image';

const NavLogo = () => {
  return (
    <>
      <div className="pr-1 flex-1">
        <Image src="/img/favicon.ico" alt="note-icon" width="25" height="25" className="cursor-pointer origin-top-right duration-500 delay-300 hover:-rotate-12 mx-auto" />
      </div>
    </>
  );
};

export default NavLogo;
