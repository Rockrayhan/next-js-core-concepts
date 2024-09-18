"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();

  const router = useRouter();

  const loginHandler = () => {
    router.push("/about");
  };
  const session = useSession();
  console.log(session.data);
  // console.log(session.data.user.type);

  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/service",
    },
    {
      title: "Contacts",
      path: "/contact",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
  ];

  // if (pathName.includes("dashboard"))
  //   return <div className="bg-slate-400"> Dashboard Layout </div>;

  return (
    <nav className="flex justify-evenly my-4">
      <Link href={"/"}>
   
        <h6> NEXT-JS </h6>
      </Link>

      <ul className="flex gap-4">
        {links.map((link) => (
          <Link
            className={`${pathName == link.path && "text-teal-600"}`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>

{
    session.status === "unauthenticated" ? 

      <Link href="/api/auth/signin">
      <button
        onClick={loginHandler}
        className="btn bg-orange-400 p-3  rounded-lg"
      >
        Login
      </button>
      
      </Link>

      : 

      <button
      
      className="btn bg-red-400 p-3  rounded-lg"
      onClick={ ()=> { signOut() }  }
    >
      Logout
    </button>
}



<div className="flex">

  <Image src={session?.data?.user?.image} height={50} width={50} className="rounded-full"/>

  <h6> {session?.data?.user?.name || "" } </h6> |
  <h6> {session?.data?.user?.type || "" } </h6>

</div>
    </nav>
  );
};

export default Navbar;
