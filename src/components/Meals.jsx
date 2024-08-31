"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  const loadData = async () => {
   try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
    const data = await res.json();
    setMeals(data.meals) ;
    // console.log(data.meals);
    setError("");
    
   } catch (error) {
    setError("No Data Found");
    
   }
    
  };

  const searchHandler = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect( ()=> {
    loadData() ;
  }, [] )

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
       meals?.length > 0 && !error && meals?.map( (item) => <div key={item.idMeal}
      className="border-2 p-4 border-teal-600"
      >  
          <h6 className="text-2xl text-orange-500  my-4 font-extrabold">{item.strMeal}</h6>
          {/* <img src={item.strMealThumb} /> */}
          <Image src={item.strMealThumb} alt={item.strMealThumb} width={500} height={500}/>
        
       </div> )
      }


      {
        error && <h6> {error} </h6>
      }
      </div>
    </div>
  );
};

export default Meals;
