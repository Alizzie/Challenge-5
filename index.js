// Selecting Elements
const navbarIcon = document.getElementsByTagName("img")[1];
const navMenu = document.getElementsByClassName("navMenu")[0];
const navbarHeadings = Array.from(document.getElementsByClassName("navbarHeadings"));
const hiddenItems = Array.from(document.getElementsByClassName("hiddenItems"));
const navHeading = Array.from(document.getElementsByClassName("navHeading"));
const navArrowImages = Array.from(document.getElementsByClassName("arrowImg")); 

// Media Query Stylings (navbar Menu and images)
  navbarIcon.addEventListener("click", function() {
    navMenu.classList.toggle("hidden");
    if (navbarIcon.getAttribute("src") === "images/icon-hamburger.svg") {
      navbarIcon.setAttribute("src", "images/icon-close.svg");
    } else {
      navbarIcon.setAttribute("src", "images/icon-hamburger.svg");
    }
  })

// Navbar Functionality (Only one hiddenItems Section can show up // heading is underlined, but only can be seen on xlarger Devices)
for (let i = 0; i < navbarHeadings.length; i++) {
  navbarHeadings[i].addEventListener("click", function() {

    if (hiddenItems[i].getAttribute("class") === "hiddenItems hidden") {
      hiddenItems.forEach(element => element.classList.add("hidden"));
      hiddenItems[i].classList.remove("hidden");
      navHeading.forEach(heading => heading.classList.remove("click"));
      navHeading[i].classList.add("click");
      navArrowImages.forEach(arrow => arrow.classList.remove("rotateArrow"));
      navArrowImages[i].classList.add("rotateArrow");
      navbarHeadings.forEach(heading => heading.classList.remove("headingUnderline"));
      navbarHeadings[i].classList.add("headingUnderline");
    } else {
      hiddenItems[i].classList.add("hidden");
      navHeading[i].classList.remove("click");
      navArrowImages[i].classList.remove("rotateArrow");
      navbarHeadings[i].classList.remove("headingUnderline");
    }
  })
}
