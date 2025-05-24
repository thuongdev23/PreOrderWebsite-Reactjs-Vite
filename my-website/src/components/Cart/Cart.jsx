import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="border-b py-4">
            <h3 className="font-semibold">{item.title}</h3>
            <p>₺{item.price} x {item.quantity}</p>
            <p className="text-sm italic">Note: {item.note || "None"}</p>

            <div className="flex gap-4 mt-2">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                className="w-20 border rounded p-1"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <div className="text-right font-bold text-lg mt-4">
        Total: ₺{total}
      </div>

      {cartItems.length > 0 && (
        <button
          onClick={() => alert("Proceed to order (EmailJS or summary page)")}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
        >
          Confirm Order
        </button>
      )}
    </div>
  );
};

export default Cart;
