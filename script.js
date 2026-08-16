let cart = JSON.parse(localStorage.getItem("kfcCart")) || [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("kfcCart", JSON.stringify(cart));

    updateCart();

    alert(name + " добавлено в корзину!");
}

function updateCart() {
    const counter = document.getElementById("cart-count");

    if (counter) {
        counter.textContent = cart.length;
    }
}

function showCart() {
    if (cart.length === 0) {
        alert("Корзина пока пустая.");
        return;
    }

    let total = 0;
    let message = "Ваша корзина:\n\n";

    cart.forEach((item, index) => {
        message += ${index + 1}. ${item.name} — ${item.price.toLocaleString()} сум\n;
        total += item.price;
    });

    message += \nИтого: ${total.toLocaleString()} сум;

    alert(message);
}

function showPromo(name) {
    alert(
        "🔥 " + name +
        "\n\nПредложение доступно прямо сейчас!"
    );
}

function scrollToOrder() {
    const order = document.getElementById("order");

    if (order) {
        order.scrollIntoView({
            behavior: "smooth"
        });
    } else {
        window.location.href = "menu.html";
    }
}

updateCart();
