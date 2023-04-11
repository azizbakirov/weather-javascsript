const theme = document.querySelector(".toogle");
const icon = document.querySelector(".fa-moon");
const toggle = document.querySelector('.toogle')

theme.addEventListener("click", () => {
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
  if(icon.classList.contains("fa-sun")){
    toggle.style.backgroundColor = "#CFCFCF";
    icon.style.color = "#CFCFCF";
    icon.style.backgroundColor = "#101010";
  }else{
    toggle.style.backgroundColor = "#292929";
  }
});
