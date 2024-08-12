import Meals from '@/components/Meals';
import React from 'react';

const MealsPage = () => {
    return (
        <div>
            <h1 className='text-3xl my-3'> Search your Desired Meals </h1>
            <p> you can only see not eat, that's how you enlarge your patience </p>


            <Meals/>


        </div>
    );
};

export default MealsPage;