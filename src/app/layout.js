import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AuthProvider from "./services/AuthProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar/>
          <div className="text-center p-28 border-4 border-dotted border-green-900 m-10">
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
