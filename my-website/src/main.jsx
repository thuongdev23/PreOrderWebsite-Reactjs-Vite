import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import { CartProvider } from './components/Cart/CartContext';
// import React from 'react';
// import App from './App';
// import { BrowserRouter } from "react-router-dom";


// <React.StrictMode>
//   <BrowserRouter>
//     <CartProvider>
//       <App />
//     </CartProvider>
//   </BrowserRouter>
// </React.StrictMode>



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// // import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import { CartProvider } from './components/Cart/CartContext.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <CartProvider>
//         <App />
//       </CartProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

