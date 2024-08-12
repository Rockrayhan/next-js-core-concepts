import React from 'react';
import styles from './style.module.css' ;



 const getDetailsPosts = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json() ;
    return data ;
}



const PostDetailsPage = async ({params}) => {
    const singlePost = await getDetailsPosts(params.id);
    console.log(singlePost);
    
    // const singlePost = posts.find( (post)=> post.id == params.id ) ;
    const {title, body} = singlePost ;
    
    
    return (
        <div className={`${styles.tomato_bg} p-20`}>
            <h3 className={styles.text_tomato}> {title} </h3>

            <p className='mx-40'> {body}</p>
            
        </div>
    );
};

export default PostDetailsPage;