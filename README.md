# -Whether-Weather-

A web app showing todays and upcoming weather.

## Getting Started

### Install Eleventy

```bash
npm install -g @11ty/eleventy
```

### Run Eleventy

```bash
eleventy --serve
```

Now navigate to [http://localhost:8080](http://localhost:8080) to see your site.

Hot reloading is enabled, so any changes you make to your files will be reflected in the browser.

## Usage
Upon loading the site you will be taken to dashboard. This dashbard diplays a list of cities for which we currently have data for. Please click on any of these cities to be taken to a more detailed city focus view which dispalys the current weather when the browser was loaded, the overall forecst for the day, and a brief summary for the next week. This project automatically deploys on netlify from git so any push changes will be reflected live.

## Examples
Code for determining the weather image shown.
```javascript
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
```
## Docs
### Weather data
https://open-meteo.com/en/docs
### Nunjucks
https://mozilla.github.io/nunjucks/templating.html
### Bulma
https://bulma.io/documentation/
### Netlify
https://docs.netlify.com/
### 11ty
https://www.11ty.dev/docs/local-installation/

## Contributions
All suggestions for improvements and refinements are greatly accepted.

## Technologies

* [Eleventy](https://www.11ty.dev/)
* [Bulma](https://bulma.io/)
* [Netlify](https://www.netlify.com/)
* [Icons](https://www.flaticon.com)

## Contact Information
20005831@mail.wit.ie

## Acknowledgemnts/References
* <a href="https://www.flaticon.com/free-icons/overcast" title="overcast icons">Overcast icons created by Ubaid El-Ahyar Alyafizi - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by DinosoftLabs - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/rain" title="rain icons">Rain icons created by tulpahn - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/hot" title="hot icons">Hot icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/wind" title="wind icons">Wind icons created by Freepik - Flaticon</a>

 
 

