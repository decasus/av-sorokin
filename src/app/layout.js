import './globals.scss'
import Header from "@/components/header/Header";
import { Inter } from 'next/font/google'
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: 'Сайт учителя физкультуры',
  description: 'Сайт учителя физической культуры МОУ СОШ №1 г. Гаврилов-Ям',
}

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
      <Header/>
      <main>
          {children}
      </main>
      <Footer/>
      </body>
    </html>
  )
}
