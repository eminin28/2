"use strict";

updateCartCount();

let productData = JSON.parse(localStorage.getItem("cart"));
let allProductsDiv = document.querySelector(".products");
for (let key in productData) {
  let product = productData[key];
  let divP = document.createElement("div");
  divP.className = "product";
  divP.innerHTML = `
<div class="ggggg">
<i class="fa-solid fa-x button-delete"></i>
<img src="${product.id}.png" alt="Подпись"/>
<div class="product-name">${product.name}</div></div>
<div class="product-price">${product.price}</div>
<div class="product-amount">${product.amount}</div>
<div class="product-total">${product.price * product.amount}$</div>
`;
  allProductsDiv.append(divP);
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

