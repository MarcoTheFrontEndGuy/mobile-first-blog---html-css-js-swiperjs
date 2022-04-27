// Grab elements ---------------------------------------------------------------
const headerElement = document.getElementById("header");



// Nav styles on scroll --------------------------------------------------------
// if(window.scrollY > 15)  ------ what moves is window object NOT the html elements
const scrollHeader = () => {
   if(window.scrollY >= 15) {
      headerElement.classList.add("activated");
      console.log(headerElement.scrollY);
   }else {
      headerElement.classList.remove("activated");
   }
};


window.addEventListener("scroll", scrollHeader);


// Open menu & search pop-up ----------------------------------------------------

const menuToggleIcon = document.getElementById("menu-toggle-icon");

const toggleMenu = () => {
   const mobileMenu = document.getElementById("menu");
   mobileMenu.classList.toggle('activated');
   menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener("click", toggleMenu);

// Open/Close search form popup ---------------------------------------------------

// -- Close the search form popup on ESC keypress ---------------------------------

// Switch theme/add to Local Storage ----------------------------------------------

// const bodyElement = document.body;
// const themeToggleBtn = document.getElementById('theme-toggle-btn');

// bodyElement.addEventListener("click", () => {
//    bodyElement.classList.toggle('light-theme');
// })

// Swiper    