/* eslint-disable brace-style */
/* eslint-disable max-len */

var soupes_list = [];

var url = "https://edu.std-900.ist.mospolytech.ru/labs/api/dishes";


function findFood(name) {

    for (let i = 0; i < soupes_list.length; i++) 
        if (soupes_list[i].keyword == name)
            return soupes_list[i];
    return "";
}

function printOrder() {

    console.clear();

    console.log(window.localStorage.getItem("soup"));
    console.log(window.localStorage.getItem("main-course"));
    console.log(window.localStorage.getItem("salad"));
    console.log(window.localStorage.getItem("drink"));
    console.log(window.localStorage.getItem("dessert"));

}

function drawOrderList() {

    let order = {
        soup: findFood(window.localStorage.getItem("soup")),
        "main-course": findFood(window.localStorage.getItem("main-course")),
        salad: findFood(window.localStorage.getItem("salad")),
        drink: findFood(window.localStorage.getItem("drink")),
        dessert: findFood(window.localStorage.getItem("dessert"))
    };

    console.log(order);

    if (order["main-course"] + order.soup + order.salad + order.drink + order.dessert == "") {
        myorder.textContent = "Ничего не выбрано. Чтобы добавить блюда в заказ, перейдите на страницу ";
    }
    else {

        let fullPrice = 0;

        myorder.textContent = "";

        let h1 = document.createElement("h3");
        h1.textContent = "Суп";
        let p1 = document.createElement("p");
        if (order.soup) {
            p1.textContent = order.soup.name + ' ' + order.soup.price + ' ₽';
            fullPrice += order.soup.price;
        }
        else
            p1.textContent = "Не выбрано";


        let h2 = document.createElement("h3");
        h2.textContent = "Главное блюдо";
        let p2 = document.createElement("p");
        if (order["main-course"]) {
            p2.textContent =
                order["main-course"].name + ' ' + order["main-course"].price + ' ₽';
            fullPrice += order["main-course"].price;
        }
        else
            p2.textContent = "Не выбрано";


        let h3 = document.createElement("h3");
        h3.textContent = "Салат";
        let p3 = document.createElement("p");
        if (order.salad) {
            p3.textContent = order.salad.name + ' ' + order.salad.price + ' ₽';
            fullPrice += order.salad.price;

        }
        else
            p3.textContent = "Не выбрано";

        let h4 = document.createElement("h3");
        h4.textContent = "Напиток";
        let p4 = document.createElement("p");
        if (order.drink) {
            p4.textContent = order.drink.name + ' ' + order.drink.price + ' ₽';
            fullPrice += order.drink.price;
        }
        else
            p4.textContent = "Не выбрано";

        let h5 = document.createElement("h3");
        h5.textContent = "Десерт";
        let p5 = document.createElement("p");
        if (order.dessert) {
            p5.textContent =
                order.dessert.name + ' ' + order.dessert.price + ' ₽';
            fullPrice += order.dessert.price;
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


function hideCrats() {

    let order = {
        soup: findFood(window.localStorage.getItem("soup")),
        "main-course": findFood(window.localStorage.getItem("main-course")),
        salad: findFood(window.localStorage.getItem("salad")),
        drink: findFood(window.localStorage.getItem("drink")),
        dessert: findFood(window.localStorage.getItem("dessert"))
    };

    for (let i = 0; i < soupes_list.length; i++) {

        document.getElementById(soupes_list[i].keyword).parentElement.style.display = 'none';

        if (window.localStorage.getItem(soupes_list[i].category) == soupes_list[i].keyword) {
            document.getElementById(soupes_list[i].keyword).parentElement.style.display = 'flex';
            console.log(1);
        }
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
        btn.textContent = "Удалить";
        btn.id = soupes_list[i].keyword;
        btn.dataset.category = soupes_list[i].category;
        btn.addEventListener("click", function () {

            window.localStorage.setItem(soupes_list[i].category, "");
            hideCrats();
            drawOrderList();

        });

        div.append(img);
        div.append(p1);
        div.append(p2);
        div.append(p3);
        div.append(btn);

        _order.append(div);

    }
}


function loadDishes() {
    fetch(url)
        .then(response => {
            return response.json();
        }).then(data => {

            soupes_list = data;
            drawOrderList();
            drawCarts();
            hideCrats();
        });
}

form.onsubmit = async (event) => {
    
    event.preventDefault();

    //printOrder();

    _soup.value     = window.localStorage.getItem("soup");
    _dessert.value  = window.localStorage.getItem("dessert");
    _main.value     = window.localStorage.getItem("main-course");
    _salad.value    = window.localStorage.getItem("salad");
    _drink.value    = window.localStorage.getItem("drink");


    const apiUrl = 'https://edu.std-900.ist.mospolytech.ru/labs/api/orders?api_key=';
    const apiKey = '74902033-57f7-417f-9e55-5a53ba870cb9';

    let formData = new FormData();

    formData.append('full_name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    let subscribe;
    if (document.getElementById('get-info').value) {
        formData.append('subscribe', 1);
    } else {
        formData.append('subscribe', 0);
    }
    formData.append('phone', document.getElementById('phone').value);
    formData.append('delivery_address', document.getElementById('adress').value);
    formData.append('delivery_type', document.querySelector('input[name="radio"]:checked').value);
    formData.append('delivery_time', document.getElementById('time').value);
    formData.append('comment', document.getElementById('order-comment').value);

    if (localStorage.getItem('soup')) {
        formData.append('soup_id', localStorage.getItem('soup'));
    }
    if (localStorage.getItem('main_course')) {
        formData.append('main_course_id', localStorage.getItem('main_course'));
    }
    if (localStorage.getItem('salad')) {
        formData.append('salad_id', localStorage.getItem('salad'));
    }
        
    if (localStorage.getItem('drink')) {
        formData.append('drink_id', localStorage.getItem('drink'));
    }
        
    if (localStorage.getItem('dessert')) {
        formData.append('dessert_id', localStorage.getItem('dessert'));
    }

    if (!checkOrder()) return; 
    
    try {
        const response = await fetch(apiUrl + apiKey, {
            method: 'POST',
            body: formData, 
        });

        if (response.ok) {
            alert('Заказ принят');
            localStorage.clear();
        } else {
            alert('Ошибка на сервере!');
        }   
    } catch {
        alert('Ошибка!' + error.message);
    }
    
};


loadDishes();
