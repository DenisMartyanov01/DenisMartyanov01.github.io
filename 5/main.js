var order = {

    soup: "",
    main: "",
    salat: "",
    juce: "",
    desert: ""

}

var filter = {

    soup: "",
    main: "",
    salat: "",
    juce: "",
    desert: ""
}

function drawCarts() {

    for(let i = 0; i < soupes_list.length; i++) {

        if (filter[soupes_list[i].category] != soupes_list[i].kind && filter[soupes_list[i].category] != "") continue; 

        let div = document.createElement('div');
        div.className = "block";
        
        let img = document.createElement("img");
        img.src = "photos/" + soupes_list[i].image;
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

        div.append(img);
        div.append(p1);
        div.append(p2);
        div.append(p3);
        div.append(btn);
        
        document.getElementById(soupes_list[i].category).append(div);
    
    }

}

function drawOrderList() {

    if (order.main + order.soup + order.salat + order.juce + order.desert == "") {
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
        if (order.main) {
            p2.textContent = order.main.name + ' ' + order.main.price + ' ₽';
            fullPrice += order.main.price
        }
        else 
            p2.textContent = "Не выбрано";
        
        
        let h3 = document.createElement("h3");
        h3.textContent = "Салат";
        let p3 = document.createElement("p");
        if (order.salat) {
            p3.textContent = order.salat.name + ' ' + order.salat.price + ' ₽';
            fullPrice += order.salat.price

        }
        else 
            p3.textContent = "Не выбрано";

        let h4 = document.createElement("h3");
        h4.textContent = "Напиток";
        let p4 = document.createElement("p");
        if (order.juce) {
            p4.textContent = order.juce.name + ' ' + order.juce.price + ' ₽';
            fullPrice += order.juce.price
        }
        else 
            p4.textContent = "Не выбрано";

        let h5 = document.createElement("h3");
        h5.textContent = "Десерт";
        let p5 = document.createElement("p");
        if (order.desert) {
            p5.textContent = order.desert.name + ' ' + order.desert.price + ' ₽';
            fullPrice += order.desert.price
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

function addFood(_id) {

    console.log("addFood")

    for(let i = 0; i < soupes_list.length; i++) {

        if (_id == soupes_list[i].keyword) {

            order[soupes_list[i].category] = soupes_list[i];
        }
    }
}

function addData() {
    
    document.getElementById("_soup").value      = order.soup.keyword
    document.getElementById("_main").value      = order.main.keyword
    document.getElementById("_salat").value     = order.salat.keyword
    document.getElementById("_juce").value      = order.juce.keyword
    document.getElementById("_desert").value    = order.desert.keyword
}

function setFilter(element) {

    if (filter[element.dataset.type] == element.dataset.kind)
        filter[element.dataset.type] = ""
    else 
        filter[element.dataset.type] = element.dataset.kind;

}

drawCarts();
var buttons = document.querySelectorAll('button')

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
drawOrderList();
drawButtons();

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        if (buttons[i].classList.contains("passive-filter") || buttons[i].classList.contains("active-filter")) {
            console.log("filter")

            setFilter(buttons[i]);
            hideCrats();
            drawButtons();
        }
        else {
            console.log("order")

            addFood(buttons[i].id);
            addData();
            drawOrderList();
        }
    })
}
