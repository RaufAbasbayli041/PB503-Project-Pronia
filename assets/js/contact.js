









function validateForm() {
  const inputFirstName = document.querySelector("#inputFirstName");
  const inputLastName = document.querySelector("#inputLastName");
  const inputphone = document.querySelector("#inputphone");
  const inputEmail = document.querySelector("#inputEmail");

  let isValid = true;

  if (inputFirstName === "") {
    document.querySelector(".error-firstName").textContent = "enter first name";
    isValid = false;
  }
  if (inputLastName === "") {
    document.querySelector(".error-lastName").textContent = "enter last name";
    isValid = false;
  }
  if (inputphone === "") {
    document.querySelector(".error-phone").textContent = "enter phone number";
    isValid = false;
  }
  if (inputEmail === "") {
    document.querySelector(".error-email").textContent = "enter email";
    isValid = false;
  }
  return isValid;
}
