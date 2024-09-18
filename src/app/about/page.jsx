import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

export const metadata = {
  title: "Next js app",
  description: "Next js core concepts",
};

const AboutPage = async () => {

  const session = await getServerSession(authOptions) ;
  console.log({session});
  

    return (
        <main className="flex flex-col items-center justify-between p-24">
        <h1 className="text-teal-500 mb-20">
          This is About Page
        </h1>

        <div>

        <Link href={'/about/history'}> About out History </Link> ||
        <Link href={'/about/mission'}> About out Mission </Link>

        </div>
      </main>
    );

  };

export default AboutPage;