const theme = document.querySelector(".toogle");
const icon = document.querySelector(".fa-sun");
const toggle = document.querySelector(".toogle");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const todayLight = document.querySelector(".today");
const items = document.querySelectorAll(".items, .region");
const mapTemp = document.querySelector(".map_temp");
const weatherIcon = document.querySelectorAll(".img_icons");
const inp = document.querySelector('input')
const socialIcon = document.querySelectorAll(".social_nav");

console.log(socialIcon);


theme.addEventListener("click", () => {
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
  body.classList.toggle("active");
  themes();
});

function themes() {
  if (icon.classList.contains("fa-moon")) {
    items.forEach((item) => {
      item.style.backgroundColor = "#637e94bb";
    });
    socialIcon.forEach(item =>{
      item.style.backgroundColor = "#637e94bb";
    })  
    inp.style.backgroundColor = "#637e94bb";
    inp.style.color = "black";
    toggle.style.backgroundColor = "#637e94bb";
    mapTemp.style.backgroundColor = "#637e94bb";
    todayLight.style.backgroundColor = "#637e94bb";
    footer.style.backgroundColor = "#637e94bb";
    footer.style.color = "black";
    console.log("light");
  } else {
    items.forEach((item) => {
      item.style.backgroundColor = "#292929";
    });
    socialIcon.forEach((item) => {
      item.style.backgroundColor = "#292929";
    });  
    inp.style.backgroundColor = "#292929";
    inp.style.color = "white";
    toggle.style.backgroundColor = "#292929";
    mapTemp.style.backgroundColor = "#292929";
    todayLight.style.backgroundColor = "#bcd8edbb";
    footer.style.backgroundColor = "#292929";
    footer.style.color = "white";
    console.log("dark");
  }
}
