import './globals.css';
import { Providers } from './providers';
import { Space_Grotesk } from 'next/font/google';
 
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata = {
  title: 'Blaize Test App',
  description: 'Blaize Test App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
