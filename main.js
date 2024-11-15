"use strict";
let productsJSON = `{
    "allProducts": [
        {
            "name": "Black and WhiteJack",
            "price": 30,
            "id": "BlackandWhiteJack"
        },
        {
            "name": "Black and White Zombie",
            "price": 40,
            "id": "BlackandWhiteZombie"
        },
        {
            "name": "Batman Halloween Pumpkin",
            "price": 50,
            "id": "BatmanHalloweenPumpkin"
        },
        {
            "name": "Big Fat Ghost",
            "price": 40,
            "id": "BigFatGhost"
        },
{
            "name": "Candies Halloween",
            "price": 30,
            "id": "CandiesHalloween"
        },
        {
            "name": "Bloody Zombie Hand",
            "price": 40,
            "id": "BloodyZombieHand"
        }
    ]
  }`;

let products = JSON.parse(productsJSON)["allProducts"];
let parent = document.querySelector("#container");
updateCartCount();

for (let product of products) {
  let productDiv = document.createElement("div");
  productDiv.className = "productDiv";
  productDiv.textContent = product.name;

  let img = document.createElement("img");
  img.src = `${product.id}.png`;
  
  let prices = document.createElement("div");
  prices.textContent = product.price + "$";

  let button = document.createElement("div");
  button.textContent = "В корзину";
  button.className = "add-cart";

  parent.append(productDiv);
  productDiv.append(img, prices, button);

  productDiv.onclick = function() {
    addToCart(product);
  };
}



function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    if (cart[product.id]) {
        cart[product.id].amount += 1;
      } else {
        cart[product.id] = { ...product, amount: 1 };
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      
      updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};

    let itemCount = 0;
    for (let key in cart) {
        itemCount += cart[key].amount;
    }
    let cartItem = document.querySelector("#counter");
    cartItem.textContent = itemCount;
}

