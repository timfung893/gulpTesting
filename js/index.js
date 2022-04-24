window.addEventListener("load", (event) => {
  const toggle = document.querySelector(".navbar-toggle");
  const menu = document.querySelector(".navbar");
  const toTop = document.querySelector(".footer-to-top");

  // toggle menu
  toggle.addEventListener("click", function () {
    menu.classList.add("active");
  });

  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.matches(".navbar-toggle")) {
      menu.classList.remove("active");
    }
  });

  // to top

  toTop.addEventListener("click", function () {
    console.log("ok");

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});
