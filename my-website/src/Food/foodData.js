const foodData = [
    {
      id: 1,
      img: '/assets/nusantara-rica-rica.png',
      title: 'Nusantara Rice Bowl - Kulit Ayam Krispi Rica-rica',
      price: "59,00",
      description: 'Kulit ayam berbumbu yang dibalut tepung, digoreng kriuk sempurna, lalu disiram sambal rica-rica pedas manis ala Gadis Sunda.Kriuk, pedas, gurih—semuanya jadi satu di atas nasi hangat.Disajikan dengan tambahan sayur dan telur orak arik.Golden battered chicken skin, deep-fried until ultra crispy, then drenched in our spicy-sweet rica-rica sauce.Crunchy, spicy, savory — the perfect rice bowl combo!Served with veggies and scrambled egg. ',
      slug: 'Nusantara Rice Bowl - Kulit Ayam Krispi Rica-rica',
      options: {
        fillings: [
          {label: "Small", price: 59},
          {label: "Big", price: 90},

        ],  // existing
       
        riceChoices: [ // ✅ Required single choice
          { label: "Plain rice", price: 0 },
          { label: "Rice with lime leaves", price: 10 },
          { label: "Liwet rice", price: 10 },
        ],
        toppings: [ // ✅ Optional multi-select
          { label: "Chicken Liver", price: 10 },
          { label: "Egg (Telur dadar)", price: 15 },
          { label: "Sambal Sachet", price: 25 },
          { label: "Sambal Rica-rica", price: 15 },
          { label: "Sambal matah", price: 15 },
          { label: "Rice/nasi", price: 30 },
          { label: "Sunny Side Up (Telur ceplok)", price: 15 },
        ]
      },
      defaultStock: 10


    },
    {
      id: 8,
      img: '/assets/chicken-skin-stick.png',
      title: "Nusantara Angkringan - Sate Kulit atau Hati Ayam (Chicken skin or liver skewer)",
      price: 6,
      description: "Sate kulit ayam yang garing di luar, juicy di dalam, atau bisa pilih hati ayam yang lembut dan gurih.\
Crispy on the outside, juicy on the inside — grilled chicken skin or you can also choose tender, savory chicken liver.",
      slug: 'Nusantara Angkringan - Sate Kulit atau Hati Ayam (Chicken skin or chicken liver skewer)',
      options: {
        fillings: [
          {label: "Chicken Skin", price: 6},
          {label: "Chicken Liver", price: 8},

        ]},
      defaultStock: 10

    },
    {
      id: 3,
      img: '/assets/pho.png',
      title: "Phở Gà",
      price: "149,00",
      description: "Now with free added hoisin sauce and hot sauce originally from Vietnam. Vietnamese-style chicken noodle soup. Light yet rich broth, rice noodles, herbs, and shredded chicken. Comfort in a bowl.",
      slug: 'pho-ga',
      defaultStock: 10

    },
    {
      id: 4,
      img: '/assets/goicuon.png',
      title: "Gỏi cuốn",
      price: "79,00",
      description: "Soft rice paper rolls filled with veggies, egg, and chicken. Served with nước chấm (a tangy-sweet fish sauce dip) made by our Vietnamese chef.",
      slug: 'goi-cuon',
      defaultStock: 10

    },
    {
      id: 5,
      img: "/assets/ceker-ayam.png",
      title: "Ceker Ayam (Chicken Feet) (Kuah Seblak/Gochujang)",
      price: 69,
      description: "Ceker ayam yang dimasak empuk, meresap sempurna dalam sambal merah super pedas.\
Tekstur lembut dan rasa yang meledak di mulut , cocok buat kamu pecinta pedas sejati dan penggemar kuliner kaki lima Nusantara.\
Chicken feet simmered in a rich, fiery sambal chili sauce.\
Every bite is tender, spicy, and packed with flavor ,  a true Indonesian street food classic for the brave-hearted.",
      slug: 'Ceker Ayam (Chicken Feet) (Kuah Seblak/Gochujang)',
      options: {
        fillings: [
          {label: "Kuah Seblak (Sundanese spicy soup base)", price: 69},
          {label: "Gochujang (Korean spicy soup base)", price: 84},

        ]},
      defaultStock: 10

    },
    {
      id: 6,
      img: '/assets/asian-rice-bowl.png',
      title: 'Asian Rice Bowl- Egg Roll+Ekado+Yakiniku Chicken',
      price: "59,00",
      description: 'A hearty bowl of comfort featuring juicy chicken yakiniku, fluffy rice, crispy egg roll, and golden ekado (crispy egg-wrapped meatball).\
Served with a refreshing side of pickled carrot & daikon salad, drizzled with creamy mayo , a perfect balance of savory and fresh in every bite!\
Semangkuk nasi hangat dengan ayam yakiniku yang juicy, egg roll yang renyah, dan ekado berisi daging yang dibalut telur dan digoreng garing.\
Disajikan bersama salad wortel & lobak dengan siraman mayo lembut , kombo gurih-segar yang bikin nagih! ',
      slug: 'Asian Rice Bowl- Egg Roll+Ekado+Yakiniku Chicken',
      options: {
        fillings: [
          {label: "Small", price: 59},
          {label: "Big", price: 90},

        ],  // existing
  
        toppings: [ // ✅ Optional multi-select
          { label: "Egg", price: 15 },
          { label: "Ekado", price: 30 },
          { label: "Egg Roll", price: 30 },
          { label: "Salad", price: 50 },
          { label: "Mayonaise", price: 30 },
        ]
      },
      defaultStock: 10


    },
    {
      id: 7,
      img: '/assets/nusantara-rice-bowl-matah.png',
      title: 'Nusantara Rice Bowl - Kulit Ayam Krispi Matah',
      price: "59,00",
      description: 'Kulit ayam berbumbu yang dibalut tepung, digoreng kriuk sempurna, lalu disiram sambal matah. Kriuk, pedas, gurih—semuanya jadi satu di atas nasi hangat.Disajikan dengan tambahan sayur dan telur orak arik.\
Golden battered chicken skin, deep-fried until ultra crispy, then drenched in our spicy-sweet matah sauce.\
Crunchy, spicy, savory — the perfect rice bowl combo!\
Served with veggies and scrambled egg.  ',
      slug: 'Nusantara Rice Bowl - Kulit Ayam Krispi Matah',
      options: {
        fillings: [
          {label: "Small", price: 59},
          {label: "Big", price: 90},

        ],  // existing
       
        riceChoices: [ // ✅ Required single choice
          { label: "Plain rice", price: 0 },
          { label: "Rice with lime leaves", price: 10 },
          { label: "Liwet rice", price: 10 },
        ],
        toppings: [ // ✅ Optional multi-select
          { label: "Chicken Liver", price: 10 },
          { label: "Egg (Telur dadar)", price: 15 },
          { label: "Sambal Sachet", price: 25 },
          { label: "Sambal Rica-rica", price: 15 },
          { label: "Sambal matah", price: 15 },
          { label: "Rice/nasi", price: 30 },
          { label: "Sunny Side Up (Telur ceplok)", price: 15 },
        ]
      },
      defaultStock: 10


    },
    {
      id: 2,
      img: '/assets/nusantara-rice-bowl.png',
      title: 'Nusantara Rice Bowl - Ayam Rica-rica',
      price: "59,00",
      description: 'Perpaduan nasi hangat dengan ayam rica-rica khas yang pedas dan wangi rempah. Dilengkapi dengan sayuran segar dan telur orak-arik, menu ini siap membangkitkan selera makanmu!\
A comforting bowl of warm rice topped chicken rica-rica,  spicy, fragrant, and bursting with flavor. Served with sautéed greens and fluffy scrambled egg for a complete Nusantara experience.',
      slug: 'Nusantara Rice Bowl - Ayam Rica-rica',
      options: {
        fillings: [
          {label: "Small", price: 59},
          {label: "Big", price: 90},

        ],  // existing
       
        riceChoices: [ // ✅ Required single choice
          { label: "Plain rice", price: 0 },
          { label: "Rice with lime leaves", price: 10 },
          { label: "Liwet rice", price: 10 },
        ],
        toppings: [ // ✅ Optional multi-select
          { label: "Chicken Liver", price: 10 },
          { label: "Egg (Telur dadar)", price: 15 },
          { label: "Sambal Sachet", price: 25 },
          { label: "Sambal Rica-rica", price: 15 },
          { label: "Sambal matah", price: 15 },
          { label: "Rice/nasi", price: 30 },
          { label: "Sunny Side Up (Telur ceplok)", price: 15 },
        ]
      },
      defaultStock: 10

    },
    {
      id: 9,
      img: '/assets/nusantara-sambal-matah.png',
      title: 'Nusantara Rice Bowl - Ayam Sambal Matah',
      price: "59,00",
      description: 'Nasi hangat disajikan dengan ayam goreng dan siraman sambal matah yang segar, pedas, dan harum serai. Dipadukan dengan telur orak-arik dan sayur, cocok untuk pencinta rasa nusantara yang autentik.\
Steamed rice served with shredded fried chicken, topped with fresh sambal matah, a raw chili relish with lemongrass and shallots. Accompanied by scrambled egg and vegetables for the perfect balance of heat and freshness.',
      options: {
        fillings: [
          {label: "Small", price: 59},
          {label: "Big", price: 90},

        ],  // existing
        riceChoices: [ // ✅ Required single choice
          { label: "Plain rice", price: 0 },
          { label: "Rice with lime leaves", price: 10 },
          { label: "Liwet rice", price: 10 },
        ],
        toppings: [ // ✅ Optional multi-select
          { label: "Chicken Liver", price: 10 },
          { label: "Egg (Telur dadar)", price: 15 },
          { label: "Sambal Sachet", price: 25 },
          { label: "Sambal Rica-rica", price: 15 },
          { label: "Sambal matah", price: 15 },
          { label: "Rice/nasi", price: 30 },
          { label: "Sunny Side Up (Telur ceplok)", price: 15 },
        ]
      },
      defaultStock: 10


    },

    // Add more as needed...
  ];
  
  export default foodData;
  