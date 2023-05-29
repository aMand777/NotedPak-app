import './globals.css';
import { NotesProvider } from './Context/notes-context';
import AuthProvider from './Context/auth-context';

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
              <NotesProvider>{children}</NotesProvider>
            </AuthProvider>
          </>
        </body>
      </html>
    </>
  );
}
