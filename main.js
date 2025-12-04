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

