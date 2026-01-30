let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const totalItemsEl = document.getElementById("total-items");
const totalPriceEl = document.getElementById("total-price");

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// RENDER CART
function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <p style="grid-column:1/-1;text-align:center;padding:40px;font-size:20px;">
        🛒 Your cart is empty
      </p>
    `;
    totalItemsEl.innerText = 0;
    totalPriceEl.innerText = 0;
    return;
  }

  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach((item, index) => {
    totalItems += item.qty;
    totalPrice += item.price * item.qty;

    const card = document.createElement("div");
    card.className = "cart-card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">

      <div class="card-content">
        <p class="title">${item.name}</p>

        <div class="price">
          <span class="amount">₹${item.price}</span>
        </div>

        <div class="qty-control">
          <button class="qty-btn" data-index="${index}" data-change="-1">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" data-index="${index}" data-change="1">+</button>
        </div>

        <button class="remove-btn" data-remove="${index}">
          Remove
        </button>
      </div>
    `;

    cartItems.appendChild(card);
  });

  totalItemsEl.innerText = totalItems;
  totalPriceEl.innerText = totalPrice;

  // EVENTS
  document.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");
      const change = Number(btn.getAttribute("data-change"));
      changeQty(index, change);
    });
  });

  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-remove");
      removeItem(index);
    });
  });
}

// CHANGE QTY
function changeQty(index, change) {
  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  renderCart();
}

// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

// INITIAL LOAD
renderCart();
