//To run code go to https://login.getsling.com/register and copy and paste into the dev tools console

let modal = document.querySelector(".wf-modal-container");
let modalFirstChild = document.querySelector(".wf-modal-inner-step-one");
modal.style.visibility = "hidden";

//creates X button and appends it to the modal
let closeButton = document.createElement("BUTTON");
let x = document.createTextNode("X");
closeButton.appendChild(x);
modalFirstChild.prepend(closeButton);
closeButton.style.cssText =
  "width: fit-content; border-radius: 3px; outline: none; position: relative; left: 97%;";

let login = document.querySelector(".wf-track--click-to-login2_3");

const showModal = () => {
  modal.style.visibility = "visible";
};

const closeModal = () => {
  modal.style.visibility = "hidden";
};

//closes modal when X button is clicked
modalFirstChild.firstElementChild.addEventListener("click", () => {
  closeModal();
});

//shows modal when login is clicked
login.addEventListener("click", () => {
  showModal();
});
