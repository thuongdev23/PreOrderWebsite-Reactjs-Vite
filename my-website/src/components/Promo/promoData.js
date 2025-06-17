
const promoData = [
    // {
    //     id: 1,
    //     img: '/assets/combo-menu-asian.png',
    //     title: "(Combo Menu-Asian Fushion) Rice Bowl Hokben + Kumquat Tea",
    //     price: 100,
    //     description: 'We are proudly introducing our Indo+Japanese fushion food along with our loved kumquat tea that we bring from Vietnam. This combo consist of small size bowl of rice topped with chicken yakiniku, egg roll, ekado, with side of our pickled-salad and our secret mayo recipe.The bowl.. with the kumquat tea? Such a nice pairing to welcome the summer and saying bye to the spring. ',
    //     slug: '(Combo Menu-Asian Fushion) Rice Bowl Hokben + Kumquat Tea',

    // },
    {
        id: 1,
        img: '/assets/combo-rice-bowl.png',
        title: '(Combo Menu-Rice Bowl Ayam Sambal Matah+Ice Tea Pengkolan)',
        price: 100,
        description: 'Have you ever tried Sambal Matah that both smells and taste amazing? The sambal, paired with moist bite of chicken plus rice, it is heavenly! Want a sip of something refreshing along with hint of jasmine? Say no more as we also combine this perfect bowl with our Indonesian tea mix. ',
        slug: '(Combo Menu-Rice Bowl Ayam Sambal Matah+Ice Tea Pengkolan)',
        options: {
        toppings: [
          { label: "Chicken Liver", price: 10 },
          { label: "Egg (Telur dadar)", price: 15 },
          { label: "Sambal Sachet", price: 25 },
          { label: "Sambal Rica-rica", price: 15 },
          { label: "Sambal matah", price: 15 },
          { label: "Rice/nasi", price: 30 },
          { label: "Sunny Side Up (Telur ceplok)", price: 15 },
        ]
      },
    },
            {
        id: 2,
        img: '/assets/chickenKatsu.png',
        title: "Japanese Curry with Chicken Katsu+Kumquat Tea",
        price: 100,
        description: 'Crispy katsu meets cozy Japanese curry. Finished with sweet-sour kumquat tea!.\
        Katsu renyah berpadu dengan kari Jepang yang creamy. Ditemani teh kumquat yang manis-asam!',
        slug: 'Japanese Curry with Chicken Katsu+Kumquat Tea',
        options:{
          toppings: [
          { label: "Salad", price: 50 },
          { label: "Mayonnaise", price: 30 },
          ]
        },

    },
     {
        id: 3,
        img: '/assets/combo-menu-asian.png',
        title: "Rice Bowl ala Hokben (with chicken yakiniku)+Ice Tea",
        price: 100,
        description: 'Your favorite Hokben-style bowl with savory yakiniku and egg roll. Comes with iced tea to cool it down!\
                    Rice bowl ala Hokben favoritmu—dengan ayam yakiniku dan egg roll, lengkap dengan es teh penyejuk!',
        slug: 'Rice Bowl ala Hokben (with chicken yakiniku)+Ice Tea',
             options: {
        toppings: [
          { label: "Egg", price: 15 },
          { label: "Ekado", price: 30 },
          { label: "Egg Roll", price: 30 },
          { label: "Salad", price: 50 },
          { label: "Mayonnaise", price: 30 },
         
        ]
      },
    },
     {
        id: 4,
        img: '/assets/comboParuRica.png',
        title: 'Rice Bowl Paru Rica-rica+Ice Tea',
        price: 100,
        description: 'Bold and spicy! Beef lung cooked in spicy rica-rica sauce, served with iced tea to balance the heat.\
        Pedasnya nendang! Paru rica-rica yang menggugah selera, disajikan dengan es teh biar adem',
        slug: 'Rice Bowl Paru Rica-rica+Ice Tea',
        options: {
        toppings: [
          { label: "Chicken Liver", price: 10 },
          { label: "Egg (Telur dadar)", price: 15 },
          { label: "Sambal Sachet", price: 25 },
          { label: "Sambal Rica-rica", price: 15 },
          { label: "Sambal matah", price: 15 },
          { label: "Rice/nasi", price: 30 },
          { label: "Sunny Side Up (Telur ceplok)", price: 15 },
        ]
      },
    },
     {
      id: 5,
      img: '/assets/comboTaiyaki.png',
      title: 'Taiyaki + Drink',
      price: 100,
      description: ' Sweet fish-shaped treat filled with love! Pick your latte to match the vibe.\
       Camilan manis berbentuk ikan yang menggemaskan! Pilih latte favoritmu sesuai mood.',
      slug: 'Taiyaki + Drink',
      options: {
        toppings: [
          {label: "Upsize drink to medium", price: 20},
          {label: "Upsize drink to tall", price: 25},
        ],
         fillings: [ // ✅ Optional multi-select
          // { label: "Hot", price: 0 },
            {  label: "Match", price: 0},
            {  label: "Thai Tea", price: 0},
            {  label: "Taro Latte", price: 0},
            {  label: "Red Velvet latte", price: 0},

        ]
        
        },
    },


]
export default promoData;