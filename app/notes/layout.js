import Navbar from '../components/templates/Navbar';

export const metadata = {
  title: 'NotedPak | Notes',
};

const LayoutRegister = ({ children }) => {
  return (
    <div>
    <Navbar />
      {children}
    </div>
  );
};

export default LayoutRegister;
