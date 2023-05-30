// import Navbar from '../components/fragments/Navbar'
import Navbar from '../components/templates/Navbar';

export const metadata = {
  title: 'NotedPak | create',
};

const LayoutCreate = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default LayoutCreate;
