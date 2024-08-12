import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {

    const blogs = [
        {
          id: 1,
          title: "Understanding JavaScript Closures",
          description: "A deep dive into closures in JavaScript, exploring how they work and their practical applications in modern coding."
        },
        {
          id: 2,
          title: "The Evolution of Web Development",
          description: "An overview of how web development has evolved over the years, from simple HTML pages to complex web applications."
        },
        {
          id: 3,
          title: "Mastering CSS Grid Layout",
          description: "Learn how to use CSS Grid Layout to create responsive and flexible web designs with minimal effort."
        },
        {
          id: 4,
          title: "Why You Should Learn TypeScript",
          description: "An introduction to TypeScript, explaining why it's becoming a popular choice for developers and how it improves JavaScript development."
        },
        {
          id: 5,
          title: "Building RESTful APIs with Laravel",
          description: "Step-by-step guide to creating RESTful APIs using Laravel, including routing, controllers, and authentication."
        },
    ]



    return (
        <div>

            {
                blogs.map( (blog)=> <div key={blog.id} className='border-2 border-teal-800 p-8'> 
                     <h1> {blog.title} </h1>
                     <p> {blog.description} </p>
                     <Link href={`/blogs/${blog.id}`}> <button className='bg-yellow-600  p-3 rounded-2xl mt-4'> See Details </button>  </Link>
                     {/* <Link href={blog.id}> <button className='bg-yellow-600  p-3 rounded-2xl mt-4'> See Details </button>  </Link> */}
                     
                     </div> )
            }

        </div>
    );
};

export default BlogsPage;