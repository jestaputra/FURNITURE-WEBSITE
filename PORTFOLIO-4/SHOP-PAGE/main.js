

AOS.init()


let Products = [
  {
    id: 1,
    name: "product-1",
    img: "../LANDING-PAGE/images/card-20.jpg",
    price: 100.000
  },
]

// ------------------------------SHOW SEARCH------------------------------

let inputBox = document.getElementById("input-box");
function search() {
  if (inputBox.style.display == "block") {
    inputBox.style.display = "none";
  } else {
    inputBox.style.display = "block";
  }
}

// ------------------------------SHOW AND HIDE CART-----------------------

let containerCart = document.querySelector(".container-cart")
let container = document.querySelector(".container")

function showBoxCart(){
  containerCart.classList.add("active")
  container.classList.add("active-blur")
}

function hideBoxCart(){
  containerCart.classList.remove("active")
  container.classList.remove("active-blur")
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

// --------------------------CHECKLIST---------------------------------

let allCheck = document.querySelectorAll(".category.two div");

allCheck.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active")
  })
});

let list = document.querySelectorAll(".list")

function handleList(){
  list.forEach(e => {
    e.classList.remove("active")
  })

  event.currentTarget.classList.add("active")
}

// -------------------------------RANGE SLIDE---------------------------

function handleRange(value){
  document.getElementById("paymentValue").innerHTML = `$${value}.00`
}

// -----------------------------DROPDOWN---------------------------

let handleDropdownOne = document.querySelector(".handle-dropdown.one")
let openCategoryOne = document.querySelector(".open-category.one")

function openDropDownOne(){
  handleDropdownOne.classList.toggle("active")
  openCategoryOne.classList.toggle("active")
}

let handleDropdownTwo  = document.querySelector(".handle-dropdown.two")
let openCategoryTwo = document.querySelector(".open-category.two")

function openDropDownTwo(){
  handleDropdownTwo.classList.toggle("active")
  openCategoryTwo.classList.toggle("active")
}

// ----------------------------CAROUSEL-COMENT-------------------------

let handleCarouselComment = document.querySelector(".handle-carousel-comment")
let Count = 0;

function handleSlideComment(index) {
  let cardComment = document.querySelectorAll(".card-comment");
  let allCardComment = cardComment.length;

  if (index >= allCardComment) {
      Count = 0;
      handleCarouselComment.classList.remove("active")
  } else {
    Count = index;
    handleCarouselComment.classList.add("active")
  }

  let offset = -Count * 100;

  document.querySelector(".handle-carousel-comment").style.transform = `translateX(${offset}%)`;
}
function autoSlide(){
    handleSlideComment(Count + 1)
}

setInterval(autoSlide, 3000)

handleSlideComment(Count)

// ------------------------------HANDLE-PRODUCTS----------------------------

let show = document.querySelectorAll(".show")
let products = document.querySelectorAll(".products")

function HandleProducts(product){
  show.forEach(s => {
    s.classList.remove("active")
  })
  products.forEach(p => {
    p.classList.remove("active")
  })

  event.currentTarget.classList.add("active")
  document.getElementById(product).classList.add("active")
}

// -----------------------------LIKE BUTTON---------------------------

let handleLike = document.querySelectorAll("#handleLike")

handleLike.forEach(likes => {
  likes.addEventListener("click", () => {
    likes.classList.toggle("active")
  })
})

// -------------------------------SHOW BOX MENU--------------------------

let boxMenu = document.querySelector(".box-menu")

function toggleBoxMenu(){
  boxMenu.classList.toggle("active")
}

// -----------------------------DROP-DOWN MENU--------------------------

let allDropDown = document.querySelectorAll(".drop-down")
let allMenu = document.querySelectorAll(".row")

function openMenu(tabs){
  event.currentTarget.classList.toggle("active")
  document.querySelector(`.${tabs}`).classList.toggle("active")
}

let textOne = document.querySelector(".text-1")

setTimeout(() => {
  textOne.classList.add("active")
}, 1100)


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