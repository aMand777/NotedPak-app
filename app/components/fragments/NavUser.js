'use client'
import { useAuth } from '../../Context/auth-context';

const time = new Date().getHours();
const greeting = time < 12 ? 'pagi' : time < 15 ? 'siang' : time < 18 ? 'sore' : 'malam';

const NavUser = () => {
  const { user } = useAuth();
  const { Logout } = useAuth();

  const userLogout = () => {
    Logout();
  };

  return (
    <>
      <div className="flex-row flex-1 justify-end mr-5 hidden sm:flex">
        <span className="text-xs font-thin italic">Selamat {greeting},</span>
        <span className="text-sm font-bold italic mx-2">{user.name}</span>
        <span onClick={userLogout} className="cursor-pointer text-xs font-bold text-blue-500 hover:text-blue-700 italic mx-5">
          Logout
        </span>
      </div>
    </>
  );
};

export default NavUser;
