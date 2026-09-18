const products = [
    { id: 1, name: "Basmati Rice", price: 320, unit: "5 kg", category: "Grocery", image: "images/01_basmati_rice.png", stock: 96 },
    { id: 2, name: "Sunflower Oil", price: 145, unit: "1 L", category: "Grocery", image: "images/02_sunflower_oil.png", stock: 96 },
    { id: 3, name: "Wheat Flour", price: 280, unit: "5 kg", category: "Grocery", image: "images/03_wheat_flour_atta.png", stock: 96 },
    { id: 4, name: "Sugar", price: 48, unit: "1 kg", category: "Grocery", image: "images/04_sugar.png", stock: 96 },
    { id: 5, name: "Milk", price: 62, unit: "1 L", category: "Dairy", image: "images/05_milk.png", stock: 96 },
    { id: 6, name: "Eggs", price: 85, unit: "12 pcs", category: "Dairy", image: "images/06_eggs.png", stock: 96 },
    { id: 7, name: "Banana", price: 60, unit: "1 kg", category: "Fruits", image: "images/07_banana.png", stock: 96 },
    { id: 8, name: "Apple", price: 160, unit: "1 kg", category: "Fruits", image: "images/08_apple.png", stock: 96 },
    { id: 9, name: "Tomato", price: 45, unit: "1 kg", category: "Vegetables", image: "images/09_tomato.png", stock: 96 },
    { id: 10, name: "Potato", price: 40, unit: "1 kg", category: "Vegetables", image: "images/10_potato.png", stock: 96 },
    { id: 11, name: "Onion", price: 42, unit: "1 kg", category: "Vegetables", image: "images/11_onion.png", stock: 96 },
    { id: 12, name: "Green Chilli", price: 30, unit: "250 g", category: "Vegetables", image: "images/12_green_chilli.png", stock: 96 },
    { id: 13, name: "Carrot", price: 55, unit: "1 kg", category: "Vegetables", image: "images/13_carrot.png", stock: 96 },
    { id: 14, name: "Cabbage", price: 45, unit: "1 kg", category: "Vegetables", image: "images/14_cabbage.png", stock: 96 },
    { id: 15, name: "Detergent", price: 110, unit: "1 kg", category: "Household", image: "images/15_detergent.png", stock: 96 },
    { id: 16, name: "Toothpaste", price: 75, unit: "100 g", category: "Personal Care", image: "images/16_toothpaste.png", stock: 96 },
    { id: 17, name: "Shampoo", price: 190, unit: "200 ml", category: "Personal Care", image: "images/17_shampoo.png", stock: 96 },
    { id: 18, name: "Toor Dal", price: 155, unit: "1 kg", category: "Grocery", image: "images/18_toor_dal.png", stock: 96 },
    { id: 19, name: "Biscuits", price: 35, unit: "200 g", category: "Snacks", image: "images/19_biscuits.png", stock: 96 },
    { id: 20, name: "Tea", price: 120, unit: "250 g", category: "Grocery", image: "images/20_tea.png", stock: 96 }
];

let cart = [];
let currentCategory = "All";


// DISPLAY PRODUCTS
function displayProducts(list = products) {

    const grid = document.getElementById("productGrid");

    grid.innerHTML = "";

    list.forEach(product => {

        grid.innerHTML += `
        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>${product.name}</h3>

                <p>
                    ₹${product.price}
                    / ${product.unit}
                </p>

                <p style="color:#18864b;font-weight:bold;">
                    Stock: ${product.stock} pieces
                </p>

                <div class="product-bottom">

                    <span class="price">
                        ₹${product.price}
                    </span>

                    <button
                        class="add-button"
                        onclick="addToCart(${product.id})">
                        + Add
                    </button>

                </div>

            </div>
        </div>
        `;
    });

    document.getElementById("resultCount").innerText =
        `${list.length} items`;

    document.getElementById("noResults").style.display =
        list.length === 0 ? "block" : "none";
}


// ADD TO CART
function addToCart(id) {

    const product =
        products.find(p => p.id === id);

    const existing =
        cart.find(item => item.id === id);

    let currentQuantity =
        existing ? existing.quantity : 0;

    // MAXIMUM STOCK = 96
    if (currentQuantity >= product.stock) {

        alert(
            `${product.name} has only ${product.stock} pieces in stock.`
        );

        return;
    }

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: id,
            quantity: 1
        });
    }

    updateCart();
    openCart();
}


// CHANGE QUANTITY
function changeQuantity(id, amount) {

    const item =
        cart.find(item => item.id === id);

    const product =
        products.find(p => p.id === id);

    if (!item) return;

    const newQuantity =
        item.quantity + amount;

    if (newQuantity > product.stock) {

        alert(
            `Only ${product.stock} pieces of ${product.name} are available.`
        );

        return;
    }

    item.quantity = newQuantity;

    if (item.quantity <= 0) {
        removeItem(id);
    }

    updateCart();
}


// REMOVE
function removeItem(id) {

    cart =
        cart.filter(item => item.id !== id);

    updateCart();
}


// UPDATE CART
function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p style="text-align:center;padding:40px">
                Your cart is empty 🛒
            </p>
        `;
    }

    cart.forEach(item => {

        const product =
            products.find(p => p.id === item.id);

        const subtotal =
            product.price * item.quantity;

        total += subtotal;
        count += item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img
                src="${product.image}"
                alt="${product.name}">

            <div>

                <h4>${product.name}</h4>

                <small>
                    ₹${product.price}
                </small>

                <div class="qty">

                    <button
                        onclick="changeQuantity(
                            ${product.id}, -1)">
                        −
                    </button>

                    <b>${item.quantity}</b>

                    <button
                        onclick="changeQuantity(
                            ${product.id}, 1)">
                        +
                    </button>

                </div>

                <small>
                    Available: ${product.stock}
                </small>

            </div>

            <div>

                <b>₹${subtotal}</b>

                <br>

                <button
                    class="remove"
                    onclick="removeItem(${product.id})">
                    Remove
                </button>

            </div>

        </div>
        `;
    });

    document.getElementById("cartTotal")
        .innerText = `₹${total}`;

    document.getElementById("cartCount")
        .innerText = count;
}


// CATEGORY FILTER
function filterProducts(category) {

    currentCategory = category;

    const search =
        document.getElementById("searchInput")
        .value.toLowerCase();

    const result =
        products.filter(product => {

            const categoryMatch =
                category === "All" ||
                product.category === category;

            const searchMatch =
                product.name
                .toLowerCase()
                .includes(search);

            return categoryMatch && searchMatch;
        });

    displayProducts(result);
}


// SEARCH
function searchProducts() {

    const search =
        document.getElementById("searchInput")
        .value.toLowerCase();

    const result =
        products.filter(product => {

            const categoryMatch =
                currentCategory === "All" ||
                product.category === currentCategory;

            return categoryMatch &&
                product.name
                .toLowerCase()
                .includes(search);
        });

    displayProducts(result);
}


// OPEN CART
function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("open");

    document
        .getElementById("overlay")
        .classList.add("show");
}


// CLOSE CART
function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("open");

    document
        .getElementById("overlay")
        .classList.remove("show");
}


// CHECKOUT
function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    alert(
        "Order placed successfully! 🛒"
    );
}


// SEARCH EVENT
document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        searchProducts
    );


// START
displayProducts();
updateCart();
