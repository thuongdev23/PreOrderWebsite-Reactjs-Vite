import React, { useState } from "react";
import { useParams } from "react-router-dom";
import foodData from "../../Food/foodData";
import drinkData from "../Drink/drinkData";
import dessertData from "../Dessert/dessertData";
import promoData from "../Promo/promoData";
import snackData from "../Snack /snackData";
import { useCart } from "./CartContext";
import { getGlobalPreorder } from "../utils/globalPreorder";
import { useNavigate } from "react-router-dom";


const ItemDetail = () => {
  const { slug } = useParams();
  const allItems = [...foodData, ...drinkData, ...dessertData, ...promoData, ...snackData];
  const item = allItems.find((i) => i.slug === slug);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [selectedFilling, setSelectedFilling] = useState("");
  const [selectedBatter, setSelectedBatter] = useState("");
  const [selectedRice, setSelectedRice] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);

  if (!item) return <p className="text-center mt-10 text-red-500">Item not found.</p>;

  const { start, end } = getGlobalPreorder();
  const now = new Date();
  const isBefore = start && now < new Date(start);
  const isAfter = end && now > new Date(end);
  const isPreorderClosed = isBefore || isAfter;

  let finalPrice = parseFloat(item.price.toString().replace(",", "."));
  if (item.options?.fillings && selectedFilling) {
    const found = item.options.fillings.find((f) => f.label === selectedFilling);
    if (found?.price) finalPrice = parseFloat(found.price);
  }
  if (item.options?.riceChoices && selectedRice) {
    const rice = item.options.riceChoices.find(r => r.label === selectedRice);
    if (rice?.price) finalPrice += parseFloat(rice.price);
  }
  if (item.options?.toppings && selectedToppings.length > 0) {
    selectedToppings.forEach(label => {
      const t = item.options.toppings.find(t => t.label === label);
      if (t?.price) finalPrice += parseFloat(t.price);
    });
  }

  const handleAdd = () => {
    if (isPreorderClosed) {
      alert(isBefore ? "Preorder has not started yet." : "Preorder has ended.");
      return;
    }

    const itemWithOptions = {
      ...item,
      selectedFilling,
      selectedBatter,
      selectedRice,
      selectedToppings,
      note,
      quantity,
      price: finalPrice,
      uniqueKey: `${item.slug}-${selectedFilling}-${selectedBatter}-${selectedRice}-${selectedToppings.join("-")}-${Date.now()}`
    };

    addToCart(itemWithOptions, quantity, note);
    alert("Item added to cart!");
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-6">
      <img src={item.img} alt={item.title} className="w-full h-60 object-cover rounded" />
      <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
      <h5 className="text-gray-600">{item.description}</h5>
      <p className="text-lg mt-2 text-gray-700">{finalPrice.toFixed(2)} ₺</p>

      {item.options?.fillings && (
        <div className="mt-4">
          <label className="block font-medium">Filling:</label>
          {item.options.fillings.map((f, idx) => (
            <div key={idx} className="flex items-center mt-1">
              <input
                type="radio"
                name="filling"
                value={f.label}
                checked={selectedFilling === f.label}
                onChange={() => setSelectedFilling(f.label)}
                className="mr-2"
              />
              <span>{f.label} ({f.price} ₺)</span>
            </div>
          ))}
        </div>
      )}

      {item.options?.batters && (
        <div className="mt-4">
          <label className="block font-medium">Batter:</label>
          {item.options.batters.map((b, idx) => (
            <div key={idx} className="flex items-center mt-1">
              <input
                type="radio"
                name="batter"
                value={b.label}
                checked={selectedBatter === b.label}
                onChange={() => setSelectedBatter(b.label)}
                className="mr-2"
              />
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      )}

      {item.options?.riceChoices && (
        <div className="mt-4">
          <label className="block font-medium">Choose Your Rice:</label>
          {item.options.riceChoices.map((r, idx) => (
            <div key={idx} className="flex items-center mt-1">
              <input
                type="radio"
                name="rice"
                value={r.label}
                checked={selectedRice === r.label}
                onChange={() => setSelectedRice(r.label)}
                className="mr-2"
              />
              <span>{r.label} {r.price > 0 && `+ ₺${r.price}`}</span>
            </div>
          ))}
        </div>
      )}

      {item.options?.toppings && (
        <div className="mt-4">
          <label className="block font-medium">Extra Toppings (Optional):</label>
          {item.options.toppings.map((t, idx) => (
            <div key={idx} className="flex items-center mt-1">
              <input
                type="checkbox"
                value={t.label}
                checked={selectedToppings.includes(t.label)}
                onChange={(e) => {
                  const updated = e.target.checked
                    ? [...selectedToppings, t.label]
                    : selectedToppings.filter(top => top !== t.label);
                  setSelectedToppings(updated);
                }}
                className="mr-2"
              />
              <span>{t.label} {t.price > 0 && `+ ₺${t.price}`}</span>
            </div>
          ))}
        </div>
      )}

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
        onClick={handleAdd}
        disabled={isPreorderClosed}
        className={`mt-6 w-full py-2 px-4 rounded ${
          isPreorderClosed ? "bg-gray-400" : "bg-pink-400"
        }`}
      >
        {isBefore
          ? "Preorder Not Started"
          : isAfter
          ? "Preorder Closed"
          : `Add to Cart`}
      </button>
    </div>
  );
};

export default ItemDetail;
