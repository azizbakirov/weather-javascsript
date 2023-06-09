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
const loader = document.querySelector(".img_load");
const errors = document.querySelector(".error");

// Geolocation
function geoLocation() {
  let api = "efa4ff08a21f76";
  let url = `https://ipinfo.io/json?token=${api}`;

  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      apiVisual(data.city);
    });
}
geoLocation();

// API key and fetch
function apiVisual(city) {
  let key = "CFCZZ3WZPCTHWC6EC6D4TUZT6";
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${key}&unitGroup=metric`;

  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      newDiv(data);
      console.log(data);
      console.log(data.currentConditions.winddir);
    })
    .catch((err) => {
      errors.classList.toggle("error_active");
      setTimeout(() => {
        errors.classList.toggle("error_active");
      }, 3000);
    });
}
// API key and fetch end

// html append
function newDiv(data) {
  let today = data.currentConditions.icon;
  const location = document.querySelector("#location");
  location.innerHTML = data.resolvedAddress;

  main.innerHTML = `
    <div class="main_temp">
          <div class="name_week ">
            <p>Bugungi / bir haftalik</p>
            <p class="addres">${data.resolvedAddress}</p>
          </div>
          <div class="item_weather">
            <div class="item today">
              <div class="today_time ">
                <span id="week">Bugun</span>
                <span id="time"></span>
              </div>
              <div class="today_weather">
                <div class="temp_gradus">
                  <div class="gradus"><p>${Math.round(
                    data.currentConditions.temp,
                  )}°</p>
                  <div class="temp_day">
                  
                  <span>Kunduzi: ${data.days[0].tempmax}°C</span></div>
                  </div>
                 <div class="today_icon"> <img class="weather_icon" src="/icon//Cloudy Night.png" alt="icon weather" /></div>
                </div>
                <div class="weather_func">
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
                      <div className="temps">
                      <img
                        class="img_icons"
                        src="/icon/mini icon/sunrise.png"
                        alt=""
                      /><span>${data.currentConditions.sunrise}</span>
                      </div>
                      <div className="temps">
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
                <p>${data.days[1].datetime.substring(5)}</p>
                <hr />
              </div>
              <div class="week_icon">
                <img id="item_icon" alt="no img" />
              </div>
              <div class="week_temp">
                <p>${Math.round(data.days[1].tempmax)}°</p>
              </div>
            </div>
            <div class="items">
              <div class="wek">
                <p>${data.days[2].datetime.substring(5)}</p>
                <hr />
              </div>
              <div class="week_icon">
                <img id="item_icon" alt="no img"  />
              </div>
              <div class="week_temp">
                <p>${Math.round(data.days[2].tempmax)}°</p>
              </div>
            </div>
            <div class="items">
              <div class="wek">
                <p>${data.days[3].datetime.substring(5)}</p>
                <hr />
              </div>
              <div class="week_icon">
                <img id="item_icon" alt="no img"  />
              </div>
              <div class="week_temp">
                <p>${Math.round(data.days[3].tempmax)}°</p>
              </div>
            </div>
            <div class="items">
              <div class="wek">
                <p>${data.days[4].datetime.substring(5)}</p>
                <hr />
              </div>
              <div class="week_icon">
                <img id="item_icon" alt="no img"  />

              </div>
              <div class="week_temp">
                <p>${Math.round(data.days[4].tempmax)}°</p>
              </div>
            </div>
            <div class="items">
              <div class="wek">
                <p>${data.days[5].datetime.substring(5)}</p>
                <hr />
              </div>
              <div class="week_icon">
                <img id="item_icon" alt="no img"  />

              </div>
              <div class="week_temp">
                <p>${Math.round(data.days[5].tempmax)}°</p>
              </div>
            </div>
            <div class="items">
              <div class="wek">
                <p>${data.days[6].datetime.substring(5)}</p>
                <hr />
              </div>
              <div class="week_icon">
                <img id="item_icon" alt="no img"  />
              </div>
              <div class="week_temp">
                <p>${Math.round(data.days[6].tempmax)}°</p>
              </div>
            </div>
          </div>
          <div class="map">
            <div class="map_weather">
              <p>Ob xavo malumotlari </p>
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
                  
                     <p class="description">Ob xavo tavsifi: ${
                       data.description
                     }</p>
                </div>
                <div className="temp_desc">
                <p>Vaqt Zonasi: "${data.timezone}"</p>
                   <p>Quyosh Energiyasi: ${
                     data.currentConditions.solarenergy
                   } MJ/m2</p>
                  <p>Quyosh nurlanishi: ${
                    data.currentConditions.solarradiation
                  } W/m2</p>
                    <p>UVindex (ultrabinafsha ta'sir qilinishi): ${
                      data.currentConditions.uvindex
                    } UV</p> 
                </div>
              </div>
            </div>
            <div class="city_temps backdrop">
              <p>Boshqa yirik shaharlar</p>
              <div class="region">
                
                <div class="region_name">
                  <p class="city">Uzbekistan</p>
                  <h3>Samarqand</h3>
                  <p>Sunny</p>
                </div>
                <div class="region_temp">
                  <img src="/icon/Cloudy Night.png" alt="" />
                  <p>31°</p>
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
                  <p>31°</p>
                </div>
              </div>
              <div class="region">
                <div class="region_name">
                  <p class="city">${main.resolvedAddress}</p>
                  <h3>Xorazim</h3>
                  <p>Sunny</p>
                </div>
                <div class="region_temp">
                  <img src="/icon/Cloudy Night.png" alt="" />
                  <p>31°</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;

  function iconsWeath() {
    let iconWeather = document.querySelector(".weather_icon");
    let conWeather = document.querySelector("#time");
    let weekIcon = document.querySelectorAll("#item_icon");

    for (let i = 0; i < 6; i++) {
      let daysIcon = data.days[i].icon;
      let week = data.days[i].conditions;
      // console.log(data.days[i].icon);
      if (daysIcon === "cloudy-day") {
        weekIcon[i].src = "./icon/cloud.png";
      } else if (daysIcon === "partly-cloudy-day") {
        weekIcon[i].src = "./icon/CloudyDay.png";
      } else if (daysIcon === "clear-day") {
        weekIcon[i].src = "./icon/sun.png";
      } else if (daysIcon === "rain") {
        weekIcon[i].src = "/icon/Raining.png";
      } else if (daysIcon === "cloudy") {
        weekIcon[i].src = "./icon/cloud.png";
      } else if (daysIcon === "wind") {
        weekIcon[i].src = "./icon/wind.png";
      } else if (daysIcon === "snow") {
        weekIcon[i].src = "./icon/snow.png";
      } else if (daysIcon === "thunder") {
        weekIcon[i].src = "./icon/thunder.png";
      }
    }

    if (today == "cloudy" || week == "cloudy") {
      iconWeather.src = "./icon/cloud.png";
      conWeather.innerHTML = "Bulutli";
    } else if (today == "partly-cloudy-night") {
      iconWeather.src = "./icon/Cloudy Night.png";
      conWeather.innerHTML = "Qisman bulutli";
    } else if (today == "clear-night") {
      iconWeather.src = "/icon/claer nigth.png";
      conWeather.innerHTML = "Toza tun";
    } else if (today == "rain") {
      iconWeather.src = "/icon/Raining.png";
      conWeather.innerHTML = "Yomgir";
    } else if (today == "partly-cloudy-day") {
      iconWeather.src = "/icon/CloudyDay.png";
      conWeather.innerHTML = "Qisman bulutli kun";
    } else if (today == "clear-day") {
      iconWeather.src = "/icon/sun.png";
      conWeather.innerHTML = "Quyoshli";
    }
  }
  iconsWeath();
}

// Search Weather input
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = inp.value.trim();
  function search() {
    if (input.length == 0) {
      console.log("eror");
    } else {
      apiVisual(input);
    }
  }
  search();
  form.reset();
});
