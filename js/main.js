//dailyData = weatherData["amsterdam_daily"].daily

// function img_from_weather(weatherCode) {
//     let img_src = 'Unknown'
//     console.log(weatherCode)
//     if(weatherCode === 0){
//         img_src = "/images/sun.png";
//     } else if(weatherCode >= 1 && weatherCode <= 3){
//         img_src = "/images/overcast.png";
//     } else if(weatherCode >= 51 && weatherCode <= 67 || weatherCode >=80 && weatherCode <=82){
//         img_src = "/images/rain.png";
//     } else if(weatherCode >= 71  && weatherCode <= 77){
//         img_src = "/images/snow.png";
//     }
//     return img_src
// }
//  let weather = 'Unknown'

// weatherCode = dailyData.weather_code[0];
// weather = img_from_weather(weatherCode)

// A function that takes a day adnd returns the weather

// Make some sort of array that maps day of week to ime_src

// function
// let weather_map = []
// for i in range(7):
//   weather_map[i] = weather_today()
// return weather_map

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const currentCity = urlParams.get("city");
  const dailyData = weatherData[currentCity + "_daily"].daily;
  const hourlyData = weatherData[currentCity + "_hourly"].hourly;
  const currentCityElement = document.getElementById("currentCity");
  currentCityElement.innerHTML = currentCity.toUpperCase();

  let weather = "Unknown";
  const weatherCode = dailyData.weather_code[0];

  if (weatherCode === 0) {
    weather = "/images/sun.png";
  } else if (weatherCode >= 1 && weatherCode <= 3) {
    weather = "/images/overcast.png";
  } else if (
    (weatherCode >= 51 && weatherCode <= 67) ||
    (weatherCode >= 80 && weatherCode <= 82)
  ) {
    weather = "/images/rain.png";
  } else if (weather >= 71 && weatherCode <= 77) {
    weather = "/images/snow.png";
  }

  let weatherPlusOne = "Unknown";
  const weatherCodePlusOne = dailyData.weather_code[1];
  if (weatherCodePlusOne === 0) {
    weatherPlusOne = "/images/sun.png";
  } else if (weatherCodePlusOne >= 1 && weatherCodePlusOne <= 3) {
    weatherPlusOne = "/images/overcast.png";
  } else if (
    (weatherCodePlusOne >= 51 && weatherCodePlusOne <= 67) ||
    (weatherCodePlusOne >= 80 && weatherCodePlusOne <= 82)
  ) {
    weatherPlusOne = "/images/rain.png";
  } else if (weatherPlusOne >= 71 && weatherCodePlusOne <= 77) {
    weatherPlusOne = "/images/snow.png";
  }

  let weatherPlusTwo = "Unknown";
  const weatherCodePlusTwo = dailyData.weather_code[2];
  if (weatherCodePlusTwo === 0) {
    weatherPlusTwo = "/images/sun.png";
  } else if (weatherCodePlusTwo >= 1 && weatherCodePlusTwo <= 3) {
    weatherPlusTwo = "/images/overcast.png";
  } else if (
    (weatherCodePlusTwo >= 51 && weatherCodePlusTwo <= 67) ||
    (weatherCodePlusTwo >= 80 && weatherCodePlusTwo <= 82)
  ) {
    weatherPlusTwo = "/images/rain.png";
  } else if (weatherCodePlusTwo >= 71 && weatherCodePlusTwo <= 77) {
    weatherPlusTwo = "/images/snow.png";
  }

  let weatherPlusThree = "Unknown";
  const weatherCodePlusThree = dailyData.weather_code[3];
  if (weatherCodePlusThree === 0) {
    weatherPlusThree = "/images/sun.png";
  } else if (weatherCodePlusThree >= 1 && weatherCodePlusThree <= 3) {
    weatherPlusThree = "/images/overcast.png";
  } else if (
    (weatherCodePlusThree >= 51 && weatherCodePlusThree <= 67) ||
    (weatherCodePlusThree >= 80 && weatherCodePlusThree <= 82)
  ) {
    weatherPlusThree = "/images/rain.png";
  } else if (weatherCodePlusThree >= 71 && weatherCodePlusThree <= 77) {
    weatherPlusThree = "/images/snow.png";
  }

  let weatherPlusFour = "Unknown";
  const weatherCodePlusFour = dailyData.weather_code[4];
  if (weatherCodePlusFour === 0) {
    weatherPlusFour = "/images/sun.png";
  } else if (weatherCodePlusFour >= 1 && weatherCodePlusFour <= 3) {
    weatherPlusFour = "/images/overcast.png";
  } else if (
    (weatherCodePlusFour >= 51 && weatherCodePlusFour <= 67) ||
    (weatherCodePlusFour >= 80 && weatherCodePlusFour <= 82)
  ) {
    weatherPlusFour = "/images/rain.png";
  } else if (weatherCodePlusFour >= 71 && weatherCodePlusFour <= 77) {
    weatherPlusFour = "/images/snow.png";
  }

  let weatherPlusFive = "Unknown";
  const weatherCodePlusFive = dailyData.weather_code[5];
  if (weatherCodePlusFive === 0) {
    weatherPlusFive = "/images/sun.png";
  } else if (weatherCodePlusFive >= 1 && weatherCodePlusFive <= 3) {
    weatherPlusFive = "/images/overcast.png";
  } else if (
    (weatherCodePlusFive >= 51 && weatherCodePlusFive <= 67) ||
    (weatherCodePlusFive >= 80 && weatherCodePlusFive <= 82)
  ) {
    weatherPlusFive = "/images/rain.png";
  } else if (weatherCodePlusFive >= 71 && weatherCodePlusFive <= 77) {
    weatherPlusFive = "/images/snow.png";
  }

  let weatherPlusSix = "Unknown";
  const weatherCodePlusSix = dailyData.weather_code[6];
  if (weatherCodePlusSix === 0) {
    weatherPlusSix = "/images/sun.png";
  } else if (weatherCodePlusSix >= 1 && weatherCodePlusSix <= 3) {
    weatherPlusSix = "/images/overcast.png";
  } else if (
    (weatherCodePlusSix >= 51 && weatherCodePlusSix <= 67) ||
    (weatherCodePlusSix >= 80 && weatherCodePlusSix <= 82)
  ) {
    weatherPlusSix = "/images/rain.png";
  } else if (weatherCodePlusSix >= 71 && weatherCodePlusSix <= 77) {
    weatherPlusSix = "/images/snow.png";
  }

  const weatherTodayImage = document.getElementById("weatherToday");
  weatherTodayImage.src = weather;

  const weatherTodayElement = weather;
  const weatherPlusOneElement = weatherPlusOne;
  const weatherPlusTwoElement = weatherPlusTwo;
  const weatherPlusThreeElement = weatherPlusThree;
  const weatherPlusFourElement = weatherPlusFour;
  const weatherPlusFiveElement = weatherPlusFive;
  const weatherPlusSixElement = weatherPlusSix;

  const now = dayjs();
  const currentHour = now.hour();

  const indexOfCurrentHour = hourlyData.time.indexOf(`TodayT${currentHour}:00`);
  const indexOfCurrentHourTomorrow = hourlyData.time.indexOf(
    `Today+1T${currentHour}:00`
  );

  const timeElement = document.getElementById("timeNow");
  timeElement.innerHTML = `${currentHour}:00`;
  const tempElement = document.getElementById("tempNow");
  tempElement.innerHTML =
    hourlyData.temperature_2m[indexOfCurrentHour] + "&deg;C";
  const windElement = document.getElementById("windNow");
  windElement.innerHTML =
    hourlyData.wind_speed_10m[indexOfCurrentHour] + "KM/H";

  const todayMaxTempSummary = dailyData.temperature_2m_max[0] + "&deg;C";

  const todayMaxTempSummaryPlusOne = dailyData.temperature_2m_max[1] + "&deg;C";

  const todayMaxTempSummaryPlusTwo = dailyData.temperature_2m_max[2] + "&deg;C";

  const todayMaxTempSummaryPlusThree =
    dailyData.temperature_2m_max[3] + "&deg;C";

  const todayMaxTempSummaryPlusFour =
    dailyData.temperature_2m_max[4] + "&deg;C";

  const todayMaxTempSummaryPlusFive =
    dailyData.temperature_2m_max[5] + "&deg;C";

  const todayMaxTempSummaryPlusSix = dailyData.temperature_2m_max[6] + "&deg;C";

  const todayMaxWindSummary = dailyData.wind_speed_10m_max[0] + "KM/H";

  const todayMaxWindSummaryPlusOne = dailyData.wind_speed_10m_max[1] + "KM/H";

  const todayMaxWindSummaryPlusTwo = dailyData.wind_speed_10m_max[2] + "KM/H";

  const todayMaxWindSummaryPlusThree = dailyData.wind_speed_10m_max[3] + "KM/H";

  const todayMaxWindSummaryPlusFour = dailyData.wind_speed_10m_max[4] + "KM/H";

  const todayMaxWindSummaryPlusFive = dailyData.wind_speed_10m_max[5] + "KM/H";

  const todayMaxWindSummaryPlusSix = dailyData.wind_speed_10m_max[6] + "KM/H";

  const dayElement = document.getElementById("day");
  dayElement.innerHTML = now.format("dddd");

  const dayElementCard = now.format("dddd");

  const dayPlusOneCard = now.add(1, "day").format("dddd");

  const dayPlusTwoCard = now.add(2, "day").format("dddd");

  const dayPlusThreeCard = now.add(3, "day").format("dddd");

  const dayPlusFourCard = now.add(4, "day").format("dddd");

  const dayPlusFiveCard = now.add(5, "day").format("dddd");

  const dayPlusSixCard = now.add(6, "day").format("dddd");

  const todayMaxTemp = dailyData.temperature_2m_max[0] + "&deg;C";

  const todayMaxWind = dailyData.wind_speed_10m_max[0] + "KM/H";

  const forecastCards = [
    {
      text: "Max Temp",
      data: todayMaxTemp,
      image: "/images/temperature.png",
    },
    {
      text: "Max Wind",
      data: todayMaxWind,
      image: "/images/windspeed.png",
    },
  ];

  const main = document.querySelector("main");
  forecastCards.forEach(
    (forecastCard) => (main.innerHTML += createForecastCardItem(forecastCard))
  );

  const summaryForecastCards = [
    {
      day: dayElementCard,
      image: weatherTodayElement,
      temp: todayMaxTempSummary,
      wind: todayMaxWindSummary,
    },
    {
      day: dayPlusOneCard,
      image: weatherPlusOneElement,
      temp: todayMaxTempSummaryPlusOne,
      wind: todayMaxWindSummaryPlusOne,
    },
    {
      day: dayPlusTwoCard,
      image: weatherPlusTwoElement,
      temp: todayMaxTempSummaryPlusTwo,
      wind: todayMaxWindSummaryPlusTwo,
    },
    {
      day: dayPlusThreeCard,
      image: weatherPlusThreeElement,
      temp: todayMaxTempSummaryPlusThree,
      wind: todayMaxWindSummaryPlusThree,
    },
    {
      day: dayPlusFourCard,
      image: weatherPlusFourElement,
      temp: todayMaxTempSummaryPlusFour,
      wind: todayMaxWindSummaryPlusFour,
    },
    {
      day: dayPlusFiveCard,
      image: weatherPlusFiveElement,
      temp: todayMaxTempSummaryPlusFive,
      wind: todayMaxWindSummaryPlusFive,
    },
    {
      day: dayPlusSixCard,
      image: weatherPlusSixElement,
      temp: todayMaxTempSummaryPlusSix,
      wind: todayMaxWindSummaryPlusSix,
    },
  ];

  const footer = document.querySelector("footer");
  summaryForecastCards.forEach(
    (summaryForecastCard) =>
      (footer.innerHTML += createSummaryForecastCardItem(summaryForecastCard))
  );
});
