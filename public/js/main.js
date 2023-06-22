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

// Mengaktifkan search
function handleSearch(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput");
    const keyword = searchInput.value.toLowerCase();

    if (keyword.trim() === "") {
      window.location.href = "/public/views/index.html";
    } else {
      performSearch(keyword);
    }
  }
}

function performSearch(keyword) {
  const cardNames = document.getElementsByClassName("cardName");

  for (let i = 0; i < cardNames.length; i++) {
    const name = cardNames[i].textContent.toLowerCase();

    if (name.includes(keyword)) {
      cardNames[i].parentNode.parentNode.style.display = "block";
    } else {
      cardNames[i].parentNode.parentNode.style.display = "none";
    }
  }
}
