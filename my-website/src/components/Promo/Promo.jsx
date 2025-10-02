import React from "react";
import { Link } from "react-router-dom";
import promoData from "./promoData";
import AdBanner from "../AdBanner";

const Promo = () => {
  const previewItems = promoData.slice(0, 4); // show only 4 items

  return (
   
    <div className="p-6 bg-white rounded-lg shadow-md">
      <AdBanner/>
      <h2 className="text-2xl font-bold mb-4 text-center">Promo</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {previewItems.map((item) => (
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
      <div className="mt-4 text-center">
        <Link
          to="/promo-page"
          className="inline-block bg-white border px-4 py-2 rounded hover:bg-gray-100 text-sm"
        >
          View all
        </Link>
      </div>
    </div>
  );
};

export default Promo;
