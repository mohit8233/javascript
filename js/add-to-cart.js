// CART DATA
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// UPDATE CART COUNT
function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (!el) return;

  el.innerText = cart.reduce((t, i) => t + i.qty, 0);
}
updateCartCount();

// ADD TO CART
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".add-to-cart");
  if (!btn) return;

  const card = btn.closest(".card");
  if (!card) return;

  const name = card.querySelector(".title").innerText.trim();
  const priceText = card.querySelector(".amount").innerText;
  const price = Number(priceText.replace(/[^0-9]/g, ""));
  const image = card.querySelector("img").src;

  const existing = cart.find(p => p.name === name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      name,
      price,
      image,
      qty: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  // UI feedback
  btn.innerText = "Added ✔";
  btn.disabled = true;

  setTimeout(() => {
    btn.innerText = "Add to Cart";
    btn.disabled = false;
  }, 800);
});
