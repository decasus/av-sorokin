import "./globals.scss";
import Header from "@/components/header/Header";
import { Golos_Text } from "next/font/google";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Сайт учителя физкультуры",
  description: "Сайт учителя физической культуры МОУ СОШ №1 г. Гаврилов-Ям",
};

const inter = Golos_Text({
  subsets: ["latin", "cyrillic"],
  variable: "--inter-font",
  //weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="antialiased">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
