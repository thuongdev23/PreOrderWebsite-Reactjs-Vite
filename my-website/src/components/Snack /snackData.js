const snackData = [
    {
        id: 1,
        img: '/assets/uligoreng.jpg',
        title: "Uli Goreng",
        price: 40,
        description: '2 pcs of crispy fried glutinous rice cake—crunchy outside, chewy inside.',
        slug: 'Uli-Goreng',

    },
    {
        id: 2,
        img: '/assets/bakwan.jpg',
        title: 'Bakwan',
        price: 25,
        description: '3 pcs of Indonesian-style of vegetable fritters—crispy, golden, and packed with flavor in every bite.',
        slug: 'Bakwan',
        options: {
            fillings: [
              { label: "Jagung/Corn", price: 25 },
              { label: "Sayur/Mix Vegetables", price: 25 },
             
            ],
        },


    }
]
export default snackData;