const form = document.querySelector("form");
const inp = document.querySelector("input");
const main = document.querySelector("main");
const loading = document.querySelector(".err");

// GeoLoaction API
function geoLocation() {
  const tokken = "efa4ff08a21f76";
  const link = `https://ipinfo.io/json?token=${tokken}`;

  fetch(link)
    .then((data) => data.json())
    .then((data) => {
      console.log(data.city);
      loading.innerHTML = data.city
    });
}
geoLocation()
// weather API
function weather(main) {
  const API = "01bf2b2dae5086192a11af6f238d56ce";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${main}&appid=${API}&units=metric`;

  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      content(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
// weather API end

function content(data) {
  main.innerHTML = `
    <div class="wrapper">
          <div class="weather_city">
            <span class="city_title"
              ><i class="fa-solid fa-location-dot"></i> ${data.name}, ${
    data.sys.country
  } </span
            >
            <div class="temperature">
            <div class=""><p>${data.weather[0].main}</p></div>
              <span class="temp">${Math.round(data.main.temp)}°C</span>
              <div class="min_max">
                <span class="temp_max">${Math.round(data.main.temp_max)}°</span>
                <span class="temp_min">${Math.round(data.main.temp_min)}°</span>
              </div>
            </div>
            <div class="wind_temp">
              <div class="wrap winds">
                <div class="wind_info">
                  <div class="wind_icon">
                    <i class="fa-solid fa-wind"></i>
                  </div>
                  <div class="speed_title">
                    <p class="title">Wind</p>
                    <span>${data.wind.speed} km/h</span>
                  </div>
                </div>
              </div>
              <div class="wrap winds">
                <div class="wind_info">
                  <div class="wind_icon">
                   <i class="fa-solid fa-water"></i>
                  </div>
                  <div class="speed_title">
                    <p class="title">Atmospheric</p>
                    <span>${data.main.pressure} hPa</span>
                  </div>
                </div>
              </div>
              <div class="wrap winds">
                <div class="wind_info">
                  <div class="wind_icon">
                   <i class="fa-solid fa-droplet"></i>
                  </div>
                  <div class="speed_title">
                    <p class="title">Humidity</p>
                    <span>${data.main.humidity} %</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg_img">
              <!-- <img src="" alt="walpaper" /> -->
            </div>
          </div>
          <div class="weather_temps">
            <div class="wind_vis">
              <div class="temp wind">
                <span class="title"
                  ><i class="fa-solid fa-leaf"></i> Title</span
                >
                <div class="temp_min">
                  <span>25°</span>
                </div>
                <div class="wind_pm">
                  <p>12.9 <span>PM25</span></p>
                  <p>12.9 <span>PM25</span></p>
                  <p>12.9 <span>PM25</span></p>
                </div>
              </div>
              <div class="temp sunset">
                <div class="sunset_temp">
                  <span><i class="fa-sharp fa-solid fa-sun"></i> Quyoshli</span>

                  <span>21</span>
                </div>
              </div>
            </div>
            <div class="visibility">
              <div class="item">
                <p>Rain</p>
                <i class="fa-solid fa-cloud-bolt"></i>
                <p>25°</p>
              </div>
              <div class="item">
                <p>Snow</p>
                <i class="fa-solid fa-bolt"></i>
                <p>25°</p>
              </div>
              <div class="item">
                <p>Sun</p>
                <i class="fa-solid fa-sun"></i>
                <p>25°</p>
              </div>
              <div class="item">
                <p>Clodus</p>
                <i class="fa-solid fa-cloud"></i>
                <p>25°</p>
              </div>
            </div>
          </div>
        </div>
  `;
}

// search input submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = inp.value;
  if (input) {
    weather(input);
  } else {
    console.log("error");
  }
  form.reset();
});
// search input submit end
