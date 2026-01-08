let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const totalItemsEl = document.getElementById("total-items");
const totalPriceEl = document.getElementById("total-price");

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty 😢</p>";
    totalItemsEl.innerText = 0;
    totalPriceEl.innerText = 0;
    return;
  }

  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach((item, index) => {
    totalItems += item.qty;
    totalPrice += item.price * item.qty;

    cartItems.innerHTML += `
      <div class="cart-card">
        <img src="${item.image}" alt="${item.name}">
        <div class="card-content">
          <p class="title">${item.name}</p>

          <div class="price">
            <span class="amount">₹${item.price}</span>
          </div>

          <div class="qty-control">
            <button onclick="changeQty(${index}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${index}, 1)">+</button>
          </div>

          <button class="remove-btn" onclick="removeItem(${index})">
            Remove
          </button>
        </div>
      </div>
    `;
  });

  totalItemsEl.innerText = totalItems;
  totalPriceEl.innerText = totalPrice;
}
