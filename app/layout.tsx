import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "The Car Guys",
  description: "We have the best cars in the world!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
