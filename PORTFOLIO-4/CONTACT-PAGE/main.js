

AOS.init()

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

// -------------------------------SHOW BOX MENU--------------------------

let boxMenu = document.querySelector(".box-menu")

function toggleBoxMenu(){
  boxMenu.classList.toggle("active")
}

// -----------------------------DROP-DOWN MENU---------------------------

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