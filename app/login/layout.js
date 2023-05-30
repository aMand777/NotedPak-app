import NavAuth from '../components/fragments/NavAuth';

export const metadata = {
  title: 'NotedPak | Login',
};

const LayoutLogin = ({ children }) => {
  return (
    <>
      <NavAuth />
      {children}
    </>
  );
};

export default LayoutLogin;
