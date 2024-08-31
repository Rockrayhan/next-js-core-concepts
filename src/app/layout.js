"use client" ;
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  
  

  const pathName = usePathname();

  const router = useRouter();

  const loginHandler = () => {
    router.push('/about')
  }

  const links = [
    {
      title : "About",
      path: '/about'
    },
    {
      title : "Services",
      path: '/service'
    },
    {
      title : "Contacts",
      path: '/contact'
    },
    {
      title : "Blogs",
      path: '/blogs'
    },
    {
      title : "Posts",
      path: '/posts'
    },
    {
      title : "Meals",
      path: '/meals'
    },
  ]

  if (
    pathName.includes("dashboard")
  ) return <html className="bg-slate-400"> Dashboard Layout </html> ;


  return (
    <html lang="en">
      <body className={inter.className}>

      <nav className="flex justify-evenly my-4">
        <Link href={'/'}> <h6> NEXT-JS </h6> </Link>

        <ul className="flex gap-4">
        {
          links.map((link) => <Link className={`${pathName == link.path && "text-teal-600" }`} key={link.path} href={link.path} > {link.title} </Link>  )
        }
        </ul>

        <button onClick={loginHandler} className="btn bg-orange-400 p-3  rounded-lg"> Login </button>
      </nav>

      <div className="text-center p-28 border-4 border-dotted border-green-900 m-10">
        {children}
      </div>

  <Footer/>
        
        
        </body>
    </html>
  );
}
