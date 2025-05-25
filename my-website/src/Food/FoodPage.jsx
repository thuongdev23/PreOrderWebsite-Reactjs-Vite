// src/pages/FoodPage.jsx
import React from "react";
import foodData from "./foodData.js";
import { Link } from "react-router-dom";


const FoodPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Food Items</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {foodData.map((item) => (
            <Link to={`/item/${item.slug}`} key={item.id}>

             <div className="bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
             <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
               <img
                 src={item.img}
                 alt={item.title}
                 className="w-full h-full object-cover"
               />
             </div>
             <h3 className="mt-2 font-semibold text-sm sm:text-base">{item.title}</h3>
             <p className="text-sm text-gray-500">₺{item.price}</p>
           </div>
           </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;
