let share = document.querySelector(".popup-btn");

share.addEventListener("click", sharebtn);

function sharebtn() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}