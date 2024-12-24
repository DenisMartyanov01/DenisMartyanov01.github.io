/* eslint-disable brace-style */
/* eslint-disable max-len */


var filter = {

    soup: "",
    "main-course": "",
    salad: "",
    drink: "",
    dessert: ""
};

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
];

function comp(a, b) {
    return a.name.localeCompare(b.name);
}


var soupes_list = [];

var url = "https://edu.std-900.ist.mospolytech.ru/labs/api/dishes";

var buttons;


function findFood(name) {

    for (let i = 0; i < soupes_list.length; i++) 
        if (soupes_list[i].keyword == name)
            return soupes_list[i];
    return {
        "category": "",
        "count": "",
        "image": "",
        "keyword": "",
        "kind": "",
        "name": "",
        "price": 0
    };
}

function printOrder() {

    console.clear();

    console.log(window.localStorage.getItem("soup"));
    console.log(window.localStorage.getItem("main-course"));
    console.log(window.localStorage.getItem("salad"));
    console.log(window.localStorage.getItem("drink"));
    console.log(window.localStorage.getItem("dessert"));

}

function drawIcon(name, _div) {

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = "icons/" + name[0] + ".png";

    let p1 = document.createElement("p");
    p1.textContent = name[1];

    div.append(img);
    div.append(p1);

    div.classList.add("icon");

    if (name[0] == "dessert") {
        let p2 = document.createElement("p");
        p2.classList.add("add-info");
        p2.textContent = "(Можно добавить к любому заказу)";
        div.append(p2);

    }

    _div.append(div);

}

function claculatePrice() {

    let order = {
        "soup": window.localStorage.getItem("soup"),
        "dessert": window.localStorage.getItem("dessert"),
        "main-course": window.localStorage.getItem("main-course"),
        "salad": window.localStorage.getItem("salad"),
        "drink": window.localStorage.getItem("drink"),
    };

    link.href = "makeorder.html";

    if (order["main-course"] + order.soup + order.salad + order.drink + order.dessert == "") 
        link.href = "#footer";

    else if (order["main-course"] + order.soup + order.salad == "" && (order.drink != "" || order.dessert != ""))
        link.href = "#footer";
    
    else if (order.drink == "")
        link.href = "#footer";
    else if (order.soup != "" && (order["main-course"] == "" || order.salad == "" || order.drink == ""))
        link.href = "#footer";
    else if (order.salad != "" && (order["main-course"] == "" || order.soup == ""))
        link.href = "#footer";

    //link.textContent = "makeorder.html";


    var n = findFood(window.localStorage.getItem("soup")).price +
        findFood(window.localStorage.getItem("main-course")).price +
        findFood(window.localStorage.getItem("salad")).price +
        findFood(window.localStorage.getItem("drink")).price +
        findFood(window.localStorage.getItem("dessert")).price;

    gotoorder.style.display = 'flex';
    
    if (n == 0) 
        gotoorder.style.display = 'none';

    price.textContent = "Итого: " + n;

}

function setActive() {

    for (let i = 0; i < soupes_list.length; i++) {

        document.getElementById(soupes_list[i].keyword).parentElement.classList.remove("active-block");

        if (window.localStorage.getItem(soupes_list[i].category) == soupes_list[i].keyword)
            document.getElementById(soupes_list[i].keyword).parentElement.classList.add("active-block");

    }

}

function addFood(object) {

    if (window.localStorage.getItem(object.category) == object.keyword)
        window.localStorage.setItem(object.category, "");

    else 
        window.localStorage.setItem(object.category, object.keyword);
    printOrder();
    claculatePrice();
    setActive();
}


function setFilter(element) {

    if (filter[element.dataset.type] == element.dataset.kind)
        filter[element.dataset.type] = "";
    else
        filter[element.dataset.type] = element.dataset.kind;

}

function drawButtons() {

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("passive-filter") || buttons[i].classList.contains("active-filter")) {

            buttons[i].classList.replace("active-filter", "passive-filter");

            if (filter[buttons[i].dataset.type] == buttons[i].dataset.kind)
                buttons[i].classList.replace("passive-filter", "active-filter");

        }
    }
}


function hideCrats() {

    for (let i = 0; i < soupes_list.length; i++) {

        document.getElementById(soupes_list[i].keyword).parentElement.style.display = 'flex';

        if (filter[soupes_list[i].category] != soupes_list[i].kind && filter[soupes_list[i].category] != "")
            document.getElementById(soupes_list[i].keyword).parentElement.style.display = 'none';

    }

}

function main() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {

            if (buttons[i].classList.contains("passive-filter") ||
                buttons[i].classList.contains("active-filter")) {
                console.log("filter");

                setFilter(buttons[i]);
                hideCrats();
                drawButtons();
                setActive();
            }
        });
    }
}


function drawCarts() {

    for (let i = 0; i < soupes_list.length; i++) {

        let div = document.createElement('div');
        div.className = "block";

        let img = document.createElement("img");
        img.src = soupes_list[i].image;
        let p1 = document.createElement("p");
        p1.textContent = soupes_list[i].price + ' ₽';
        let p2 = document.createElement("p");
        p2.textContent = soupes_list[i].name;

        let p3 = document.createElement("p");
        p3.className = 'volume';
        p3.textContent = soupes_list[i].count;

        let btn = document.createElement("button");
        btn.className = 'button';
        btn.textContent = "Добавить";
        btn.id = soupes_list[i].keyword;
        btn.dataset.category = soupes_list[i].category;
        btn.addEventListener("click", function () {

            addFood(soupes_list[i]);

        });

        div.append(img);
        div.append(p1);
        div.append(p2);
        div.append(p3);
        div.append(btn);


        document.getElementById(soupes_list[i].category).append(div);

    }
    main();
}

function loadDishes() {
    fetch(url)
        .then(response => {
            return response.json();
        }).then(data => {

            soupes_list = data;
            soupes_list.sort(comp);
            drawCarts();
            claculatePrice();

        });
}


loadDishes();
buttons = document.querySelectorAll('button');

drawButtons();
for (let i = 0; i < combos.length; i++) {

    let div = document.createElement("div");
    div.classList.add("icons-block");

    for (let j = 0; j < combos[i].length; j++) {

        drawIcon(combos[i][j], div);

    }
    icons.append(div);

}

