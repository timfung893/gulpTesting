const toggle = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar");

window.addEventListener("load", (event) => {
  toggle.addEventListener("click", function () {
    menu.classList.add("active");
  });

  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.matches(".navbar-toggle")) {
      menu.classList.remove("active");
    }
  });
});
