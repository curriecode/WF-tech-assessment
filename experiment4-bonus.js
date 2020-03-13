//INCOMPLETE STILL A WORK IN PROGRESS
(function changeText() {
  // let newText = "Personalized for you.";
  document.querySelector(".hero__title").innerHTML = "Personalized for you.";
  localStorage.setItem("text", changeText.toString());
})();

function restore() {
  let text = localStorage.getItem("text");

  // Convert the String back to a function
  let changeText = eval("(" + text + ")");
  changeText();
}

document.querySelector(".app-header__logo").addEventListener("click", () => {
  restore();
  changeText();
});
