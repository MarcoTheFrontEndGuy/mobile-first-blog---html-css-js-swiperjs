// switch theme/add to local storage 
const bodyElement = document.body;
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

if(currentTheme) {
   bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener("click", () => {
   bodyElement.classList.toggle('light-theme');

   if(bodyElement.classList.contains('light-theme')) {
      localStorage.setItem('currentTheme', 'themeActive');
   }else {
      localStorage.removeItem('currentTheme');
   }
})