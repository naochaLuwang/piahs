import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";

import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import MobileHeader from "@/components/Header/MobileHeader";
import Social from "@/components/Header/Social";
import ScrollToTop from "../components/ScrollTop";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${montserrat.className} scrollbar-hide relative`}>
        <Social />
        <Header />
        <MobileHeader />

        <Navbar />
        <div className="flex flex-col w-full h-auto overflow-hidden ">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
