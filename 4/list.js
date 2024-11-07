let soupes_list = [
    // суп
    {
        keyword: 'gaspacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        count: '350 г',
        image: 'gazpacho.jpg'
    },
    {
        keyword: 'mushroom_soup',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        count: '330 г',
        image: 'mushroom_soup.jpg'
    },
    {
        keyword: 'norv_soup',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        count: '330 г',
        image: 'norwegian_soup.jpg'
    },
        // Главное блюдо
    {
        keyword: 'potato',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main',
        count: '250 г',
        image: 'friedpotatoeswithmushrooms1.jpg'
    },
    {
        keyword: 'lazania',
        name: 'Лазанья',
        price: 385,
        category: 'main',
        count: '310 г',
        image: 'lasagna.jpg'
    },
    {
        keyword: 'chicken',
        name: 'Котлеты из курицы с картофельным пюре',
        price: 225,
        category: 'main',
        count: '280 г',
        image: 'chickencutletsandmashedpotatoes.jpg'
    },

        // Напитки
    {
        keyword: 'orange',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'juce',
        count: '300 мл',
        image: 'orangejuice.jpg'
    },
    {
        keyword: 'apple',
        name: 'Яблочный сок',
        price: 90,
        category: 'juce',
        count: '300 мл',
        image: 'applejuice.jpg'
    },
    {
        keyword: 'carrot',
        name: 'Морковный сок',
        price: 110,
        category: 'juce',
        count: '300 мл',
        image: 'carrotjuice.jpg'
    }
]

function comp( a, b ) { return a.name.localeCompare(b.name); }

soupes_list.sort(comp);
