import Button from "./components/elements/Button";
import Image from "next/image";
import NavAuth from './components/fragments/NavAuth'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <NavAuth />
      <div className="w-full h-full">
        <div className="w-11/12 h-3/4 sm:w-1/2 sm:h-5/6 mx-auto bg-green-100 rounded-lg mt-24 pb-5">
          <div className="text-lg text-center font-semibold italic pt-3">
            <h1>Welcome to NotedPak</h1>
            <div className='w-32 h-32 mx-auto relative my-5'>
              <Image src='/img/favicon.ico' alt='notedPak-icon' fill={ true } /> 
            </div>
            <div className='flex flex-roe justify-evenly'>
            <Link href='/login'>
            <Button>Login</Button>
            </Link>
            <Link href='/register'>
            <Button>Register</Button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
