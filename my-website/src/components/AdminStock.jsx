import React, { useState, useEffect } from "react";
import foodData from "../Food/foodData.js";
// import { getInventory, setInventory } from "./components/utils/inventory.js";
// import {setInventory } from "./utils/inventory.js";
import { getInventory, setInventory } from "./utils/inventory.js";
// import { getGlobalPreorder, setGlobalPreorder } from "./components/utils/inventory.js";
import { getGlobalPreorder,setGlobalPreorder } from "./utils/globalPreorder.js";

const AdminStock = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [inventory, setLocalInventory] = useState({});
  const [preorderWindow, setPreorderWindow] = useState({ start: "", end: "" });

  useEffect(() => {
    const password = prompt("Enter admin password:");
    if (password === "gadis123") {
      setAuthenticated(true);
      setLocalInventory(getInventory());
      setPreorderWindow(getGlobalPreorder());
    } else {
      alert("Wrong password. Redirecting...");
      window.location.href = "/";
    }
  }, []);

  const handleStockChange = (slug, value) => {
    const updated = { ...inventory, [slug]: parseInt(value, 10) || 0 };
    setLocalInventory(updated);
    setInventory(updated);
  };

  const handlePreorderChange = (key, value) => {
    const updated = { ...preorderWindow, [key]: value };
    setPreorderWindow(updated);
    // setGlobalPreorder(updated);
  };

  const resetStock = () => {
    const reset = {};
    foodData.forEach(item => {
      reset[item.slug] = item.defaultStock ?? 10;
    });
    setInventory(updated);
    setLocalInventory(reset);
    alert("Stock reset to default.");
  };

  if (!authenticated) return null;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🧮 Stock Manager</h2>
      {foodData.map((item) => (
        <div key={item.slug} className="mb-3 border-b pb-2">
          <p className="font-semibold">{item.title}</p>
          <input
            type="number"
            min="0"
            value={inventory[item.slug] ?? ""}
            onChange={(e) => handleStockChange(item.slug, e.target.value)}
            className="border px-2 py-1 mt-1 w-32"
          />
        </div>
      ))}

      <button
        onClick={resetStock}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Reset All Stock
      </button>

      <h3 className="mt-6 font-bold text-lg">📅 Global Preorder Window</h3>
      <label className="block mt-2 text-sm">Start Time:</label>
      <input
        type="datetime-local"
        value={preorderWindow.start || ""}
        onChange={(e) => handlePreorderChange("start", e.target.value)}
        className="border px-2 py-1 mt-1 w-full"
      />

      <label className="block mt-2 text-sm">End Time:</label>
      <input
        type="datetime-local"
        value={preorderWindow.end || ""}
        onChange={(e) => handlePreorderChange("end", e.target.value)}
        className="border px-2 py-1 mt-1 w-full"
      />
      <button
  onClick={() => {
    if (!preorderWindow.start || !preorderWindow.end) {
      alert("Please set both start and end time!");
      return;
    }

    if (new Date(preorderWindow.start) >= new Date(preorderWindow.end)) {
      alert("Start time must be before end time.");
      return;
    }

    setGlobalPreorder(preorderWindow);
    alert("✅ Preorder time saved!");
  }}
  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
>
  Confirm Preorder Time
</button>

    </div>
  );
};

export default AdminStock;
