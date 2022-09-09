let modal = document.getElementById("hrcom-project");
let btn = document.getElementById("hrcom");
let span = document.getElementById("close-hrcom");

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let btn_ar = document.getElementById("arabian");
let modal_ar = document.getElementById("arabian-project");
let span_ar = document.getElementById("close-arabian");

btn_ar.onclick = function() {
  modal_ar.style.display = "block";
}
span_ar.onclick = function() {
  modal_ar.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal_ar.style.display = "none";
  }
}