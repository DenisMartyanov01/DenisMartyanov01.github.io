/* eslint-disable brace-style */
/* eslint-disable max-len */

function myAllert(text) {

    let dialog = document.createElement("dialog");
    let button = document.createElement("button");
    let p1 = document.createElement("p");

    button.textContent = "Окей😜";
    p1.textContent = text;

    dialog.classList.add("dialog");

    button.addEventListener("click", () => {
        dialog.close();
    });

    dialog.append(p1);
    dialog.append(button);

    footer.append(dialog);
    dialog.showModal();
}


function checkOrder() {

    let order = {
        "soup": window.localStorage.getItem("soup"),
        "dessert": window.localStorage.getItem("dessert"),
        "main-course": window.localStorage.getItem("main-course"),
        "salad": window.localStorage.getItem("salad"),
        "drink": window.localStorage.getItem("drink"),
    };


    if (order["main-course"] + order.soup + order.salad + order.drink + order.dessert == "")
        myAllert("Ничего не выбрано. Выберите блюда для заказа");
    else if (order["main-course"] + order.soup + order.salad == "" && (order.drink != "" || order.dessert != ""))
        myAllert("Выберите главное блюдо");
    else if (order.drink == "")
        myAllert("Выберите напиток");
    else if (order.soup != "" && (order["main-course"] == "" || order.salad == "" || order.drink == ""))
        myAllert("Выберите главное блюдо/салат/стартер");
    else if (order.salad != "" && (order["main-course"] == "" || order.soup == ""))
        myAllert("Выберите суп или главное блюдо");
    
    else return true;
    return false;

}