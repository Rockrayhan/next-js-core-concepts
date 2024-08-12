import React from 'react';
import { getPosts } from './PostApi';
import Link from 'next/link';



const PostsPage = async () => {
    const postData = await getPosts()
    console.log(postData);
    
    return (
        <div>
            <h1> Here are all {postData.length} Posts </h1>


            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 my-4'>

                {
                    postData?.slice(0,20)?.map( (item) => <div className='border-2  p-4'
                    key={item.id}
                    >  
                        <h6>Title: {item.title}</h6> <br />
                        <p>
                            Description: {item.body}
                        </p>

                        <Link href={`/posts/${item.id}`}> <button className='bg-orange-800 px-4 py-2'> See Details  </button> </Link>
                        
                        </div> )
                }

            </div>
        </div>
    );
};

export default PostsPage;