document.addEventListener("DOMContentLoaded", () => {
           
            const currentCity = 'berlin';
            const dailyData = weatherData[currentCity + "_daily"].daily
            const hourlyData = weatherData[currentCity + "_hourly"].hourly

            let weather = 'Unknown'
            const weatherCode = dailyData.weather_code[0];
            if(weatherCode === 0){
                weather = "/images/sun.png"; // or weatherImage = /images/weatherIcons/clearsky.png
            } else if(weatherCode >= 1 && weatherCode <= 3){
                weather = "/images/overcast.png"; // or weatherImage = /images/weatherIcons/overcast.png
            }

            

            const weatherCodeTodayElement = document.getElementById("weatherCodeToday");
            const weatherTodayElement = document.getElementById("weatherToday");
            const weatherCodeTomorrowElement = document.getElementById("weatherCodeTomorrow");

            weatherCodeTodayElement.innerHTML = weatherCode;
            weatherTodayElement.innerHTML = weather;
            weatherCodeTomorrowElement.innerHTML = dailyData.weather_code[1];

            const now = dayjs(); // create a new date object that represents this time
            const currentHour = now.hour(); // 0 - 23 as a number

            // we need the index of the current hour in the time array
            // we then use that index to query the termperature_2m data
            const indexOfCurrentHour = hourlyData.time.indexOf(`TodayT${currentHour}:00`);
            const indexOfCurrentHourTomorrow = hourlyData.time.indexOf(`Today+1T${currentHour}:00`);
            console.log(`The index of the current hour is : ${indexOfCurrentHour}`);
            console.log(`The index of the current hour tomorrow is : ${indexOfCurrentHourTomorrow}`);

            const timeElement = document.getElementById("timeNow");
            const tempElement = document.getElementById("tempNow");
            const windElement = document.getElementById("windNow")

            const tempTomorrowElement = document.getElementById("tempTomorrow");
            const dayAfterTomorrowElement = document.getElementById("dayAfterTomorrow");

            const dayElement = document.getElementById("day");
            const tomorrowElement = document.getElementById("tomorrow");

            timeElement.innerHTML = `${currentHour}:00`;
            dayElement.innerHTML = now.format("dddd");
            tomorrowElement.innerHTML = now.add(1, 'day').format("dddd");
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
        });