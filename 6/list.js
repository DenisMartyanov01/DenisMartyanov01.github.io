let soupes_list = [
    // суп
    {
        keyword: 'gaspacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        count: '350 г',
        kind: "veg",
        image: 'gazpacho.jpg'
    },
    {
        keyword: 'mushroom_soup',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        count: '330 г',
        kind: "veg",
        image: 'mushroom_soup.jpg'
    },
    {
        keyword: 'norv_soup',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        count: '330 г',
        kind: "fish",
        image: 'norwegian_soup.jpg'
    },
    {
        keyword: 'ramen',
        name: 'Рамен',
        price: 375,
        category: 'soup',
        count: '425 г',
        kind: "meat",
        image: 'ramen.jpg'
    },
    {
        keyword: 'tom_yam',
        name: 'Том ям с креветками',
        price: 650,
        category: 'soup',
        count: '500 г',
        kind: "fish",
        image: 'tomyum.jpg'
    },
    {
        keyword: 'chicken_soup',
        name: 'Куриный суп',
        price: 330,
        category: 'soup',
        count: '350 г',
        kind: "meat",
        image: 'chicken.jpg'
    },
        // Главное блюдо
    {
        keyword: 'potato',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main',
        count: '250 г',
        kind: "veg",
        image: 'friedpotatoeswithmushrooms1.jpg'
    },
    {
        keyword: 'lazania',
        name: 'Лазанья',
        price: 385,
        category: 'main',
        count: '310 г',
        kind: "veg",
        image: 'lasagna.jpg'
    },
    {
        keyword: 'chicken',
        name: 'Котлеты из курицы с картофельным пюре',
        price: 225,
        category: 'main',
        count: '280 г',
        kind: "meat",
        image: 'chickencutletsandmashedpotatoes.jpg'
    },
    {
        keyword: 'fish_rise',
        name: 'Рыбная котлета с рисом и спаржей',
        price: 320,
        category: 'main',
        count: '270 г',
        kind: "fish",
        image: 'fishrice.jpg'
    },
    {
        keyword: 'margarita',
        name: 'Пицца Маргарита',
        price: 450,
        category: 'main',
        count: '470 г',
        kind: "meat",
        image: 'pizza.jpg'
    },
    {
        keyword: 'pasta',
        name: 'Паста с креветками',
        price: 3340,
        category: 'main',
        count: '280 г',
        kind: "fish",
        image: 'shrimppasta.jpg'
    },
            // Салаты
    {
        keyword: 'korean_salat',
        name: 'Корейский салат с овощами и яйцом',
        price: 150,
        category: 'salat',
        count: '250 г',
        kind: "fish",
        image: 'saladwithegg.jpg'
    },
    {
        keyword: 'cezar',
        name: 'Цезарь с ципленком',
        price: 385,
        category: 'salat',
        count: '310 г',
        kind: "meat",
        image: 'caesar.jpg'
    },
    {
        keyword: 'kapreze',
        name: 'Капрезе с моцареллой',
        price: 225,
        category: 'salat',
        count: '280 г',
        kind: "meat",
        image: 'caprese.jpg'
    },
    {
        keyword: 'salat_tynetz',
        name: 'Салат с тунцом',
        price: 320,
        category: 'salat',
        count: '270 г',
        kind: "fish",
        image: 'tunasalad.jpg'
    },
    {
        keyword: 'potato_free_cezar',
        name: 'Катрофель фри с соусом Цезарь',
        price: 450,
        category: 'salat',
        count: '470 г',
        kind: "veg",
        image: 'frenchfries1.jpg'
    },
    {
        keyword: 'potato_free_ketchup',
        name: 'Катрофель фри с кетчупом',
        price: 340,
        category: 'salat',
        count: '280 г',
        kind: "veg",
        image: 'frenchfries2.jpg'
    },

        // Напитки
    {
        keyword: 'orange',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'juce',
        count: '300 мл',
        kind: "cold",
        image: 'orangejuice.jpg'
    },
    {
        keyword: 'apple',
        name: 'Яблочный сок',
        price: 90,
        category: 'juce',
        count: '300 мл',
        kind: "cold",
        image: 'applejuice.jpg'
    },
    {
        keyword: 'carrot',
        name: 'Морковный сок',
        price: 110,
        category: 'juce',
        count: '300 мл',
        kind: "cold",
        image: 'carrotjuice.jpg'
    },
    {
        keyword: 'capuchino',
        name: 'Капучино',
        price: 180,
        category: 'juce',
        count: '300 мл',
        kind: "hot",
        image: 'cappuccino.jpg'
    },
    {
        keyword: 'green_tea',
        name: 'Зеленый чай',
        price: 100,
        category: 'juce',
        count: '300 мл',
        kind: "hot",
        image: 'greentea.jpg'
    },
    {
        keyword: 'black_tea',
        name: 'Черный чай',
        price: 90,
        category: 'juce',
        count: '300 мл',
        kind: "hot",
        image: 'tea.jpg'
    },
    // Десерт

    {
        keyword: 'paxlava',
        name: 'Пахлава',
        price: 220,
        category: 'desert',
        count: '300 г',
        kind: "medium",
        image: 'baklava.jpg'
    },
    {
        keyword: 'cheezecake',
        name: 'Чизкейк',
        price: 385,
        category: 'desert',
        count: '125 г',
        kind: "small",
        image: 'checheesecake.jpg'
    },
    {
        keyword: 'chocolate_cheezecake',
        name: 'Шоколадный чизкейк',
        price: 225,
        category: 'desert',
        count: '125 г',
        kind: "small",
        image: 'chocolatecheesecake.jpg'
    },
    {
        keyword: 'chocolate_cake',
        name: 'Шоколадный торт',
        price: 320,
        category: 'desert',
        count: '140 г',
        kind: "small",
        image: 'chocolatecake.jpg'
    },
    {
        keyword: 'donuts3',
        name: 'Пончики(3 штуки)',
        price: 410,
        category: 'desert',
        count: '350 г',
        kind: "medium",
        image: 'donuts2.jpg'
    },
    {
        keyword: 'donuts6',
        name: 'Пончики(6 штуки)',
        price: 650,
        category: 'desert',
        count: '700 г',
        kind: "big",
        image: 'donuts.jpg'
    }

]

function comp( a, b ) { return a.name.localeCompare(b.name); }

soupes_list.sort(comp);

const combos = [

    [
        ["soup", "Суп"],
        ["main", "Главное блюдо"],
        ["salad", "Салат"],
        ["drink", "Напиток"]
    ],

    [
        ["soup", "Суп"],
        ["main", "Главное блюдо"],
        ["drink", "Напиток"]
    ],
    [
        ["soup", "Суп"],
        ["salad", "Салат"],
        ["drink", "Напиток"]
    ],
    [
        ["main", "Главное блюдо"],
        ["salad", "Салат"],
        ["drink", "Напиток"]
    ],
    [
        ["main", "Главное блюдо"],
        ["drink", "Напиток"]
    ],

    [
        ["desert", "Десерт"]
    ]


]