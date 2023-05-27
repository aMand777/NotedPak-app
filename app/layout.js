import './globals.css';
import { Provider } from '../Context/notesContext';
import AuthProvider from '../Context/auth';
import { UserProvider } from '../Context/user';

export const metadata = {
  title: 'NotedPak',
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <>
            <AuthProvider>
              <UserProvider>
                <Provider>{children}</Provider>
              </UserProvider>
            </AuthProvider>
          </>
        </body>
      </html>
    </>
  );
}
