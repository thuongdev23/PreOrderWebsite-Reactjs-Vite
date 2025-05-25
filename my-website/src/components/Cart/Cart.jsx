import React, { useState } from "react";
import { useCart } from "./CartContext";
import { getGlobalPreorder } from "../utils/globalPreorder";
import emailjs from "@emailjs/browser";



const Cart = () => {
  const { cart, updateCart, removeFromCart } = useCart();
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("Meet-up");
  const [tramStop, setTramStop] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [userEmail, setUserEmail] = useState("");

  const totalPrice = cart.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.toString().replace(",", "."));
    return sum + item.quantity * numericPrice;
  }, 0);

  const { start, end } = getGlobalPreorder();
  const now = new Date();
  const isBefore = start && now < new Date(start);
  const isAfter = end && now > new Date(end);
  const isPreorderClosed = isBefore || isAfter;

  const handleCheckout = () => {
    if (isPreorderClosed) {
      alert(isBefore ? "Preorder has not started yet." : "Preorder has ended.");
      return;
    }

    if (!userName || !userPhone) {
      alert("Please fill in your name and phone number.");
      return;
    }

    const orderDetails = cart.map((item, idx) => {
      return `${idx + 1}. ${item.title} - ${item.quantity} pcs\n` +
        (item.selectedFilling ? `  - Filling: ${item.selectedFilling}\n` : "") +
        (item.selectedBatter ? `  - Batter: ${item.selectedBatter}\n` : "") +
        (item.selectedRice ? `  - Rice: ${item.selectedRice}\n` : "") +
        (item.selectedToppings?.length ? `  - Toppings: ${item.selectedToppings.join(", ")}\n` : "") +
        (item.note ? `  - Note: ${item.note}\n` : "");
    }).join("\n");

    const totalPriceText = totalPrice.toFixed(2) + " ₺";

    const message = {
      name: userName,
      phone: userPhone,
      email: userEmail,
      delivery_method: deliveryMethod,
      tram_stop: tramStop,
      payment_method: paymentMethod,
      order_details: orderDetails,
      total: totalPriceText
    };

    emailjs.send("service_qxcwjzt", "template_h01engg", message,"lV3Tl03rNYuousokZ").then(
      () => {
        alert("Order sent! We'll confirm with you shortly.If you make online payment please send the receipt to Whatsapp No: +62 859 528 766 09");
      },
      (error) => {
        console.error("Failed to send order:", error);
        alert("Something went wrong. Please try again.");
      }
    );
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.uniqueKey} className="border p-4 rounded mb-4 shadow">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">Price: {parseFloat(item.price).toFixed(2)} ₺</p>
              {item.selectedFilling && <p className="text-sm">Filling: {item.selectedFilling}</p>}
              {item.selectedBatter && <p className="text-sm">Batter: {item.selectedBatter}</p>}
              {item.selectedRice && <p className="text-sm">Rice: {item.selectedRice}</p>}
              {item.selectedToppings && item.selectedToppings.length > 0 && (
                <p className="text-sm">Toppings: {item.selectedToppings.join(", ")}</p>
              )}
              <div className="mt-2">
                <label>Quantity:</label>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateCart(item.uniqueKey, Number(e.target.value), item.note)}
                  className="ml-2 border px-2 py-1 w-20"
                />
              </div>
              <div className="mt-2">
                <label>Note:</label>
                <input
                  type="text"
                  value={item.note}
                  onChange={(e) => updateCart(item.uniqueKey, item.quantity, e.target.value)}
                  className="ml-2 border px-2 py-1 w-full"
                />
              </div>
              <button
                onClick={() => removeFromCart(item.uniqueKey)}
                className="mt-3 bg-pink-400 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right text-lg font-semibold">Total: {totalPrice.toFixed(2)} ₺</div>

          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border p-2 mt-4 w-full"
          />

          <input
            type="tel"
            placeholder="Phone Number should be active on Whatsapp"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            className="border p-2 mt-2 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="border p-2 mt-2 w-full"
          />


          <label className="block mt-4">Delivery Method:</label>
          <select
            value={deliveryMethod}
            onChange={(e) => setDeliveryMethod(e.target.value)}
            className="border p-2 w-full"
          >
            <option>Meet-up Delivery</option>
            <option>Or near Sirintepe</option>
          </select>

          <label className="block mt-4">Tram Stop:</label>
          <select
            value={tramStop}
            onChange={(e) => setTramStop(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="">Select a tram stop</option>
            <option>Eczacılık</option>
            <option>Anadolu</option>
            <option>Bağlar</option>
            <option>İsmet İnönü</option>
            <option>Çarşı</option>
            <option>None of the above</option>
          </select>

          <label className="block mt-4">Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="border p-2 w-full"
          >
            <option>Cash on Delivery</option>
            <option>Bank Transfer</option>
            <option>Coupon</option>
          </select>

          {paymentMethod === "Bank Transfer" && (
            <div className="mt-6 border p-4 rounded bg-gray-50">
              <h4 className="font-bold text-lg mb-2">Send money to the account</h4>
              <p><strong>Account number:</strong> TR93 0001 5001 5800 7318 3954 86</p>
              <p><strong>Account Holder Name:</strong> Ranti Fitria Anugrah Yuliandi</p>
              <p><strong>Bank Name:</strong> VakıfBank</p>
              <p><strong>Reference:</strong> Your full name</p>
              <p className="text-sm text-gray-600 mt-2">Please make the payment and submit this form. We’ll confirm your order via WhatsApp.</p>
            </div>
          )}

          <button
            onClick={handleCheckout}
            disabled={isPreorderClosed}
            className={`mt-6 w-full py-2 px-4 rounded bg-pink-400 ${
              isPreorderClosed ? "bg-gray-400" : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            {isBefore ? "Preorder Not Started" : isAfter ? "Preorder Closed" : "Checkout"}
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;