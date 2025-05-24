import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import foodData from "../../Food/FoodData";
import drinkData from "../Drink/drinkData";
import dessertData from "../Dessert/dessertData";
// import { CartContext } from "../Cart/CartContext";

const ItemDetail = () => {
  const { slug } = useParams();
  const allItems = [...foodData,...drinkData,...dessertData]
  // const { addToCart } = useContext(CartContext);
  const item = allItems.find((i) => i.slug === slug);

  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");

  if (!item) return <p className="text-center mt-10 text-red-500">Item not found.</p>;

  // const handleAdd = () => {
  //   addToCart(item, quantity, note);
  //   alert("Item added to cart!");
  // };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-6">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-60 object-cover rounded"
      />
      <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
      <p className="text-lg mt-2 text-gray-700">{item.price} ₺</p>

      <div className="mt-4">
        <label className="block font-medium">Quantity:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border rounded p-1 w-24 mt-1"
        />
      </div>

      <div className="mt-4">
        <label className="block font-medium">Note:</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add special request..."
          className="border rounded w-full p-2 mt-1"
          rows={3}
        />
      </div>

      <button
        // onClick={handleAdd}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemDetail;




