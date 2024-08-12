"use client";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("apple");
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
    const data = await res.json();
    setMeals(data.meals) ;
    console.log(data.meals);
    
  };

  const searchHandler = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  // useEffect( ()=> {
  //   getData() ;
  // }, [search] )

  console.log(meals);
  
  

  return (
    <div className="mt-10">
      <div>
        <input
          type="text"
          className="p-4 text-orange-800 outline-none"
          placeholder="Search meals..."
          onChange={searchHandler}
        />
        <button onClick={ ()=> loadData()} className="bg-orange-500 p-4"> Search </button>
      </div>


      <div className="grid grid-cols-3 gap-4 mt-5">
      {
      meals.map( (item) => <div key={item.idMeal}
      className="border-2 p-4 border-teal-600"
      >  
          <h6 className="text-2xl text-orange-500  my-4 font-extrabold">{item.strMeal}</h6>
          {/* <img src={item.strMealThumb} alt="" height="200px" width="200px" /> */}
        
       </div> )
      }
      </div>
    </div>
  );
};

export default Meals;
