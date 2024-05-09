
document.addEventListener("DOMContentLoaded", () => {
            const currentCityIndex = "amsterdam";
            const dailyDataIndex = weatherData[currentCityIndex + "_daily"].daily
            const amsterdamDailyMaxTemp = dailyDataIndex.temperature_2m_max[0] + "&deg;C";
            const amsterdamDailyMaxWind = dailyDataIndex.wind_speed_10m_max[0] + "KM/H";
            let weatherAmsterdam = 'Unknown'
            const weatherCodeAmsterdam = dailyDataIndex.weather_code[0];
            if(weatherCodeAmsterdam === 0){
                weatherAmsterdam = "/images/sun.png";
            } else if(weatherCodeAmsterdam >= 1 && weatherCodeAmsterdam <= 3){
                weatherAmsterdam = "/images/overcast.png";
            } else if(weatherCodeAmsterdam >= 51 && weatherCodeAmsterdam <= 67 ||weatherCodeAmsterdam >=80 && weatherCodeAmsterdam <=82){
                weatherAmsterdam = "/images/rain.png";
            } else if(weatherCodeAmsterdam >= 71  && weatherCodeAmsterdam <= 77){
                weatherAmsterdam = "/images/snow.png";Cork   }
            const weatherTodayElementAmsterdam = weatherAmsterdam;

            const currentCityIndexBerlin = "berlin";
            const dailyDataIndexBerlin = weatherData[currentCityIndexBerlin + "_daily"].daily
            const berlinDailyMaxTemp = dailyDataIndexBerlin.temperature_2m_max[0] + "&deg;C";
            const berlinDailyMaxWind = dailyDataIndexBerlin.wind_speed_10m_max[0] + "KM/H";
            let weatherBerlin = 'Unknown'
            const weatherCodeBerlin = dailyDataIndexBerlin.weather_code[0];
            if(weatherCodeBerlin === 0){
                weatherBerlin = "/images/sun.png";
            } else if(weatherCodeBerlin >= 1 && weatherCodeBerlin <= 3){
                weatherBerlin = "/images/overcast.png";
            } else if(weatherCodeBerlin >= 51 && weatherCodeBerlin <= 67 ||weatherCodeBerlin >=80 && weatherCodeBerlin <=82){
                weatherBerlin = "/images/rain.png";
            } else if(weatherCodeBerlin >= 71  && weatherCodeBerlin <= 77){
                weatherBerlin = "/images/snow.png";
            }
            const weatherTodayElementBerlin = weatherBerlin;

            const currentCityIndexCopenhagen = "copenhagen";
            const dailyDataIndexCopenhagen = weatherData[currentCityIndexCopenhagen + "_daily"].daily
            const copenhagenDailyMaxTemp = dailyDataIndexCopenhagen.temperature_2m_max[0] + "&deg;C";
            const copenhagenDailyMaxWind = dailyDataIndexCopenhagen.wind_speed_10m_max[0] + "KM/H";
            let weatherCopenhagen = 'Unknown'
            const weatherCodeCopenhagen = dailyDataIndexCopenhagen.weather_code[0];
            if(weatherCodeCopenhagen === 0){
                weatherCopenhagen = "/images/sun.png";
            } else if(weatherCodeCopenhagen >= 1 && weatherCodeCopenhagen <= 3){
                weatherCopenhagen = "/images/overcast.png";
            } else if(weatherCodeCopenhagen >= 51 && weatherCodeCopenhagen <= 67 ||weatherCodeCopenhagen >=80 && weatherCodeCopenhagen <=82){
                weatherCopenhagen = "/images/rain.png";
            } else if(weatherCodeCopenhagen >= 71  && weatherCodeCopenhagen <= 77){
                weatherCopenhagen = "/images/snow.png";
            }
            const weatherTodayElementCopenhagen = weatherCopenhagen;

            const currentCityIndexCork = "cork";
            const dailyDataIndexCork = weatherData[currentCityIndexCork + "_daily"].daily
            const corkDailyMaxTemp = dailyDataIndexCork.temperature_2m_max[0] + "&deg;C";
            const corkDailyMaxWind = dailyDataIndexCork.wind_speed_10m_max[0] + "KM/H";
            let weatherCork = 'Unknown'
            const weatherCodeCork = dailyDataIndexCork.weather_code[0];
            if(weatherCodeCork === 0){
                weatherCork = "/images/sun.png";
            } else if(weatherCodeCork >= 1 && weatherCodeCork <= 3){
                weatherCork = "/images/overcast.png";
            } else if(weatherCodeCork >= 51 && weatherCodeCork <= 67 ||weatherCodeCork >=80 && weatherCodeCork <=82){
                weatherCork = "/images/rain.png";
            } else if(weatherCodeCork >= 71  && weatherCodeCork <= 77){
                weatherCork = "/images/snow.png";
            }
            const weatherTodayElementCork = weatherCork;

            const currentCityIndexNewYork = "new_york";
            const dailyDataIndexNewYork = weatherData[currentCityIndexNewYork + "_daily"].daily
            const newYorkDailyMaxTemp = dailyDataIndexNewYork.temperature_2m_max[0] + "&deg;C";
            const newYorkDailyMaxWind = dailyDataIndexNewYork.wind_speed_10m_max[0] + "KM/H";
            let weatherNewYork = 'Unknown'
            const weatherCodeNewYork = dailyDataIndexNewYork.weather_code[0];
            if(weatherCodeNewYork === 0){
                weatherNewYork = "/images/sun.png";
            } else if(weatherCodeNewYork >= 1 && weatherCodeNewYork <= 3){
                weatherNewYork = "/images/overcast.png";
            } else if(weatherCodeNewYork >= 51 && weatherCodeNewYork <= 67 ||weatherCodeNewYork >=80 && weatherCodeNewYork <=82){
                weatherNewYork = "/images/rain.png";
            } else if(weatherCodeNewYork >= 71  && weatherCodeNewYork <= 77){
                weatherNewYork = "/images/snow.png";
            }
            const weatherTodayElementNewYork = weatherNewYork;

            const currentCityIndexParis = "paris";
            const dailyDataIndexParis = weatherData[currentCityIndexParis + "_daily"].daily
            const parisDailyMaxTemp = dailyDataIndexParis.temperature_2m_max[0] + "&deg;C";
            const parisDailyMaxWind = dailyDataIndexParis.wind_speed_10m_max[0] + "KM/H";
            let weatherParis = 'Unknown'
            const weatherCodeParis = dailyDataIndexParis.weather_code[0];
            if(weatherCodeParis === 0){
                weatherParis ="/images/sun.png";
            } else if(weatherCodeParis >= 1 && weatherCodeParis <= 3){
                weatherParis = "/images/overcast.png";
            } else if(weatherCodeParis >= 51 && weatherCodeParis <= 67 ||weatherCodeParis >=80 && weatherCodeParis <=82){
                weatherParis = "/images/rain.png";
            } else if(weatheCodeParis >= 71  && weatherCodeParis <= 77){
                weatherParis = "/images/snow.png";
            }
            const weatherTodayElementParis = weatherParis;

            const currentCityIndexSanFrancisco = "san_francisco";
            const dailyDataIndexSanFrancisco = weatherData[currentCityIndexSanFrancisco + "_daily"].daily
            const sanFranciscoDailyMaxTemp = dailyDataIndexSanFrancisco.temperature_2m_max[0] + "&deg;C";
            const sanFranciscoDailyMaxWind = dailyDataIndexSanFrancisco.wind_speed_10m_max[0] + "KM/H";
            let weatherSanFrancisco = 'Unknown'
            const weatherCodeSanFrancisco = dailyDataIndexSanFrancisco.weather_code[0];
            if(weatherCodeSanFrancisco === 0){
                weatherSanFrancisco ="/images/sun.png";
            } else if(weatherCodeSanFrancisco >= 1 && weatherCodeSanFrancisco <= 3){
                weatherSanFrancisco = "/images/overcast.png";
            } else if(weatherCodeSanFrancisco >= 51 && weatherCodeSanFrancisco <= 67 ||weatherCodeSanFrancisco >=80 && weatherCodeSanFrancisco <=82){
                weatherSanFrancisco = "/images/rain.png";
            } else if(weatheCodeSanFrancisco >= 71  && weatherCodeSanFrancisco <= 77){
                weatherSanFrancisco = "/images/snow.png";
            }
            const weatherTodayElementSanFrancisco = weatherSanFrancisco;

            const currentCityIndexTromso = "tromso";
            const dailyDataIndexTromso = weatherData[currentCityIndexTromso + "_daily"].daily
            const tromsoDailyMaxTemp = dailyDataIndexTromso.temperature_2m_max[0] + "&deg;C";
            const tromsoDailyMaxWind = dailyDataIndexTromso.wind_speed_10m_max[0] + "KM/H";
            let weatherTromso = 'Unknown'
            const weatherCodeTromso = dailyDataIndexTromso.weather_code[0];
            if(weatherCodeTromso === 0){
                weatherTromso ="/images/sun.png";
            } else if(weatherCodeTromso >= 1 && weatherCodeTromso <= 3){
                weatherTromso = "/images/overcast.png";
            } else if(weatherCodeTromso >= 51 && weatherCodeTromso <= 67 ||weatherCodeTromso >=80 && weatherCodeTromso <=82){
                weatherTromso = "/images/rain.png";
            } else if(weatherCodeTromso >= 71  && weatherCodeTromso <= 77){
                weatherTromso = "/images/snow.png";
            }
            const weatherTodayElementTromso = weatherTromso;

            const currentCityIndexWaterford = "waterford";
            const dailyDataIndexWaterford = weatherData[currentCityIndexWaterford + "_daily"].daily
            const waterfordDailyMaxTemp = dailyDataIndexWaterford.temperature_2m_max[0] + "&deg;C";
            const waterfordDailyMaxWind = dailyDataIndexWaterford.wind_speed_10m_max[0] + "KM/H";
            let weatherWaterford = 'Unknown'
            const weatherCodeWaterford = dailyDataIndexWaterford.weather_code[0];
            if(weatherCodeWaterford === 0){
                weatherWaterford ="/images/sun.png";
            } else if(weatherCodeWaterford >= 1 && weatherCodeWaterford <= 3){
                weatherWaterford = "/images/overcast.png";
            } else if(weatherCodeWaterford >= 51 && weatherCodeWaterford <= 67 ||weatherCodeWaterford >=80 && weatherCodeWaterford <=82){
                weatherWaterford = "/images/rain.png";
            } else if(weatherCodeWaterford >= 71  && weatherCodeWaterford <= 77){
                weatherWaterford = "/images/snow.png";
            }
            const weatherTodayElementWaterford = weatherWaterford;

const dashboardForecastCards = [
    {
      day: "Today",
      city:  "Amsterdam",
      image: weatherTodayElementAmsterdam,
      temp: amsterdamDailyMaxTemp,
      wind: amsterdamDailyMaxWind,
    },
    {day: "Today",
    city: "Berlin",
    image: weatherTodayElementBerlin,
     temp: berlinDailyMaxTemp,
      wind: berlinDailyMaxWind,
    },
    {day: "Today",
    city:  "Copenhagen",
    image: weatherTodayElementCopenhagen,
    temp: copenhagenDailyMaxTemp,
    wind: copenhagenDailyMaxWind,
    },
    {day: "Today",
    city: "Cork",
    image: weatherTodayElementCork,
    temp: corkDailyMaxTemp,
    wind: corkDailyMaxWind,
    },
    { day: "Today",
    city: "New York",
    image: weatherTodayElementNewYork,
    temp: newYorkDailyMaxTemp,
    wind: newYorkDailyMaxWind,
    },
    { day: "Today",
    city: "Paris",
    image: weatherTodayElementParis, 
    temp: parisDailyMaxTemp,
    wind: parisDailyMaxWind,
    },
    { day: "Today",
    city: "San Francisco",
    image: weatherTodayElementSanFrancisco, 
    temp: sanFranciscoDailyMaxTemp,
    wind: sanFranciscoDailyMaxWind,
    },
    { day: "Today",
    city: "Tromso",
    image: weatherTodayElementTromso, 
    temp: tromsoDailyMaxTemp,
    wind: tromsoDailyMaxWind,
    },
    { day: "Today",
    city: "Waterford",
    image: weatherTodayElementWaterford, 
    temp: waterfordDailyMaxTemp,
    wind: waterfordDailyMaxWind,
    },

  ];


        const main = document.querySelector('main');
        dashboardForecastCards.forEach((dashboardForecastCard) => main.innerHTML += createDashbordForecastCardItem(dashboardForecastCard));

    
        const dataStoreDiv = document.querySelector('dataStore');
        dataStore.list().forEach((titleForecastCard) => { 
        dataStoreDiv.innerHTML = dataStoreDiv.innerHTML + createTitleForecastCardItem(titleForecastCard);
        });
    


    });