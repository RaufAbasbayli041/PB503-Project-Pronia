import {
  getAllDatas,
  getDataById,
  createData,
  editDataById,
  deleteDataById,
} from "./service.js";
import { endpoint } from "./constant.js";

async function getPlants() {
  try {

    const plants = await getAllDatas(endpoint.products);
    const newPlants = await getAllDatas(endpoint.newproducts);
    printCards(plants.data);
    printNewCards(newPlants.data);
  } catch (error) {
    console.log(error);
  }
}

let sp = document.querySelector(".sp")
window.addEventListener()




function printCards(plants) {
  const cards = document.querySelector(".cards");

  cards.innerHTML = "";
  plants.forEach((plant) => {
    let stars = "";
    for (let i = 0; i < plant.rating; i++) {
      stars += '<i class="fa-solid fa-star"></i> ';
    }
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "col-xl-3 col-md-4 col-sm-6 pt-4 mb-3 cards-col";
    cardWrapper.innerHTML = `<div class="card" >
              <img src="${plant.image}" class="card-img-top card_image-1" alt="..." style="display: block;" />
              <img src="${plant.hoverImage}" class="card-img-top card_image-2" alt="..." style="display: none;" />
              <div class="card-body">
                <h5 class="card-title">${plant.name}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item price">$${plant.price}</li>
                <li class="list-group-item rating">${stars}</li>
              
              </ul>
            </div>`;

    const cardElement = cardWrapper.querySelector(".card");
    const cardImg1 = cardWrapper.querySelector(".card_image-1");
    const cardImg2 = cardWrapper.querySelector(".card_image-2");

    cardElement.addEventListener("mouseover", () => {
      cardImg1.style.display = "none";
      cardImg2.style.display = "block";
    });

    cardElement.addEventListener("mouseout", () => {
      cardImg1.style.display = "block";
      cardImg2.style.display = "none";
    });
    cards.appendChild(cardWrapper);
  });
}

getPlants();

let menu = document.querySelector(".sagol");
let dropdown = document.querySelector(".dropdown");

menu.addEventListener("mouseover", () => {
  dropdown.style.display = "block";
});

menu.addEventListener("mouseout", () => {
  dropdown.style.display = "none";
});

document.getElementById("currency").addEventListener("change", function () {
  var selectedOption = this.value;
  var options = this.querySelectorAll("option");
  options.forEach(function (option) {
    if (option.value !== selectedOption) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
});

document.getElementById("language").addEventListener("change", function () {
  var selectedOption = this.value;
  var options = this.querySelectorAll("option");
  options.forEach(function (option) {
    if (option.value !== selectedOption) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
});

// scrol event

function printNewCards(plants) {
  const newCards = document.querySelector(".newCards");
  newCards.innerHTML = "";
  plants.forEach((plant) => {
    let stars = "";
    for (let i = 0; i < plant.rating; i++) {
      stars += '<i class="fa-solid fa-star"></i> ';
    }
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "col-xl-3 col-md-4 col-sm-6 pt-4 mb-3 cards-col";
    cardWrapper.innerHTML = `<div class="card" >
              <img src="${plant.image}" class="card-img-top card_image-1" alt="..." style="display: block;" />
              <img src="${plant.hoverImage}" class="card-img-top card_image-2" alt="..." style="display: none;" />
              <div class="card-body">
                <h5 class="card-title">${plant.name}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item price">$${plant.price}</li>
                <li class="list-group-item rating">${stars}</li>
              
              </ul>
            </div>`;

    const cardElement = cardWrapper.querySelector(".card");
    const cardImg1 = cardWrapper.querySelector(".card_image-1");
    const cardImg2 = cardWrapper.querySelector(".card_image-2");

    cardElement.addEventListener("mouseover", () => {
      cardImg1.style.display = "none";
      cardImg2.style.display = "block";
    });

    cardElement.addEventListener("mouseout", () => {
      cardImg1.style.display = "block";
      cardImg2.style.display = "none";
    });
    newCards.appendChild(cardWrapper);
  });
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

const payment_number = document.querySelector(".payment_number");
payment_number.addEventListener("click", () => {
  alert("are u sure");
});


var sticky = document.querySelector("#main_options-stickyy");
let isVisible = false; // Флаг, чтобы не запускать повторно
let timeoutId;

window.addEventListener("scroll", () => {
  if (window.scrollY > 250 && !isVisible) {
    isVisible = true; // Фиксируем, что меню показано

    timeoutId = setTimeout(() => {
      sticky.style.opacity = "1";
      sticky.style.display = "block"; // Показываем плавно
    }); // Задержка 2 сек
  }

  if (window.scrollY < 250) {
    clearTimeout(timeoutId); // Останавливаем таймер
    isVisible = false;
    sticky.style.opacity = "0";
    sticky.style.display = "none"; // Прячем
  }
});