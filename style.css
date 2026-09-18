* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    color: #203027;
    background: white;
}

header {
    background: white;
    border-bottom: 1px solid #ddd;
    position: sticky;
    top: 0;
    z-index: 10;
}

.navbar {
    width: 92%;
    max-width: 1150px;
    margin: auto;
    min-height: 70px;

    display: flex;
    align-items: center;
    gap: 25px;
}

.navbar h1 {
    color: #123322;
    white-space: nowrap;
}

.navbar h1 span,
footer span {
    color: #18864b;
}

.search {
    flex: 1;
    display: flex;
    background: #f3f6f4;
    border-radius: 10px;
    overflow: hidden;
}

.search input {
    flex: 1;
    padding: 13px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 15px;
}

.search button {
    border: none;
    background: transparent;
    padding: 0 18px;
    cursor: pointer;
}

.cart-button {
    background: #18864b;
    color: white;
    border: none;
    padding: 12px 18px;
    border-radius: 9px;
    cursor: pointer;
    font-weight: bold;
}

.cart-button b {
    background: #ffd54a;
    color: black;
    padding: 4px 7px;
    border-radius: 50%;
}

/* HERO */

.hero {
    background: #eaf8ed;
    padding: 70px 7%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
}

.hero > div:first-child {
    max-width: 650px;
}

.hero p:first-child {
    color: #18864b;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1px;
}

.hero h2 {
    font-size: 55px;
    line-height: 1.05;
    margin-top: 10px;
    color: #123322;
}

.hero h2 span {
    color: #18864b;
}

.description {
    color: #5c6962;
    margin: 20px 0;
    line-height: 1.6;
}

.hero a {
    display: inline-block;
    background: #18864b;
    color: white;
    text-decoration: none;
    padding: 14px 22px;
    border-radius: 9px;
    font-weight: bold;
}

.hero-box {
    background: white;
    padding: 40px;
    border-radius: 20px;
    text-align: center;
    min-width: 280px;
    box-shadow: 0 10px 30px #00000012;
    font-size: 45px;
}

.hero-box h3 {
    font-size: 20px;
    margin-top: 15px;
}

.hero-box p {
    font-size: 14px;
    color: #718078;
    margin-top: 8px;
}

/* CATEGORIES */

.categories,
.products {
    width: 92%;
    max-width: 1150px;
    margin: auto;
}

.categories {
    padding: 45px 0 20px;
}

.categories h2 {
    font-size: 30px;
}

.category-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

.category-buttons button {
    background: white;
    border: 1px solid #ddd;
    padding: 10px 16px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
}

.category-buttons button:hover {
    background: #18864b;
    color: white;
}

/* PRODUCTS */

.products {
    padding: 30px 0 70px;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 25px;
}

.title p {
    color: #18864b;
    font-size: 12px;
    font-weight: bold;
}

.title h2 {
    font-size: 30px;
    margin-top: 5px;
}

#resultCount {
    color: #777;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.product-card {
    border: 1px solid #e0e7e2;
    border-radius: 14px;
    overflow: hidden;
    transition: 0.2s;
    background: white;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px #00000012;
}

.product-card img {
    width: 100%;
    aspect-ratio: 1 / .9;
    object-fit: cover;
}

.product-info {
    padding: 14px;
}

.product-category {
    color: #18864b;
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
}

.product-info h3 {
    margin: 7px 0;
    font-size: 17px;
}

.product-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.price {
    font-size: 18px;
    font-weight: bold;
}

.price small {
    color: #777;
    font-size: 11px;
}

.add-button {
    border: none;
    background: #eaf7ee;
    color: #18864b;
    padding: 9px 12px;
    border-radius: 7px;
    cursor: pointer;
    font-weight: bold;
}

.add-button:hover {
    background: #18864b;
    color: white;
}

#noResults {
    display: none;
    text-align: center;
    padding: 50px;
    color: #777;
}

/* CART */

#overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: #0008;
    z-index: 20;
}

#overlay.show {
    display: block;
}

#cartPanel {
    position: fixed;
    right: -430px;
    top: 0;
    width: 410px;
    max-width: 92%;
    height: 100vh;
    background: white;
    z-index: 30;

    display: flex;
    flex-direction: column;

    transition: .3s;
}

#cartPanel.open {
    right: 0;
}

.cart-header {
    padding: 22px;
    border-bottom: 1px solid #ddd;

    display: flex;
    justify-content: space-between;
}

.cart-header button {
    border: none;
    background: transparent;
    font-size: 20px;
    cursor: pointer;
}

#cartItems {
    flex: 1;
    overflow-y: auto;
    padding: 18px;
}

.cart-item {
    display: grid;
    grid-template-columns: 65px 1fr auto;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
}

.cart-item img {
    width: 65px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
}

.cart-item h4 {
    font-size: 14px;
}

.qty {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 7px;
}

.qty button {
    width: 25px;
    height: 25px;
    border: 1px solid #ddd;
    background: white;
    cursor: pointer;
}

.remove {
    border: none;
    background: transparent;
    color: red;
    cursor: pointer;
    margin-top: 5px;
}

.cart-footer {
    padding: 20px;
    border-top: 1px solid #ddd;
}

.total {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin-bottom: 15px;
}

.checkout {
    width: 100%;
    padding: 14px;
    border: none;
    background: #18864b;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

/* FOOTER */

footer {
    background: #123322;
    color: white;
    text-align: center;
    padding: 35px;
}

footer p {
    color: #b9c9be;
    margin-top: 8px;
}

/* MOBILE */

@media (max-width: 850px) {

    .navbar {
        flex-wrap: wrap;
        padding: 10px 0;
    }

    .search {
        order: 3;
        flex-basis: 100%;
    }

    .hero {
        flex-direction: column;
        align-items: flex-start;
    }

    .hero h2 {
        font-size: 42px;
    }

    .product-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 600px) {

    .product-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .hero {
        padding: 45px 7%;
    }

    .hero-box {
        display: none;
    }

    .title {
        align-items: flex-start;
        flex-direction: column;
        gap: 8px;
    }

    .navbar h1 {
        font-size: 22px;
    }
}
