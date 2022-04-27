// alert("almost 1 hour of project html, css, js");

const headerSearchFullPage = document.getElementById("search-form-container");
const headerOpenSearchIcon = document.getElementById("search-icon");
const headerCloseSearchIcon = document.getElementById("form-close-btn");

headerOpenSearchIcon.addEventListener("click", () => {
   headerSearchFullPage.classList.add("activated");
});

headerCloseSearchIcon.addEventListener("click", () => {
   headerSearchFullPage.classList.remove("activated");
});


// Press ESC Key to close full page search 
window.addEventListener("keyup", (event) => {
   if(event.key === 'Escape') {
      headerSearchFullPage.classList.remove("activated");
   }
})