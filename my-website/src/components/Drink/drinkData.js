import React from "react";
const drinkData = [
  {
    id: 1,
    img: '/assets/lattematcha.png',
    title: 'Matcha Latte — Si Hijau Manja',
    price: 69,
    description: 'Creamy, earthy, and full of spark. One sip = instant chill and charm that you will get from our matcha latte.\
We use ceremonial grade only.',
    slug: 'Matcha Latte — Si Hijau Manja',
    options: {
      fillings: [
        {label: "Small", price: 69},
        {label: "Big", price: 79},
        {label: "Tall", price: 89},
      ],  // existing
      toppings: [ // ✅ Optional multi-select
        { label: "Hot", price: 0 },
        { label: "Iced", price: 0},
      ]
    },
  },
    {
      id: 2,
      img: '/assets/thaitea.png',
      title: "Thai Tea - Si Orens Imut",
      price: 69,
      description: "Sweet, bold, and creamy. A sunshiney sip that slaps!",
      slug: "Thai-Tea - Si-Orens-Imut",
      options: {
        fillings: [
          {label: "Small", price: 69},
          {label: "Big", price: 79},
          {label: "Tall", price: 89},
  
  
        ],  // existing
  
        toppings: [ // ✅ Optional multi-select
          { label: "Hot", price: 0 },
          { label: "Iced", price: 0},
        ]
      },
    },
    {
      id: 3,
      img: '/assets/hojichalatte.png',
      title: "Hojicha Latte - Si Hangat Lembut",
      price: 69,
      description: 'Toasty vibes only. Roasted tea + creamy hug = pure comfort.',
      slug:  "Hojicha Latte - Si Hangat Lembut",
      options: {
        fillings: [
          {label: "Small", price: 69},
          {label: "Big", price: 79},
          {label: "Tall", price: 89},
        ],  // existing
        toppings: [ // ✅ Optional multi-select
          { label: "Hot", price: 0 },
          { label: "Iced", price: 0},
        ]
      },
    },
    {
      id: 4,
      img: '/assets/kumquattea.png',
      title: "Kumquat Tea - Si Asem Ceria",
      price: 59,
      description: 'Zesty, fresh, and a lil’ chaotic. Just like your BFF.',
      slug: "Kumquat Tea - Si Asem Ceria",
      options: {
        fillings: [
          {label: "Small", price: 69},
          {label: "Big", price: 79},
          {label: "Tall", price: 89},
        ],  // existing
        toppings: [ // ✅ Optional multi-select
          { label: "Hot", price: 0 },
          { label: "Iced", price: 0},
        ]
      },
    },
    {
      id: 5,
      img: "/assets/es-teh-peng.png",
      title: "Es Teh Pengkolan (Iced tea)",
      price: 59,
      description: 'Our own take on street-style iced tea—rich, sweet, slightly herbal, full of character. We mix special tea brought from Indonesia.',
      slug: 'Es Teh Pengkolan (Iced tea)',
      options: {
        fillings: [
          {label: "Small", price: 59},
          {label: "Big", price: 69},
          {label: "Tall", price: 79},
        ],  // existing
        toppings: [ // ✅ Optional multi-select
          // { label: "Hot", price: 0 },
          { label: "Iced", price: 0},
        ]
      },
    },
    {
      id: 6,
      img: "/assets/iced-butterfly.png",
      title: "Iced Butterfly Pea Tea Lemonade",
      price: 59,
      description: 'Our special mix of Butterfly pea flower with lemonade for refreshing taste and pretty color in the eye. ',
      slug: 'Iced Butterfly Pea Tea Lemonade',
      options: {
        fillings: [
          {label: "Small", price: 59},
          {label: "Big", price: 69},
          {label: "Tall", price: 79},
        ],  // existing
        toppings: [ // ✅ Optional multi-select
          // { label: "Hot", price: 0 },
          { label: "Iced", price: 0},
        ]
      },
    },
    // Add more as needed...
  ];
  
  export default drinkData;
  