import {
    getAllDatas,
    getDataById,
    createData,
    editDataById,
    deleteDataById,
  } from "./service.js";
  import { endpoint } from "./constant.js";
  


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



  const payment_number = document.querySelector(".payment_number");
payment_number.addEventListener("click", () => {
  alert("are u sure");
});


var sticky = document.querySelector("#main_options-stickyy");

let timeoutId;

window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {


    timeoutId = setTimeout(() => {
      sticky.style.opacity = "1";
      sticky.style.display = "block"; 
    }); 
  }

  if (window.scrollY < 250) {
    clearTimeout(timeoutId); 
   
    sticky.style.opacity = "0";
    sticky.style.display = "none"; 
  }
});