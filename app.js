const theme = document.querySelector(".toogle");
const icon = document.querySelector(".fa-sun");
const toggle = document.querySelector(".toogle");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const todayLight = document.querySelector(".today");
const items = document.querySelectorAll(".items, .region");
const mapTemp = document.querySelector(".map_temp");
const weatherIcon = document.querySelectorAll(".img_icons");
const inp = document.querySelector("input");
const socialIcon = document.querySelectorAll(".social_nav");
const form = document.querySelector("form");
const main = document.querySelector("main");
const loader = document.querySelector(".time");

// API key and fetch
function apiVisual(city) {
  let key = "CFCZZ3WZPCTHWC6EC6D4TUZT6";
  let urlAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${key}&unitGroup=metric`;

  fetch(urlAPI)
    .then((data) => data.json())
    .then((data) => {
      loader.style.display = "none";
      console.log("succes");
      newDiv(data);
      console.log(data);
      // console.log(data.alerts[0].description);
    });
}
// API key and fetch end

// dark

// html append
function newDiv(data) {
  let today = data.currentConditions;
  const location = document.querySelector("#location");
  location.innerHTML = data.resolvedAddress;

  main.innerHTML = `
    <div class="main_temp">
          <div class="name_week ">
            <p>Bugungi / bir haftalik</p>
          </div>
          <div class="item_weather">
            <div class="item today">
              <div class="today_time ">
                <span id="week">Bugun</span>
                <span id="time"></span>
              </div>
              <div class="today_weather">
                <div class="temp_gradus">
                  <div class="gradus"><p>${Math.round(data.currentConditions.temp)}°</p></div>
                 <div class="today_icon"> <img class="weather_icon" src="/icon//Cloudy Night.png" alt="icon weather" /></div>
                </div>
                <div class="weather_func ">
                  <div class="wind_temp">
                    <div class="weather_icons">
                      <img
                        class="img_icons"
                        src="/icon/mini icon/wind.png"
                        alt=""
                      /><span>${data.currentConditions.windspeed}%</span>
                    </div>
                    <div class="weather_icons">
                      <img
                        class="img_icons"
                        src="/icon/mini icon/pressure.png"
                        alt=""
                      /><span>${data.currentConditions.pressure}</span>
                    </div>
                    <div class="weather_icons">
                      <img
                        class="img_icons"
                        src="/icon/mini icon/humidity.png"
                        alt=""
                      /><span>${data.currentConditions.humidity}</span>
                    </div>
                  </div>
                  <div class="sunrise">
                    <div>
                      <img
                        class="img_icons"
                        src="/icon/mini icon/sunrise.png"
                        alt=""
                      /><span>${data.currentConditions.sunrise}</span>
                    </div>
                    <div>
                      <img
                        class="img_icons"
                        src="/icon/mini icon/sunset.png"
                        alt=""
                      /><span>${data.currentConditions.sunset}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="items">
              <div class="wek">
                <p>${data.days[0].datetime.substring(5)}</p>
                <hr />
              </div>
              <div class="week_icon">
                <img id="item_icon" src='/icon/Cloudy Night.png' />
              </div>
              <div class="week_temp">
                <p>${Math.round(data.days[0].temp)}°</p>
              </div>
            </div>
            <div class="items">
              <div class="wek">
                <p>${data.days[1].datetime.substring(5)}</p>
                <hr />
              </div>
              <div class="week_icon">
                <img id="item_icon" src='/icon/Cloudy Night.png' />
              </div>
              <div class="week_temp">
                <p>${Math.round(data.days[1].temp)}°</p>
              </div>
            </div>
            <div class="items">
              <div class="wek">
                <p>${data.days[2].datetime.substring(5)}</p>
                <hr />
              </div>
              <div class="week_icon">
                <img id="item_icon" src='/icon/Cloudy Night.png' />
              </div>
              <div class="week_temp">
                <p>${Math.round(data.days[2].temp)}°</p>
              </div>
            </div>
            <div class="items">
              <div class="wek">
                <p>${data.days[3].datetime.substring(5)}</p>
                <hr />
              </div>
              <div class="week_icon">
                <img id="item_icon" src='/icon/Cloudy Night.png' />
              </div>
              <div class="week_temp">
                <p>${Math.round(data.days[3].temp)}°</p>
              </div>
            </div>
            <div class="items">
              <div class="wek">
                <p>${data.days[4].datetime.substring(5)}</p>
                <hr />
              </div>
              <div class="week_icon">
                <img id="item_icon" src='/icon/Cloudy Night.png' />
              </div>
              <div class="week_temp">
                <p>${Math.round(data.days[4].temp)}°</p>
              </div>
            </div>
            <div class="items">
              <div class="wek">
                <p>${data.days[5].datetime.substring(5)}</p>
                <hr />
              </div>
              <div class="week_icon">
                <img id="item_icon" src='/icon/Cloudy Night.png' />
              </div>
              <div class="week_temp">
                <p>${Math.round(data.days[5].temp)}°</p>
              </div>
            </div>
          </div>
          <div class="map">
            <div class="map_weather">
              <p>Global xarita</p>
              <div class="map_temp">
                <div className="desc">
                    <p>Shudring nuqtasi harorati: ${
                      data.currentConditions.dew
                    }</p>
                   <p>His qilinishi: ${data.currentConditions.feelslike}°C</p>
                   <p>Bulut qoplami: ${data.currentConditions.cloudcover}%</p>
                   <p>Oy fazasi: ${data.currentConditions.moonphase}</p>
                    <p>uzoqdagi ob'ektlar ko'rinishi: ${
                      data.currentConditions.visibility
                    } miles</p>
                    <p>Ob havo tavsifi: ${data.description}</p>
                </div>
                <div className="temp_desc">
                   <p>Shudring nuqtasi harorati: ${
                     data.currentConditions.dew
                   }</p>
                  <p>His qilinishi: ${data.currentConditions.feelslike}°C</p>
                  <p>Bulut qoplami: ${data.currentConditions.cloudcover}%</p>
                  <p>Oy fazasi: ${data.currentConditions.moonphase}</p>
                  <p>uzoqdagi ob'ektlar ko'rinishi: ${
                    data.currentConditions.visibility
                  } miles</p>
                  <p>Ob havo tavsifi: ${data.description}</p> 
                </div>
              </div>
            </div>
            <div class="city_temps">
              <p>Boshqa yirik shaharlar</p>
              <div class="region">
                <div class="region_name">
                  <p class="city">Uzbekistan</p>
                  <h3>Samarqand</h3>
                  <p>Sunny</p>
                </div>
                <div class="region_temp">
                  <img src="/icon/Cloudy Night.png" alt="" />
                  <p>31C</p>
                </div>
              </div>
              <div class="region">
                <div class="region_name">
                  <p class="city">Uzbekistan</p>
                  <h3>Andijon</h3>
                  <p>Sunny</p>
                </div>
                <div class="region_temp">
                  <img src="/icon/Cloudy Night.png" alt="" />
                  <p>31C</p>
                </div>
              </div>
              <div class="region">
                <div class="region_name">
                  <p class="city">Uzbekistan</p>
                  <h3>Xorazim</h3>
                  <p>Sunny</p>
                </div>
                <div class="region_temp">
                  <img src="/icon/Cloudy Night.png" alt="" />
                  <p>31C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;

  let iconWeather = document.querySelector(".weather_icon");
  let conWeather = document.querySelector("#time");

console.log(today.icon);

  if (today.icon == "cloudy") {
    iconWeather.src = "./icon/cloud.png";
    conWeather.innerHTML = "Bulutli";
  } else if (today.icon == "partly-cloudy-night") {
    iconWeather.src = "./icon/Cloudy Night.png";
    conWeather.innerHTML = "Qisman bulutli";
  } else if (today.icon == "clear-night") {
    iconWeather.src = "/icon/claer nigth.png";
    conWeather.innerHTML = "Toza tun";
    console.log("yaq");
  } else if (today.icon == "rain") {
    iconWeather.src = "/icon/Raining.png";
    conWeather.innerHTML = "Yomgir";
    console.log("yaq");
  }
}

// GeoLoaction
function geoLocation() {
  let tokken = `efa4ff08a21f76`;
  let url = `https://ipinfo.io/json?token=${tokken}`;

  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      apiVisual(data.city);
    });
}
geoLocation();

// Theme dark/light
// theme.addEventListener("click", () => {
//   themes();
//   function themes() {
//     icon.classList.toggle("fa-moon");
//     icon.classList.toggle("fa-sun");
//     body.classList.toggle("active");
//     if (icon.classList.contains("fa-moon")) {
//       items.forEach((item) => {
//         item.style.backgroundColor = "#637e94bb";
//       });
//       socialIcon.forEach((item) => {
//         item.style.backgroundColor = "#637e94bb";
//       });
//       inp.style.backgroundColor = "#637e94bb";
//       inp.style.color = "black";
//       toggle.style.backgroundColor = "#637e94bb";
//       mapTemp.style.backgroundColor = "#637e94bb";
//       todayLight.style.backgroundColor = "#637e94bb";
//       footer.style.backgroundColor = "#637e94bb";
//       footer.style.color = "black";
//       console.log("light");
//     } else {
//       items.forEach((item) => {
//         item.style.backgroundColor = "#292929";
//       });
//       socialIcon.forEach((item) => {
//         item.style.backgroundColor = "#292929";
//       });
//       inp.style.backgroundColor = "#292929";
//       inp.style.color = "white";
//       toggle.style.backgroundColor = "#292929";
//       mapTemp.style.backgroundColor = "#292929";
//       todayLight.style.backgroundColor = "#bcd8edbb";
//       footer.style.backgroundColor = "#292929";
//       footer.style.color = "white";
//       console.log("dark");
//     }
//   }
// });

// Search Weather input
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = inp.value.trim();
  function search() {
    if (input.length == 0) {
      console.log("eror");
    } else {
      // console.log(input);
      apiVisual(input);
    }
  }
  search();
  form.reset();
});
// Search Weather input end
