/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line camelcase
import { Noto_Sans_HK, Noto_Sans_Javanese } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const hk = Noto_Sans_HK({
  subsets: ["latin"],
  variable: "--font-hk",
});

const javanese = Noto_Sans_Javanese({
  subsets: ["latin"],
  variable: "--font-javanese",
});

export const metadata = {
  title: "JM Products",
  description:
    "JM Products, The industry leader in Line Support Clamps & Wire Harnesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${hk.variable} ${javanese.variable} flex flex-col justify-between min-h-screen`}
      >
        <Navbar />
        <div className="w-full flex flex-col items-center justify-center">
          <Toaster />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
