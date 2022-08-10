const tabs = document.querySelector(".tabs-container");
const tabButton = document.querySelectorAll(".tab-link");
const contents = document.querySelectorAll(".content");

/* Burger Menu */
var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

/* Tabs Action */
tabs.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
    console.log('ff')
    burgerMenu.classList.toggle("close");
    overlay.classList.toggle("overlay");
  }
};
