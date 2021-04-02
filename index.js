const navbarIcon = document.getElementsByTagName("img")[1];
const navMenu = document.getElementsByClassName("navMenu")[0];
const navbarHeadings = document.getElementsByClassName("navbarHeadings");
const hiddenItems = document.getElementsByClassName("hiddenItems");
const navHeading = document.getElementsByClassName("navHeading");
const navArrow = document.getElementsByTagName("img"); // [2-4]

navbarIcon.addEventListener("click", function() {
  navMenu.classList.toggle("hidden");
  if (navbarIcon.getAttribute("src") === "images/icon-hamburger.svg") {
    navbarIcon.setAttribute("src", "images/icon-close.svg");
  } else {
    navbarIcon.setAttribute("src", "images/icon-hamburger.svg");
  }
})

for (let i = 0; i < navbarHeadings.length; i++) {
  navbarHeadings[i].addEventListener("click", function() {
    hiddenItems[i].classList.toggle("hidden");
    navHeading[i].classList.toggle("click");
    navArrow[i + 2].classList.toggle("rotateArrow");
  })
}
