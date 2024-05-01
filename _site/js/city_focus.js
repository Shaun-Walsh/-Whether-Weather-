document.addEventListener("DOMContentLoaded", () => {
            const urlParams = new URLSearchParams(window.location.search);
            const currentCity = urlParams.get('city');
            const dailyData = weatherData[currentCity + "_daily"].daily
            const hourlyData = weatherData[currentCity + "_hourly"].hourly
            currentCity.innerHTML = document.getElementById("currentCity");

            let weather = 'Unknown'
            const weatherCode = dailyData.weather_code[0];
            if(weatherCode === 0){
                weather = "/images/sun.png";
            } else if(weatherCode >= 1 && weatherCode <= 3){
                weather = "/images/overcast.png";
            } else if(weatherCode >= 51 && weatherCode <= 67){
                weather = "/images/rain.png";
            }

            let weatherPlusOne = 'Unknown'
            const weatherCodePlusOne = dailyData.weather_code[1];
            if(weatherCodePlusOne === 0){
                weather = "/images/sun.png";
            } else if(weatherCodePlusOne >= 1 && weatherCodePlusOne <= 3){
                weatherPlusOne = "/images/overcast.png";
            } else if(weatherCodePlusOne >= 51 && weatherCodePlusOne <= 67){
                weatherPlusOne = "/images/rain.png";
            }

            const weatherCodeTodayElement = document.getElementById("weatherCodeToday");
            const weatherTodayElement = document.getElementById("weatherToday");
            const weatherTodaySummary = document.getElementById("weatherTodaySummary");
            const weatherCodeTomorrowElement = document.getElementById("weatherCodeTomorrow");
            const weatherPlusOneElement = document.getElementById("weatherPlusOne");

            weatherCodeTodayElement.innerHTML = weatherCode;
            weatherTodayElement.src = weather;
            weatherTodaySummary.src = weather;
            weatherPlusOneElement.src = weatherPlusOne;
            weatherCodeTomorrowElement.innerHTML = dailyData.weather_code[1];

            const now = dayjs(); 
            const currentHour = now.hour();

            const indexOfCurrentHour = hourlyData.time.indexOf(`TodayT${currentHour}:00`);
            const indexOfCurrentHourTomorrow = hourlyData.time.indexOf(`Today+1T${currentHour}:00`);
            console.log(`The index of the current hour is : ${indexOfCurrentHour}`);
            console.log(`The index of the current hour tomorrow is : ${indexOfCurrentHourTomorrow}`);

            const timeElement = document.getElementById("timeNow");
            const tempElement = document.getElementById("tempNow");
            const windElement = document.getElementById("windNow");

            const tempTomorrowElement = document.getElementById("tempTomorrow");
            const dayAfterTomorrowElement = document.getElementById("dayAfterTomorrow");

            const dayElement = document.getElementById("day");
            

            timeElement.innerHTML = `${currentHour}:00`;
            dayElement.innerHTML = now.format("dddd");
            
            dayAfterTomorrowElement.innerHTML = now.add(2, 'day').format("dddd");

            tempElement.innerHTML = hourlyData.temperature_2m[indexOfCurrentHour];
            tempTomorrowElement.innerHTML = hourlyData.temperature_2m[indexOfCurrentHourTomorrow];

            windElement.innerHTML = hourlyData.wind_speed_10m[indexOfCurrentHour];

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