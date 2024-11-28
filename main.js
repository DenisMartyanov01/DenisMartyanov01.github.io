var order = {

    soup: "",
    "main-course": "",
    salad: "",
    drink: "",
    dessert: ""

}

var filter = {

    soup: "",
    "main-course": "",
    salad: "",
    drink: "",
    dessert: ""
}

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

function comp( a, b ) { return a.name.localeCompare(b.name); }

var soupes_list = []

var url = "https://edu.std-900.ist.mospolytech.ru/labs/api/dishes"

var buttons;

function loadDishes() {
    fetch(url)
        .then(response => {
            return response.json(); 
        }).then(data => {

            soupes_list = data; 
            soupes_list.sort(comp);
            drawCarts()
            //main();


    });
}


function drawCarts() {

    for(let i = 0; i < soupes_list.length; i++) {

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
        btn.textContent = "Добавить"
        btn.id = soupes_list[i].keyword;
        btn.dataset.category = soupes_list[i].category;
        btn.addEventListener("click", function() {

            addFood(soupes_list[i]);
            addData();
            drawOrderList();

        });

        div.append(img);
        div.append(p1);
        div.append(p2);
        div.append(p3);
        div.append(btn);


        document.getElementById(soupes_list[i].category).append(div);
        
    }
    main()
}

function drawOrderList() {

    if (order["main-course"] + order.soup + order.salad + order.drink + order.dessert == "") {
        myorder.textContent = "Ничего не выбрано"
    }
    else {

        let fullPrice = 0

        myorder.textContent = ""

        let h1 = document.createElement("h3");
        h1.textContent = "Суп";
        let p1 = document.createElement("p");
        if (order.soup){
            p1.textContent = order.soup.name + ' ' + order.soup.price + ' ₽';
            fullPrice += order.soup.price
        }
        else 
            p1.textContent = "Не выбрано";


        let h2 = document.createElement("h3");
        h2.textContent = "Главное блюдо";
        let p2 = document.createElement("p");
        if (order["main-course"]) {
            p2.textContent = order["main-course"].name + ' ' + order["main-course"].price + ' ₽';
            fullPrice += order["main-course"].price
        }
        else 
            p2.textContent = "Не выбрано";
        
        
        let h3 = document.createElement("h3");
        h3.textContent = "Салат";
        let p3 = document.createElement("p");
        if (order.salad) {
            p3.textContent = order.salad.name + ' ' + order.salad.price + ' ₽';
            fullPrice += order.salad.price

        }
        else 
            p3.textContent = "Не выбрано";

        let h4 = document.createElement("h3");
        h4.textContent = "Напиток";
        let p4 = document.createElement("p");
        if (order.drink) {
            p4.textContent = order.drink.name + ' ' + order.drink.price + ' ₽';
            fullPrice += order.drink.price
        }
        else 
            p4.textContent = "Не выбрано";

        let h5 = document.createElement("h3");
        h5.textContent = "Десерт";
        let p5 = document.createElement("p");
        if (order.dessert) {
            p5.textContent = order.dessert.name + ' ' + order.dessert.price + ' ₽';
            fullPrice += order.dessert.price
        }
        else 
            p5.textContent = "Не выбрано";


        let prceText = document.createElement("h3");
        prceText.textContent = "Сумма " + fullPrice + ' ₽';

        myorder.append(h1);
        myorder.append(p1);
        myorder.append(h2);
        myorder.append(p2);
        myorder.append(h3);
        myorder.append(p3);
        myorder.append(h4);
        myorder.append(p4);
        myorder.append(h5);
        myorder.append(p5);
        myorder.append(prceText);

    }
}

function drawIcon(name, _div) {
    
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = "icons/" + name[0] + ".png"
    
    let p1 = document.createElement("p")
    p1.textContent = name[1]

    div.append(img)
    div.append(p1)

    div.classList.add("icon")

    if (name[0] == "dessert") {
        let p2 = document.createElement("p");
        p2.classList.add("add-info")
        p2.textContent = "(Можно добавить к любому заказу)"
        div.append(p2)

    }

    _div.append(div)

}

function addFood(object) {

    console.log("addFood")

    //for(let i = 0; i < soupes_list.length; i++) {

        //if (_id == soupes_list[i].keyword) {

            order[object.category] = object;
        //}
    //}
    console.clear()
    console.log(order)
}

function addData() {
    
    document.getElementById("_soup").value      = order.soup.keyword
    document.getElementById("_main").value      = order["main-course"].keyword
    document.getElementById("_salad").value     = order.salad.keyword
    document.getElementById("_drink").value     = order.drink.keyword
    document.getElementById("_dessert").value   = order.dessert.keyword
}

function setFilter(element) {

    if (filter[element.dataset.type] == element.dataset.kind)
        filter[element.dataset.type] = ""
    else 
        filter[element.dataset.type] = element.dataset.kind;

}

function drawButtons () {

    for(let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("passive-filter") || buttons[i].classList.contains("active-filter")) {
            
            buttons[i].classList.replace("active-filter", "passive-filter");

            if (filter[buttons[i].dataset.type] == buttons[i].dataset.kind)
                buttons[i].classList.replace("passive-filter", "active-filter" )
            
        }
    }
}

function hideCrats() {

    for(let i = 0; i < soupes_list.length; i++) {
        
        document.getElementById(soupes_list[i].keyword).parentElement.style.display = 'flex';

        if (filter[soupes_list[i].category] != soupes_list[i].kind && filter[soupes_list[i].category] != "")  
            document.getElementById(soupes_list[i].keyword).parentElement.style.display = 'none';
        
    }

}

loadDishes()
buttons = document.querySelectorAll('button')

drawOrderList();
drawButtons();

for(let i = 0; i < combos.length; i++) {

    let div = document.createElement("div")
    div.classList.add("icons-block")

    for(let j = 0; j < combos[i].length; j++) {

        drawIcon(combos[i][j], div)

    }
    icons.append(div)

}

function main () {
    for(let i = 0; i < buttons.length; i++) {
        console.log(buttons.id)
        buttons[i].addEventListener('click', function () {

            if (buttons[i].classList.contains("passive-filter") || buttons[i].classList.contains("active-filter")) {
                console.log("filter")

                setFilter(buttons[i]);
                hideCrats();
                drawButtons();
            }
        })
    }
}