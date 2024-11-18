
function allert(text) {

    let dialog = document.createElement("dialog")
    let button = document.createElement("button")
    let p1 = document.createElement("p")

    button.textContent = "Окей😜"
    p1.textContent = text

    dialog.classList.add("dialog")

    button.addEventListener("click", () => {
        dialog.close();
    });

    dialog.append(p1)
    dialog.append(button)

    footer.append(dialog)
    dialog.showModal();
}


function checkOrder() {

    if (order.main + order.soup + order.salat + order.juce + order.desert == "")
        allert("Ничего не выбрано. Выберите блюда для заказа")
    else if (order.main + order.soup + order.salat == "" && (order.juce != "" || order.desert != ""))
        allert("Выберите главное блюдо")
    else if (order.juce == "")
        allert("Выберите напиток")
    else if (order.soup != "" && (order.main == "" || order.salat == "" || order.juce == ""))
        allert("Выберите главное блюдо/салат/стартер")
    else if (order.salat != "" && (order.main == "" || order.soup == ""))
        allert("Выберите суп или главное блюдо")
    

}