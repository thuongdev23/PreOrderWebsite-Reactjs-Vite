
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Headline from "./components/HeadingLine/Headline.jsx";
import Food from "./components/Food/Food.jsx";
import Drink from "./components/Drink/Drink.jsx";
import Dessert from "./components/Dessert/Dessert.jsx";
import FoodPage from "./components/Food/FoodPage.jsx";
import DrinkPage from "./components/Drink/DrinkPage.jsx";
import DessertPage from "./components/Dessert/DessertPage.jsx";
import ItemDetail from "./components/Cart/ItemDetail.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Promo from "./components/Promo/Promo.jsx";

import AdminStock from "./components/AdminStock.jsx";
import { initInventory } from "./components/utils/inventory.js";
import Snack from "./components/Snack /Snack.jsx";
import PromoPage from "./components/Promo/PromoPage.jsx";
import SnackPage from "./components/Snack /SnackPage.jsx";
import SearchResults from "./components/SearchResults"; 

const Home = () => {
  return (
    <>
      <Headline />
      <Promo/>
      <Food />
      <Drink />
      <Dessert />
      <Snack/>
    </>
  );
};

const App = () => {
  useEffect(() => {
    initInventory(foodData); // ✅ Initialize stock once
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-page" element={<FoodPage />} />
        <Route path="/drink-page" element={<DrinkPage />} />
        <Route path="/dessert-page" element={<DessertPage />} />
        <Route path="/promo-page" element={<PromoPage />} />
        <Route path="/snack-page" element={<SnackPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:slug" element={<ItemDetail />} />
        <Route path="/admin" element={<AdminStock />} /> 
        <Route path="/search" element={<SearchResults />} />

      </Routes>
    </Router>
  );
};

export default App;

