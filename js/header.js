/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function updateHeaderHeight() {
  var nav = document.querySelector("nav");
  var header = document.querySelector(".header");
  var links = document.querySelector(".header-links");
  var isDesktop = window.matchMedia("(min-width: 992px)").matches;

  if (links) {
    links.style.display = "";
  }

  if (links && isDesktop) {
    links.classList.remove("is-open");
  }

  if (nav) {
    var headerHeight = nav.offsetHeight;

    if (header && links && links.classList.contains("is-open")) {
      headerHeight = header.offsetHeight + links.scrollHeight;
    }

    document.documentElement.style.setProperty("--header-height", headerHeight + "px");
  }
}

function myFunction() {
  var links = document.querySelector(".header-links");
  
  if (links) {
    links.classList.toggle("is-open");
  }

  updateHeaderHeight();
}

window.addEventListener("DOMContentLoaded", updateHeaderHeight);
window.addEventListener("resize", updateHeaderHeight);
