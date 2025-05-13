// app/layout.tsx
import Navbar from '@/components/navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'Mehedi Hasan | Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <main className="min-h-screen bg-secondary text-white md:ml-[180px] lg:ml-[200px] ">
          {children}
        </main>
      </body>
    </html>
  );
}

