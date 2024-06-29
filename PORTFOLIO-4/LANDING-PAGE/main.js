AOS.init();

// ------------------------------SHOW SEARCH------------------------------

let inputBox = document.getElementById("input-box");
function search() {
  if (inputBox.style.display == "block") {
    inputBox.style.display = "none";
  } else {
    inputBox.style.display = "block";
  }
}

// --------------------------SHOW AND HIDE CART--------------------------
let containerCart = document.querySelector(".container-cart");
let container = document.querySelector(".container");

function showBoxCart() {
  containerCart.classList.add("active");
  container.classList.add("active-blur");
}

function hideBoxCart() {
  containerCart.classList.remove("active");
  container.classList.remove("active-blur");
}

// -----------------------------NAVBAR SCROLL----------------------------

let navbar = document.querySelector(".scroll");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

// ---------------------------CAROUSEL--------------------------------

let boxCarousel = document.querySelector(".carousel-box-card");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let nextMobile = document.getElementById("next-mobile");
let prevMobile = document.getElementById("prev-mobile");
let start = 0;

prev.onclick = () => {
  start--;
  boxCarousel.style.scrollBehavior = "smooth";
  if (start == 2) {
    if (window.innerWidth <= 1300) {
      boxCarousel.scrollLeft -= 329;
    } else {
      boxCarousel.scrollLeft -= 250;
    }
  } else {
    boxCarousel.scrollLeft -= 330;
  }

  if (start <= 0) {
    prev.classList.remove("active");
    next.classList.add("active");
    start = 0;
  } else if (start > 0) {
    prev.classList.add("active");
  }

  if (start < 3) {
    next.classList.add("active");
  } else if (start > 3) {
    next.classList.remove("active");
    start = 3;
  }
};
next.onclick = () => {
  start++;
  boxCarousel.style.scrollBehavior = "smooth";
  boxCarousel.scrollLeft += 330;
  if (start > 0) {
    prev.classList.add("active");
  } else if (start <= 0) {
    prev.classList.remove("active");
    start = 0;
  }

  if (window.innerWidth < 770) {
    if (start == 5) {
      next.classList.remove("active");
    } else if (start > 5) {
      next.classList.remove("active");
      start = 5;
    }
  } else {
    if (start < 2) {
      next.classList.add("active");
    } else if (start == 3) {
      next.classList.remove("active");
    } else if (start > 3) {
      next.classList.remove("active");
      start = 3;
    }
  }
};

prevMobile.onclick = () => {
  start--;
  boxCarousel.style.scrollBehavior = "smooth";
  if (start == 2) {
    if (window.innerWidth <= 1300) {
      boxCarousel.scrollLeft -= 329;
    } else {
      boxCarousel.scrollLeft -= 250;
    }
  } else {
    boxCarousel.scrollLeft -= 330;
  }

  if (start <= 0) {
    prevMobile.classList.remove("active");
    nextMobile.classList.add("active");
    start = 0;
  } else if (start > 0) {
    prevMobile.classList.add("active");
  }

  if (start < 3) {
    nextMobile.classList.add("active");
  } else if (start > 3) {
    nextMobile.classList.remove("active");
    start = 3;
  }
};
nextMobile.onclick = () => {
  start++;
  boxCarousel.style.scrollBehavior = "smooth";
  boxCarousel.scrollLeft += 330;
  if (start > 0) {
    prevMobile.classList.add("active");
  } else if (start <= 0) {
    prevMobile.classList.remove("active");
    start = 0;
  }
  if (window.innerWidth < 770) {
    if (start == 5) {
      nextMobile.classList.remove("active");
    } else if (start > 5) {
      nextMobile.classList.remove("active");
      start = 5;
    }
  } else {
    if (start < 2) {
      nextMobile.classList.add("active");
    } else if (start == 3) {
      nextMobile.classList.remove("active");
    } else if (start > 3) {
      nextMobile.classList.remove("active");
      start = 3;
    }
  }
};

// -----------------------------LIKE BUTTON---------------------------

let handleLike = document.querySelectorAll("#handleLike");

handleLike.forEach((likes) => {
  likes.addEventListener("click", () => {
    likes.classList.toggle("active");
  });
});

// ----------------------------CAROUSEL-COMENT-------------------------

let handleCarouselComment = document.querySelector(".handle-carousel-comment");
let Count = 0;

function handleSlideComment(index) {
  let cardComment = document.querySelectorAll(".card-comment");
  let allCardComment = cardComment.length;

  if (index >= allCardComment) {
    Count = 0;
    handleCarouselComment.classList.remove("active");
  } else {
    Count = index;
    handleCarouselComment.classList.add("active");
  }

  let offset = -Count * 100;

  document.querySelector(
    ".handle-carousel-comment"
  ).style.transform = `translateX(${offset}%)`;
}
function autoSlide() {
  handleSlideComment(Count + 1);
}

setInterval(autoSlide, 3000);

handleSlideComment(Count);

// ----------------------ANIMATION PLAYGROUND----------------------------

let title = document.querySelector(".title");

setTimeout(() => {
  title.classList.add("active");
}, 900);

// -------------------------------SHOW BOX MENU--------------------------

let boxMenu = document.querySelector(".box-menu");

function toggleBoxMenu() {
  boxMenu.classList.toggle("active");
}

// -----------------------------DROP-DOWN MENU--------------------------

let allDropDown = document.querySelectorAll(".drop-down");
let allMenu = document.querySelectorAll(".wraper-footer-mobile .row");

function openMenu(tabs) {
  event.currentTarget.classList.toggle("active");
  document.querySelector(`.${tabs}`).classList.toggle("active");
}


// --------------------------CART FUNCTIONAL-----------------------------

let count = document.getElementById("count");
let counts = 1;
let boxProduct = document.querySelector(".box-product");
let prices = document.getElementById("prices");
let price = 50;
let addCart = document.getElementById("add-cart");

function handleMin() {
  counts--;
  price -= 50;
  count.innerHTML = counts;
  prices.innerHTML = `$${price}.00`;
  includeData(counts, price);
  if (counts < 1) {
    boxProduct.style.display = "none";
  }
}
function handlePlus() {
  counts++;
  price += 50;
  includeData(counts, price);
  count.innerHTML = counts;
  prices.innerHTML = `$${price}.00`;
}

// ----------------------------POPUP----------------------------------

let popUp = document.getElementById("pop-up");
let boxPopUp = document.querySelector(".box-pop-up");
let countPopUp = document.querySelector(".countPopUp");
let total = document.querySelector(".total");

function includeData(a, b) {
  if (a < 1) {
    containerCart.classList.add("active");
    container.classList.add("active-blur");
    popUp.classList.add("active")
    setTimeout(() => {
      alert("Please select one of the items to checkout");
    }, 600);
  }
  countPopUp.innerHTML = a;
  total.innerHTML = `$${b}.00`;
}

function showPopUp() {
  popUp.style.display = "flex";
  containerCart.classList.remove("active");
  container.classList.remove("active-blur");
  setTimeout(() => {
    boxPopUp.classList.add("active");
  }, 250);
}

let cancel = document.querySelector(".cancel");
let confirmContinue = document.querySelector(".confirm");

cancel.onclick = () => {
  popUp.style.display = "none";
  boxPopUp.classList.remove("active");
};

confirmContinue.onclick = () => {
  popUp.style.display = "none";
  boxPopUp.classList.remove("active");
  setTimeout(() => {
    alert("Your order has been processed, please be patient");
  }, 500);
};
