const theme = document.querySelector(".toogle");
const icon = document.querySelector(".fa-moon");
const toggle = document.querySelector('.toogle')
const body = document.querySelector('body')

theme.addEventListener("click", () => {
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
  if(icon.classList.contains("fa-sun")){
    toggle.style.backgroundColor = "#101010";
    icon.style.color = "black";
    icon.style.backgroundColor = "#cfcfcf";
    body.style.backgroundColor = "#cfcfcf";
    body.style.color = "#101010";
  }else{
    body.style.color = "#cfcfcf";
    body.style.backgroundColor = "#101010";
    toggle.style.backgroundColor = "#292929";
  }
});
