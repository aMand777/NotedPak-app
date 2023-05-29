import NavAuth from '../components/fragments/NavAuth';

export const metadata = {
  title: 'NotedPak | Signup',
};

const LayoutRegister = ({ children }) => {
  return (
    <>
      <NavAuth />
      {children}
    </>
  );
};

export default LayoutRegister;
