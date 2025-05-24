import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Headline from "./components/HeadingLine/Headline.jsx";
import Food from "./Food/Food.jsx";
import Drink from "./components/Drink/Drink.jsx";
import Dessert from "./components/Dessert/Dessert.jsx";
import FoodPage from "./Food/FoodPage";
import DrinkPage from "./components/Drink/DrinkPage.jsx";
import DessertPage from "./components/Dessert/DessertPage.jsx";
import ItemDetail from "./components/Cart/ItemDetail.jsx";

const Home = () => {
  return (
    <>
      <Headline />
      <Food />
      <Drink />
      <Dessert />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/drink-page" element={<DrinkPage />} />
        <Route path="/dessert-page" element={<DessertPage />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/item/:slug" element={<ItemDetail />} />


      </Routes>
    </Router>
  );
};

export default App;
