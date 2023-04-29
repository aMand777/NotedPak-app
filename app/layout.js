import './globals.css';
import Navbar from '../app/components/navbar';

export const metadata = {
  title: 'NotedPak',
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
}
