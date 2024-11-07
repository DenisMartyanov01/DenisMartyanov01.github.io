var ordered_food = []

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

    div.append(img);
    div.append(p1);
    div.append(p2);
    div.append(p3);
    div.append(btn);
    
    document.getElementById(soupes_list[i].category).append(div);
    
}


function drawOrderList() {

    if (ordered_food.length == 0) {
        myorder.textContent = "Ничего не выбрано"
    }
    else {

        let fullPrice = 0

        myorder.textContent = ""

        let h1 = document.createElement("h3");
        h1.textContent = "Суп";
        let p1 = document.createElement("p");
        if (ordered_food[0]){
            p1.textContent = ordered_food[0].name + ' ' + ordered_food[0].price + ' ₽';
            fullPrice += ordered_food[0].price
        }
        else 
            p1.textContent = "Не выбрано";


        let h2 = document.createElement("h3");
        h2.textContent = "Главное блюдо";
        let p2 = document.createElement("p");
        if (ordered_food[1]) {
            p2.textContent = ordered_food[1].name + ' ' + ordered_food[1].price + ' ₽';
            fullPrice += ordered_food[1].price
        }
        else 
            p2.textContent = "Не выбрано";
        
        
        let h3 = document.createElement("h3");
        h3.textContent = "Напиток";
        let p3 = document.createElement("p");
        if (ordered_food[2]) {
            p3.textContent = ordered_food[2].name + ' ' + ordered_food[2].price + ' ₽';
            fullPrice += ordered_food[2].price
        }
        else 
            p3.textContent = "Не выбрано";

        let prceText = document.createElement("h3");
        prceText.textContent = "Сумма " + fullPrice + ' ₽';

        myorder.append(h1);
        myorder.append(p1);
        myorder.append(h2);
        myorder.append(p2);
        myorder.append(h3);
        myorder.append(p3);
        myorder.append(prceText);
    }
}

function addFood(_id) {

    for(let i = 0; i < soupes_list.length; i++) {

        if (_id == soupes_list[i].keyword) {

            if (soupes_list[i].category == 'soup')
                ordered_food[0] = soupes_list[i];
            else if (soupes_list[i].category == 'main')
                ordered_food[1] = soupes_list[i];
            else 
                ordered_food[2] = soupes_list[i];
            break;
        }
    }
}

function addData() {
    if (ordered_food[0])
    document.getElementById("_soup").value = ordered_food[0].keyword

    if (ordered_food[1])
    document.getElementById("_main").value = ordered_food[1].keyword

    if (ordered_food[2])
    document.getElementById("_juce").value = ordered_food[2].keyword

}

const element = document.querySelectorAll('button')

for(let i = 0; i < element.length; i++) 
    element[i].addEventListener('click', function () {

        addFood(element[i].id);
        addData();
        drawOrderList();

})

drawOrderList();
