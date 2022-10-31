let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "14px";
    document.querySelector(".t-wrap").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-90px";
    document.querySelector(".t-wrap").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let overlay = document.querySelector(".overlay");
let mainv = false;
toggle.onclick = function () {
  if (!mainv) {
    toggle.classList.add("active");
    menu.classList.remove("is-closed");
    setTimeout(() => {
      menu.classList.remove("closed");
    }, 150);
    overlay.classList.add("is-active");
    mainv = true;
  } else {
    toggle.classList.remove("active");
    menu.classList.add("closed");
    setTimeout(() => {
      menu.classList.add("is-closed");
    }, 300);
    mainv = false;
  }
};
overlay.onclick = function () {
  toggle.classList.remove("active");
  menu.classList.add("closed");
  setTimeout(() => {
    menu.classList.add("is-closed");
  }, 300);
  overlay.classList.remove("is-active");
  mainv = false;
  visible = false;
};
