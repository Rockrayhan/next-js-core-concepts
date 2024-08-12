import React from 'react';

const BlogDetails = ({params}) => {
    console.log(params.id);    
    const {title, description} = blogs.find( (blog) => blog.id == params.id ) ;
    return (
        <div>
            <h1> {title} </h1>
            <p>{description}</p>
        </div>
    );
};





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


export default BlogDetails;