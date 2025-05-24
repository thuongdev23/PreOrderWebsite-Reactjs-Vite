// import React from "react";
// import Logo from "/assets/logo.png";
// import { IoMdSearch} from "react-icons/io";
// import {FaCaretDown, FaCartShopping} from "react-icons/fa6";

// const Navbar = () =>{
//     const Menu = [
//         {
//             id: 1,
//             name: "Home",
//             link: "/#",
        
//         },
//         {
//             id: 2,
//             name: "Promo",
//             link: "/#",
        
//         },
//         {
//             id: 3,
//             name: "Food",
//             link: "/Food",
        
//         },
//         {
//             id: 4,
//             name: "Drink",
//             link: "/Drink",
        
//         },
//         {
//             id: 5,
//             name: "Dessert",
//             link: "/Dessert",
        
//         },
//         {
//             id: 6,
//             name: "Snack",
//             link: "/Snack",
        
//         },
//     ];
//     const DropdownLinks = [
//         {
//             id: 1,
//             name: "Combo",
//             link: "/#"
//         },
//         {
//             id: 2,
//             name: "Food",
//             link: "/#"
//         },
//         {
//             id: 3,
//             name: "Drink",
//             link: "/#"
//         },
//     ];
//     return <div className="shadow-md bg-white
//             dark:bg-gray-900 dark: text-white duration-200
//             relative z-40">
//             {/* upper Navbar */}
//                 <div className="bg-primary/40 py-2">
//                     <div className="container flex 
//                     justify-between items-center">
//                         <div>
//                         <a href = "#" className="font-bold
//                         text-2xl sm:text-3xl flex gap-2">
//                             <img src={Logo} alt="Logo" 
//                              className="w-10"/> 
//                             USA GIRLS
//                         </a>
//                         </div>
//                         {/* search bar and the order button */}
//                     <div className="flex justify-between items-center gap-4">
//                         <div className ="relative group hidden 
//                         sm:block">
//                         <input 
//                             type = "text"
//                             placeholder="search"
//                             className ="w-[200px] sm:w-[200px] 
//                             group-hover:w-[300px] transition-all
//                             duration-300 rounded-full border
//                             border-gray-300 px-2 py-1
//                             focus: outline-none focus:border-1
//                             focus: border-primary text-blue" 
//                         />
//                         <IoMdSearch className="text-gray-500
//                         group-hover:text-primary absolute
//                         top-1/2 -translate-y-1/2 right-3"/>
//                           </div>
//                     </div>
//                     {/* {other buton} */}
//                     <button
//                     onClick={() => alert("Ordering not available yet")}
//                     className ="bg-gradient-to-r from-primary to-secondary transition-all
//                     duration-200 text-white py-1 px-4 rounded-full flex
//                     items-center gap-3 group">
//                         <span className="group-hover:block hidden
//                         transition-all duration-200">Order
//                         </span>
//                         <FaCartShopping
//                         className ="text-xl text-white drop-shadow-sm cursor-pointer"/>

//                     </button>
//                 </div>
//              </div>
//              <div className="flex justify-center bg-white ">
//                 <ul className="sm:flex hidden items-center
//                 gap-4">
//                     {Menu.map((data)=>(
//                         <li key={data.id}>
//                             <a href={data.link}
//                             className = "text-black text-2xl inline-block px-4 hover:text-primary duration-200"
//                             >
//                                 {data.name}</a>
//                         </li>
//                     ))}
//                     {/* simple dropdown and links */}
//                     <li className="group relative cursor-pointer">
//                         <a href="#" className=" text-black text-2xl flex items-center gap-[2px] py-2">
        
//                             Best Selling
//                         <span>
//                             <FaCaretDown
//                             className="transition-all duration-200
//                             group-hover:rotate-180"/>
//                         </span>
//                         </a>
//                         <div className="absolute z-[9999] hidden group-hover:block w-[150px]
//                         rounded-md bg-white p-2 text-black shadow-md">
//                             <ul>
//                                 {DropdownLinks.map((data) => (
//                                 <li key={data.id}>
//                                     <a href={data.link}
//                                     className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
//                                     {data.name}
//                                     </a>
//                                 </li>
//                                 ))}
//                             </ul>
//                         </div>

//                     </li>
//                 </ul>
//              </div>
//         </div>

//         //    {lower navbar}
       
// }
// export default Navbar;




import React, { useState } from "react";
import Logo from "/assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Menu = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Promo", link: "/#" },
    { id: 3, name: "Food", link: "/Food" },
    { id: 4, name: "Drink", link: "/Drink" },
    { id: 5, name: "Dessert", link: "/Dessert" },
    { id: 6, name: "Snack", link: "/Snack" },
  ];

  const DropdownLinks = [
    { id: 1, name: "Combo", link: "/#" },
    { id: 2, name: "Food", link: "/#" },
    { id: 3, name: "Drink", link: "/#" },
  ];

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 text-black relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center px-4">
          {/* Logo */}
          <a href="#" className="font-bold text-2xl flex gap-2">
            <img src={Logo} alt="Logo" className="w-10" />
            USA GIRLS
          </a>

          {/* Search bar - always visible */}
          <div className="relative flex-1 mx-4 max-w-md hidden sm:block">
            <input
              type="text"
              placeholder="search"
              className="w-full rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:ring text-black"
            />
            <IoMdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Cart + Menu toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary text-black py-1 px-4 rounded-full flex items-center gap-3"
            >
              <span className="hidden sm:inline">Order</span>
              {/* <FaCartShopping className="text-xl" /> */}
              <FaShoppingCart className="text-xl text-black drop-shadow-sm cursor-pointer" />

            </button>

            {/* Hamburger menu for mobile */}
            <button
              className="sm:hidden text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu items (desktop) */}
      <div className="hidden sm:flex justify-center bg-white">
        <ul className="flex items-center gap-4 py-2">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="text-xl px-3 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="text-xl flex items-center gap-1 hover:text-primary"
            >
              Best Selling
              <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-1 z-50">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="block px-4 py-2 hover:bg-primary/10"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t px-4 py-2">
          {/* Search bar mobile */}
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="search"
              className="w-full rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:ring"
            />
            <IoMdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
          </div>
          {/* Mobile links */}
          <ul className="flex flex-col gap-2">
            {Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="block px-2 py-1">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

