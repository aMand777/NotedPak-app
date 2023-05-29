import NavAuth from '../components/fragments/NavAuth';

export const metadata = {
  title: 'NotedPak | Login',
};

const LayoutLogin = ({ children }) => {
  return <div>
  <NavAuth />
  {children}
  </div>
};

export default LayoutLogin;
