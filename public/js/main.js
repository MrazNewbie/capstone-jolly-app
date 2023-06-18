// api key for google maps
/*====== AIzaSyD3Qqv7uhxGWlcChpvVvvGDlksPD3xQPbA ======== */

//redirect pada saat click profile
function redirectToLogin() {
  window.location.href = "/public/login.html";
}

//Menambahkan hovered class ke item list yang dipilih

let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

//Menu toggle

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
