document.addEventListener("DOMContentLoaded", () => {
            const urlParams = new URLSearchParams(window.location.search);
            const currentCity = urlParams.get('city');
            const dailyData = weatherData[currentCity + "_daily"].daily
            const hourlyData = weatherData[currentCity + "_hourly"].hourly
            const currentCityElement = document.getElementById("currentCity");
            currentCityElement.innerHTML = currentCity.toUpperCase();

            let weather = 'Unknown'
            const weatherCode = dailyData.weather_code[0];
            if(weatherCode === 0){
                weather = "/images/sun.png";
            } else if(weatherCode >= 1 && weatherCode <= 3){
                weather = "/images/overcast.png";
            } else if(weatherCode >= 51 && weatherCode <= 67){
                weather = "/images/rain.png";
            } else if(weatherCode === 80){
                weather = "/images/snow.png";
            }

            let weatherPlusOne = 'Unknown'
            const weatherCodePlusOne = dailyData.weather_code[1];
            if(weatherCodePlusOne === 0){
                weatherPlusOne = "/images/sun.png";
            } else if(weatherCodePlusOne >= 1 && weatherCodePlusOne <= 3){
                weatherPlusOne = "/images/overcast.png";
            } else if(weatherCodePlusOne >= 51 && weatherCodePlusOne <= 67){
                weatherPlusOne = "/images/rain.png";
            } else if(weatherCodePlusOne === 80){
                weather = "/images/snow.png";
            }

            let weatherPlusTwo = 'Unknown'
            const weatherCodePlusTwo = dailyData.weather_code[2];
            if(weatherCodePlusTwo === 0){
                weatherPlusTwo = "/images/sun.png";
            } else if(weatherCodePlusTwo >= 1 && weatherCodePlusTwo <= 3){
                weatherPlusOne = "/images/overcast.png";
            } else if(weatherCodePlusTwo >= 51 && weatherCodePlusTwo <= 67){
                weatherPlusTwo = "/images/rain.png";
            } else if(weatherCodePlusTwo === 80){
                weatherPlusTwo = "/images/snow.png";
            }

            let weatherPlusThree = 'Unknown'
            const weatherCodePlusThree = dailyData.weather_code[3];
            if(weatherCodePlusThree === 0){
                weatherPlusThree = "/images/sun.png";
            } else if(weatherCodePlusThree >= 1 && weatherCodePlusThree <= 3){
                weatherPlusThree = "/images/overcast.png";
            } else if(weatherCodePlusThree >= 51 && weatherCodePlusThree <= 67){
                weatherPlusThree = "/images/rain.png";
            } else if(weatherCodePlusThree === 80){
                weatherPlusThree = "/images/snow.png";
            }

            let weatherPlusFour = 'Unknown'
            const weatherCodePlusFour = dailyData.weather_code[4];
            if(weatherCodePlusFour === 0){
                weatherPlusFour = "/images/sun.png";
            } else if(weatherCodePlusFour >= 1 && weatherCodePlusFour <= 3){
                weatherPlusFour = "/images/overcast.png";
            } else if(weatherCodePlusFour >= 51 && weatherCodePlusFour <= 67){
                weatherPlusFour = "/images/rain.png";
            } else if(weatherCodePlusFour === 80){
                weatherPlusFour = "/images/snow.png";
            }

            let weatherPlusFive = 'Unknown'
            const weatherCodePlusFive = dailyData.weather_code[5];
            if(weatherCodePlusFive === 0){
                weatherPlusFive = "/images/sun.png";
            } else if(weatherCodePlusFive >= 1 && weatherCodePlusFive <= 3){
                weatherPlusFive = "/images/overcast.png";
            } else if(weatherCodePlusFive >= 51 && weatherCodePlusFive <= 67){
                weatherPlusFive = "/images/rain.png";
            } else if(weatherCodePlusFive === 80){
                weatherPlusFive = "/images/snow.png";
            }

            let weatherPlusSix = 'Unknown'
            const weatherCodePlusSix = dailyData.weather_code[6];
            if(weatherCodePlusSix === 0){
                weatherPlusSix = "/images/sun.png";
            } else if(weatherCodePlusSix >= 1 && weatherCodePlusSix <= 3){
                weatherPlusSix = "/images/overcast.png";
            } else if(weatherCodePlusSix >= 51 && weatherCodePlusSix <= 67){
                weatherPlusSix = "/images/rain.png";
            } else if(weatherCodePlusSix === 80){
                weatherPlusSix = "/images/snow.png";
            }

            const weatherCodeTodayElement = document.getElementById("weatherCodeToday");
            weatherCodeTodayElement.innerHTML = weatherCode;
            const weatherTodayElement = document.getElementById("weatherToday");
            weatherTodayElement.src = weather;
            const weatherTodaySummary = document.getElementById("weatherTodaySummary");
            weatherTodaySummary.src = weather;
            const weatherCodeTomorrowElement = document.getElementById("weatherCodeTomorrow");
            weatherCodeTomorrowElement.innerHTML = dailyData.weather_code[1];
            const weatherPlusOneElement = document.getElementById("weatherPlusOne");
            weatherPlusOneElement.src = weatherPlusOne;
            const weatherPlusTwoElement = document.getElementById("weatherPlusTwo");
            weatherPlusTwoElement.src = weatherPlusTwo;
            const weatherPlusThreeElement = document.getElementById("weatherPlusThree");
            weatherPlusThreeElement.src = weatherPlusThree;
            const weatherPlusFourElement = document.getElementById("weatherPlusFour");
            weatherPlusFourElement.src = weatherPlusFour;
            const weatherPlusFiveElement = document.getElementById("weatherPlusFive");
            weatherPlusFiveElement.src = weatherPlusFive;
            const weatherPlusSixElement = document.getElementById("weatherPlusSix");
            weatherPlusSixElement.src = weatherPlusSix;
           
            
            
            
            
            
            

            const now = dayjs(); 
            const currentHour = now.hour();

            const indexOfCurrentHour = hourlyData.time.indexOf(`TodayT${currentHour}:00`);
            const indexOfCurrentHourTomorrow = hourlyData.time.indexOf(`Today+1T${currentHour}:00`);

            const timeElement = document.getElementById("timeNow");
            timeElement.innerHTML = `${currentHour}:00`;

            const tempElement = document.getElementById("tempNow");
            tempElement.innerHTML = hourlyData.temperature_2m[indexOfCurrentHour];

            const todayMaxTempSummary = dailyData.temperature_2m_max[0];
            const maxTempElementSummary = document.getElementById("maxTempSummary");
            maxTempElementSummary.innerHTML = todayMaxTempSummary;

            const todayMaxTempSummaryPlusOne = dailyData.temperature_2m_max[1];
            const maxTempElementSummaryPlusOne = document.getElementById("maxTempSummaryPlusOne");
            maxTempElementSummaryPlusOne.innerHTML = todayMaxTempSummaryPlusOne;

            const todayMaxTempSummaryPlusTwo = dailyData.temperature_2m_max[2];
            const maxTempElementSummaryPlusTwo = document.getElementById("maxTempSummaryPlusTwo");
            maxTempElementSummaryPlusTwo.innerHTML = todayMaxTempSummaryPlusTwo;

            const todayMaxTempSummaryPlusThree = dailyData.temperature_2m_max[3];
            const maxTempElementSummaryPlusThree = document.getElementById("maxTempSummaryPlusThree");
            maxTempElementSummaryPlusThree.innerHTML = todayMaxTempSummaryPlusThree;

            const todayMaxTempSummaryPlusFour = dailyData.temperature_2m_max[4];
            const maxTempElementSummaryPlusFour = document.getElementById("maxTempSummaryPlusFour");
            maxTempElementSummaryPlusFour.innerHTML = todayMaxTempSummaryPlusFour;

            const todayMaxTempSummaryPlusFive = dailyData.temperature_2m_max[5];
            const maxTempElementSummaryPlusFive = document.getElementById("maxTempSummaryPlusFive");
            maxTempElementSummaryPlusFive.innerHTML = todayMaxTempSummaryPlusFive;

            const todayMaxTempSummaryPlusSix = dailyData.temperature_2m_max[6];
            const maxTempElementSummaryPlusSix = document.getElementById("maxTempSummaryPlusSix");
            maxTempElementSummaryPlusSix.innerHTML = todayMaxTempSummaryPlusSix;


            const todayMaxWindSummary = dailyData.wind_speed_10m_max[0];
            const maxWindElementSummary = document.getElementById("maxWindSummary");
            maxWindElementSummary.innerHTML = todayMaxWindSummary;

            const todayMaxWindSummaryPlusOne = dailyData.wind_speed_10m_max[1];
            const maxWindElementSummaryPlusOne = document.getElementById("maxWindSummaryPlusOne");
            maxWindElementSummaryPlusOne.innerHTML = todayMaxWindSummaryPlusOne;

            const todayMaxWindSummaryPlusTwo = dailyData.wind_speed_10m_max[2];
            const maxWindElementSummaryPlusTwo = document.getElementById("maxWindSummaryPlusTwo");
            maxWindElementSummaryPlusTwo.innerHTML = todayMaxWindSummaryPlusTwo;

            const todayMaxWindSummaryPlusThree = dailyData.wind_speed_10m_max[3];
            const maxWindElementSummaryPlusThree = document.getElementById("maxWindSummaryPlusThree");
            maxWindElementSummaryPlusThree.innerHTML = todayMaxWindSummaryPlusThree;

            const todayMaxWindSummaryPlusFour = dailyData.wind_speed_10m_max[4];
            const maxWindElementSummaryPlusFour = document.getElementById("maxWindSummaryPlusFour");
            maxWindElementSummaryPlusFour.innerHTML = todayMaxWindSummaryPlusFour;

            const todayMaxWindSummaryPlusFive = dailyData.wind_speed_10m_max[5];
            const maxWindElementSummaryPlusFive = document.getElementById("maxWindSummaryPlusFive");
            maxWindElementSummaryPlusFive.innerHTML = todayMaxWindSummaryPlusFive;

            const todayMaxWindSummaryPlusSix = dailyData.wind_speed_10m_max[6];
            const maxWindElementSummaryPlusSix = document.getElementById("maxWindSummaryPlusSix");
            maxWindElementSummaryPlusSix.innerHTML = todayMaxWindSummaryPlusSix;


            const windElement = document.getElementById("windNow");
            windElement.innerHTML = hourlyData.wind_speed_10m[indexOfCurrentHour];

            const tempTomorrowElement = document.getElementById("tempTomorrow");
            tempTomorrowElement.innerHTML = hourlyData.temperature_2m[indexOfCurrentHourTomorrow];



            const dayAfterTomorrowElement = document.getElementById("dayAfterTomorrow");
            dayAfterTomorrowElement.innerHTML = now.add(2, 'day').format("dddd");

            const dayElement = document.getElementById("day");
            dayElement.innerHTML = now.format("dddd");
            
            

            
            const todayMaxTemp = dailyData.temperature_2m_max[0];
            const maxTempElement = document.getElementById("maxTemp");
            maxTempElement.innerHTML = todayMaxTemp;

            const todayMaxWind = dailyData.wind_speed_10m_max[0];
            const maxWindElement = document.getElementById("maxWind");
            maxWindElement.innerHTML = todayMaxWind;



            const dayElementSummary = document.getElementById("daySummary");
            dayElementSummary.innerHTML = now.format("dddd");

            const tomorrowElement = document.getElementById("tomorrow");
            tomorrowElement.innerHTML = now.add(1, 'day').format("dddd");

            const tomorrowPlusOneElement = document.getElementById("tomorrowPlusOne");
            tomorrowPlusOneElement.innerHTML = now.add(2, 'day').format("dddd");

            const tomorrowPlusTwoElement = document.getElementById("tomorrowPlusTwo");
            tomorrowPlusTwoElement.innerHTML = now.add(3, 'day').format("dddd");

            const tomorrowPlusThreeElement = document.getElementById("tomorrowPlusThree");
            tomorrowPlusThreeElement.innerHTML = now.add(4, 'day').format("dddd");

            const tomorrowPlusFourElement = document.getElementById("tomorrowPlusFour");
            tomorrowPlusFourElement.innerHTML = now.add(5, 'day').format("dddd");

            const tomorrowPlusFiveElement = document.getElementById("tomorrowPlusFive");
            tomorrowPlusFiveElement.innerHTML = now.add(6, 'day').format("dddd");
   });