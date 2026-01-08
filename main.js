const list = document.querySelector(".navlist");
const hamburger = document.querySelector(".fa-bars");
const icon = document.querySelector(".bar-icon");

hamburger.addEventListener("click", ()=>{
 icon.classList.toggle("fa-bars");
 hamburger.classList.toggle("fa-xmark");
  list.classList.toggle("navlist-active");
   
})


// slider section


    let img = document.getElementById("img")
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    let array = [
        "https://static.vecteezy.com/system/resources/thumbnails/011/871/820/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
            "https://www.kindpng.com/picc/m/465-4653741_e-commerce-banner-ecommerce-web-development-services-hd.png",
        "https://t4.ftcdn.net/jpg/02/49/50/15/360_F_249501541_XmWdfAfUbWAvGxBwAM0ba2aYT36ntlpH.jpg"
    ];

    let count = 0;

    function show(count) {
        img.src = array[count];
        img.style.width = "100%";
    }

    show(count);

    // // 👉 NEXT BUTTON
    // next.addEventListener("click", function () {
    //     nextImg();
    // });

    // // 👉 PREV BUTTON
    // prev.addEventListener("click", function () {
    //     prevImg();
    // });

    // 👉 Next image function
    function nextImg() {
        count++;
        if (count == array.length) {
            count = 0;
        }
        show(count);
    }

    // 👉 Previous image function
    function prevImg() {
        if (count == 0) {
            count = array.length - 1;
        } else {
            count--;
        }
        show(count);
    }

    // 👉 AUTO SLIDER (Every 3 Seconds)
    setInterval(nextImg, 3000);  // Auto change every 3 seconds


    // fashion section js 

    let fashion = document.getElementById("fashion")

     fashion.style.backgroundImage = "url('detailsimg.png')"
     fashion.style.backgroundRepeat = "no-reapt"
     fashion.style.backgroundSize = "cover"




// ----------------------------------------------------

// trust-section 
const cards = document.querySelectorAll(".trust-card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "0.6s ease";
});

// --------------------------------------------------------



// Select the input and button in offer section
const offerInput = document.querySelector('.offer-box input');
const offerButton = document.querySelector('.offer-box button');

offerButton.addEventListener('click', () => {
  const email = offerInput.value.trim();

  if(email) {
    alert(`Thank you! A 10% discount code has been sent to ${email}`);
    offerInput.value = ''; // clear input
  } else {
    alert('Please enter a valid email address.');
  }
});



  



// CART DATA
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// UPDATE CART COUNT
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.innerText = count;
}
updateCartCount();

// ADD TO CART FUNCTION (GLOBAL)
function addProductToCart(product) {
  const existing = cart.find(item => item.name === product.name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// BUTTON CLICK HANDLE
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {

    const card = e.target.closest(".card, .product-card");

    const name =
      card.querySelector(".title")?.innerText ||
      card.querySelector("h3")?.innerText;

    const priceText =
      card.querySelector(".amount")?.innerText ||
      card.querySelector(".price")?.innerText;

    const price = parseInt(priceText.replace(/[^0-9]/g, ""));

    const image = card.querySelector("img").src;

    addProductToCart({
      name,
      price,
      image,
      qty: 1
    });

    // UI feedback
    e.target.innerText = "Added ✔";
    setTimeout(() => {
      e.target.innerText = "Add to Cart";
    }, 1200);
  }
});

