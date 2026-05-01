import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Tiles Gallery | Curated Collection of Exquisite Tiles",
  description: "Discover a curated collection of exquisite tiles at Tiles Gallery. Explore our diverse range of ceramic, porcelain, mosaic, and stone tiles, perfect for elevating your interior design. Shop now for timeless elegance and unique styles.",
  icons:{
    icon: "/logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.className} h-full antialiased`}
      data-theme='dark'
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0b]">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <ToastContainer></ToastContainer>
        </body>
    </html>
  );
}
