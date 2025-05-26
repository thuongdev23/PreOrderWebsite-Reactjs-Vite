// import React, { useState } from "react";
// import Logo from "/assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaCaretDown, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const Menu = [
//     { id: 1, name: "Home", link: "/" },
//     { id: 2, name: "Promo", link: "/promo-page" },
//     { id: 3, name: "Food", link: "/food-page" },
//     { id: 4, name: "Drink", link: "/drink-page" },
//     { id: 5, name: "Dessert", link: "/dessert-page" },
//     { id: 6, name: "Snack", link: "/snack-page" },
//   ];

// //   const DropdownLinks = [
// //     { id: 1, name: "Combo", link: "/#" },
// //     { id: 2, name: "Food", link: "/#" },
// //     { id: 3, name: "Drink", link: "/#" },
// //   ];

//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 text-black relative z-40">
//       {/* upper Navbar */}
//       <div className="bg-pink-400 py-2">
//         <div className="container flex justify-between items-center px-4">
//           {/* Logo */}
//           <a href="/" className="font-bold text-2xl flex gap-2">
//             {/* <img src={Logo} alt="Logo" className="w-10" /> */}
//             USA GIRLS
//           </a>

//           {/* Search bar - always visible */}
//           <div className="relative flex-1 mx-4 max-w-md hidden sm:block">
//             <input
//               type="text"
//               placeholder="search"
//               className="w-full rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:ring text-black"
//             />
//             <IoMdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
//           </div>

//           {/* Cart + Menu toggle */}
//           <div className="flex items-center gap-4">
//           <Link
//   to="/cart"
//   className="bg-white py-1 px-4 rounded-full flex items-center gap-3"
// >
//   <span className="hidden sm:inline">Cart</span>
//   <FaShoppingCart className="text-xl text-black drop-shadow-sm cursor-pointer " />
// </Link>

//             {/* Hamburger menu for mobile */}
//             <button
//               className="sm:hidden text-2xl"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Menu items (desktop) */}
//       <div className="hidden sm:flex justify-center bg-white">
//         <ul className="flex items-center gap-4 py-2">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="text-xl px-3 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           {/* <li className="group relative cursor-pointer">
//             <a
//               href="#"
//               className="text-xl flex items-center gap-1 hover:text-primary"
//             >
//               Best Selling
//               <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
//             </a> */}
//             {/* <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-1 z-50">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="block px-4 py-2 hover:bg-primary/10"
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div> */}
//           {/* </li> */}
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="sm:hidden bg-white border-t px-4 py-2">
//           {/* Search bar mobile */}
//           <div className="relative mb-3">
//             <input
//               type="text"
//               placeholder="search"
//               className="w-full rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:ring"
//             />
//             <IoMdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
//           </div>
//           {/* Mobile links */}
//           <ul className="flex flex-col gap-2">
//             {Menu.map((data) => (
//               <li key={data.id}>
//                 <a href={data.link} className="block px-2 py-1">
//                   {data.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import Logo from "/assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const Menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Promo", link: "/promo-page" },
    { id: 3, name: "Food", link: "/food-page" },
    { id: 4, name: "Drink", link: "/drink-page" },
    { id: 5, name: "Dessert", link: "/dessert-page" },
    { id: 6, name: "Snack", link: "/snack-page" },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm(""); // clear the input
      setMobileMenuOpen(false); // close mobile menu if open
    }
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 text-black relative z-40">
      {/* upper Navbar */}
      <div className="bg-pink-400 py-2">
        <div className="container flex justify-between items-center px-4">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl flex gap-2">
            USA GIRLS
          </Link>

          {/* Search bar - desktop */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex-1 mx-4 max-w-md hidden sm:block"
          >
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:ring text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <IoMdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
            </button>
          </form>

          {/* Cart + Menu toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="bg-white py-1 px-4 rounded-full flex items-center gap-3"
            >
              <span className="hidden sm:inline">Cart</span>
              <FaShoppingCart className="text-xl text-black drop-shadow-sm cursor-pointer" />
            </Link>

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
              <Link
                to={data.link}
                className="text-xl px-3 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t px-4 py-2">
          {/* Search bar mobile */}
          <form onSubmit={handleSearchSubmit} className="relative mb-3">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:ring"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <IoMdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
            </button>
          </form>

          {/* Mobile links */}
          <ul className="flex flex-col gap-2">
            {Menu.map((data) => (
              <li key={data.id}>
                <Link to={data.link} className="block px-2 py-1">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
