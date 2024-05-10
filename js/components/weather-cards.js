//passing in a forecastCard and dynamically inserting the details from the array, and then this html is injected from main.js
const createForecastCardItem = (forecastCard) => {
  return `
    <div class="column is-3 ml-6 mt-6 has-background-info">
                        <section class="card has-background-info">
                        <header class="card-header">
                            <p class="card-header-title is-size-4 is-centered has-text-white">
                            ${forecastCard.text}
                            </p>
                        </header>
                        <div class="card-image">
                         <figure class="image">
                         <img src="${forecastCard.image}" alt="Image">
                        </figure>
                        </div>
                        <div>
                            <article class="card-content has-background-info">
                            <p class="card-header-title is-size-4 is-centered has-text-white">
                            ${forecastCard.data}
                            </p>
                            </article>
                        </section>
                        </div>
                    </div>`;
};
//passing in a summaryForecastCard and dynamically inserting the details from the array, and then this html is injected from main.js
const createSummaryForecastCardItem = (summaryForecastCard) => {
  return `
                        <div class="card column  ml-4 mt-4 mr-4 mb-4 has-background-info">
                        <div class="card-image">
                          <figure class="image is-4by3">
                            <img src=
                              "${summaryForecastCard.image}" alt="Weather">
                          </figure>
                        </div>
                        <div class="card-content">
                            <div class="media-content">
                              <p class="title is-4 has-text-white"> ${summaryForecastCard.day}</p>
                              <p class="subtitle is-6 has-text-white">${summaryForecastCard.temp}</p>
                              <p class="subtitle is-6 has-text-white">${summaryForecastCard.wind}</p>
                            </div>
                        </div>
                      </div>`;
};
//passing in a dashboardForecastCard and dynamically inserting the details from the array, and then this html is injected from index.js.
//This code differs as I used a function t convert to lowerspace, remove the whitespace from the ctiy name and replace it with an underscore to access the data. 
const createDashbordForecastCardItem = (dashboardForecastCard) => {
  return `
    <div class= "column is-3">
    <a href="/city-focus/?city=${dashboardForecastCard.city
      .toLowerCase()
      .replace(/\s/g, "_")}">
    <div class="card column  ml-6 mt-6 mr-6 mb-6 has-background-info">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src=
          "${dashboardForecastCard.image}" alt="Weather">
      </figure>
    </div>
    <div class="card-content">
        <div class="media-content">
          <p class="title is-4 has-text-centered has-text-white"> ${
            dashboardForecastCard.day
          }</p>
          <p class="title is-4 has-text-centered has-text-white"> ${
            dashboardForecastCard.city
          }</p>
          <p class="subtitle is-6 has-text-white">${
            dashboardForecastCard.temp
          }</p>
          <p class="subtitle is-6 has-text-white">${
            dashboardForecastCard.wind
          }</p></a>
        </div>
    </div>
  </div>
  </div>`;
};

//this code was not used, I was goingto create a simpler datastore that did not directly use const declared in a different js file hower I ran out of tiem to complete this.
// const createTitleForecastCardItem = (titleForecastCard) => {
//   return `
//   <div class="column is-6 is-centered">
//   <section>
//     <div class="box has-text-centered  mt-6 has-background-info ">
//      <p class="title is-1 is-family-code has-text-white"> ${titleForecastCard.text}</p>
//     </div>
//   </section>
//  </div>`;
// };
