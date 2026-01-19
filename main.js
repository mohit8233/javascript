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



  

  const searchIcon = document.getElementById("searchIcon");
  const searchInput = document.getElementById("searchInput");

  searchIcon.addEventListener("click", () => {
    searchInput.style.display = "block";
    searchInput.focus();
  });


 
const search = document.getElementById("searchInput");
const products = document.querySelectorAll(".card");

search.addEventListener("keyup", () => {
  const value = search.value.toLowerCase();

  products.forEach(product => {
    const name = product
      .querySelector(".product-name")
      .innerText
      .toLowerCase();

    if (name.includes(value)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

