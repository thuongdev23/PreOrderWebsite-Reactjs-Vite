const snackData = [
    // {
    //     id: 1,
    //     img: '/assets/uligoreng.jpg',
    //     title: "Uli Goreng",
    //     price: 40,
    //     description: '2 pcs of crispy fried glutinous rice cake—crunchy outside, chewy inside.',
    //     slug: 'Uli-Goreng',

    // },
    // {
    //     id: 2,
    //     img: '/assets/bakwan.jpg',
    //     title: 'Bakwan',
    //     price: 25,
    //     description: '3 pcs of Indonesian-style of vegetable fritters—crispy, golden, and packed with flavor in every bite.',
    //     slug: 'Bakwan',
    //     options: {
    //         fillings: [
    //           { label: "Jagung/Corn", price: 25 },
    //           { label: "Sayur/Mix Vegetables", price: 25 },
             
    //         ],
    //     },


    // }
     {
      id: 1,
      img: '/assets/tayaki.jpg',
      title: "Taiyaki",
      price: 50,
      description: '2 Pcs of fish-shaped pancake filled with sweet or savory options. Crispy on the outside, soft on the inside. Cuteness you can bite.',
      slug: "Taiyaki",
      options: {
        fillings: [
          { label: "Cheese Filling", price: 50 },
          { label: "Chocolate Filling", price: 50 },
          { label: "Red Bean Filling", price: 60 }
        ],
        batters: [
          { label: "Original (Vanilla)" },
          { label: "Taro" },
          { label: "Cheese" },


        ]
      }
    },
    {
      id: 2,
      img: '/assets/takoyaki.jpg',
      title: "Takoyaki",
      price: 75,
      description: '5 pcs of fried batter shaped like balls, topped with takoyaki sauce, mayo, bonito flakes, and seaweed. The ultimate umami bomb.',
      slug: "takoyaki",
      options: {
        fillings: [
          { label: "Cheese", price: 0 },
          { label: "Sausage", price: 0 },
          { label: "Mix of Chesse and Sausage", price: 0 }
        ],
      }
    },
]
export default snackData;