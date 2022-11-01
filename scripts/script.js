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
    overlay.classList.remove("is-active");
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

const sidebar = function () {
  if (window.innerWidth <= 768) {
    toggle.classList.remove("active");
    overlay.classList.remove("is-active");
    menu.classList.remove("closed");
    menu.classList.remove("is-closed");
  } else {
    menu.classList.add("closed");
    menu.classList.add("is-closed");
  }
};

window.onload = sidebar();
window.addEventListener("resize", function () {
  sidebar();
});

let topMenutoggle = document.querySelector(".second-menu");
let topMenu = document.querySelector(".menu-list");
let bigLogo = document.querySelector(".big-logo");
let SmallLogo = document.querySelector(".small-logo");

topMenutoggle.onclick = function () {
  topMenu.classList.toggle("closed");
  if (topMenu.classList.contains("closed")) {
    bigLogo.style.opacity = "1";
    SmallLogo.style.opacity = "0";
  } else {
    bigLogo.style.opacity = "0";
    SmallLogo.style.opacity = "1";
    if (window.innerWidth <= 363) {
      SmallLogo.style.opacity = "0";
    }
  }
};

window.onresize = function () {
  if (window.innerWidth <= 375) {
    if (topMenu.classList.contains("closed")) {
      bigLogo.style.opacity = "1";
      SmallLogo.style.opacity = "0";
    } else {
      bigLogo.style.opacity = "0";
      SmallLogo.style.opacity = "1";
    }
  } else {
    bigLogo.style.opacity = "1";
    SmallLogo.style.opacity = "0";
  }
};
