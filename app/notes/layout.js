import Navbar from '../components/fragments/Navbar';

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
