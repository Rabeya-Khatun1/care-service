import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import AuthProvider from "@/provider/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Care Service | Trusted Home Care",
  description: "Professional baby care and home services at your doorstep.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en " data-theme="light">
          <AuthProvider>
         <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
           <main className="mx-3 bg-gray-100 md:mx-auto ">
         {children}
       </main>

       <Footer></Footer>
      </body>
    </AuthProvider>
   
    </html>
  );
}
