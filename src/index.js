import "./style.scss";
const btnClose = document.querySelector(".btn-menu-close");
let i = 1;
const menupoints = document.querySelectorAll(".nav-menu > li");
const overlay = document.querySelector(".overlay");
const trigger = document.querySelector(".nav-trigger");
const menu = document.querySelector(".nav-menu");
(function menuShow() {
  trigger.addEventListener("click", () => {
    trigger.classList.add("animate");
    menu.style.opacity = "1";
    menu.classList.add("menu-open");
    menu.style.width = "100%";
    menu.style.height = "100%";
    menupoints.forEach((point) => {
      setTimeout(() => {
        addThings(point);
      }, 300 * i);
      i++;
    });
    overlay.classList.add("active");
    btnClose.classList.add("active");
    btnClose.style.transition = "all 500ms ease-in-out";
  });
})();

function addThings(point) {
  point.classList.add("ani-top-down");
  point.style.transition = "all 1.5s ease-in-out";
}
btnClose.addEventListener("click", () => {
  overlay.classList.remove("active");
  btnClose.classList.remove("active");
  trigger.classList.remove("animate");
  menupoints.forEach((point) => {
    point.classList.remove("ani-top-down");
  });
  menu.classList.remove("menu-open");
  menu.style.opacity = "0";
  menu.style.width = "0px";
  menu.style.height = "0px";
  i = 1;
});
