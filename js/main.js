const hamBtn = document.getElementById("hamburgerBtn"),
      hamView = document.getElementById("hamburgerView"),
      bodyView = document.getElementsByTagName("BODY")[0];

function menu() {
    hamView.classList.toggle("open");
    hamView.classList.toggle("hidden");
    bodyView.classList.toggle("menuOpen");
}

function removeMenu() {
    hamView.classList.remove("open");
    hamView.classList.add("hidden");
    bodyView.classList.remove("menuOpen");
}

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
