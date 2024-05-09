const createForecastCardItem = (forecastCard) => {
    return `
    <div class="column is-3 ml-6 mt-6 has-background-warning">
                        <section class="card has-background-warning">
                        <header class="card-header">
                            <p class="card-header-title is-size-4 is-centered">
                            ${forecastCard.text}
                            </p>
                        </header>
                        <div class="card-image">
                         <figure class="image">
                         <img src="${forecastCard.image}" alt="Image">
                        </figure>
                        </div>
                        <div>
                            <article class="card-content has-background-warning">
                            <p class="card-header-title is-size-4 is-centered">
                            ${forecastCard.data}
                            </p>
                            </article>
                        </section>
                        </div>
                    </div>`
}

                    const createSummaryForecastCardItem = (summaryForecastCard) => {
                        return `
                        <div class="card column  ml-4 mt-4 mr-4 mb-4 has-background-warning">
                        <div class="card-image">
                          <figure class="image is-4by3">
                            <img src=
                              "${summaryForecastCard.image}" alt="Weather">
                          </figure>
                        </div>
                        <div class="card-content">
                            <div class="media-content">
                              <p class="title is-4"> ${summaryForecastCard.day}</p>
                              <p class="subtitle is-6">${summaryForecastCard.temp}</p>
                              <p class="subtitle is-6">${summaryForecastCard.wind}</p>
                            </div>
                        </div>
                      </div>`
                       
}
const createDashbordForecastCardItem = (dashboardForecastCard) => {
    return `
    <div class= "column is-3">
    <a href="/city-focus/?city=${dashboardForecastCard.city.toLowerCase().replace(/\s/g, "_")}">
    <div class="card column  ml-6 mt-6 mr-6 mb-6 has-background-warning">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src=
          "${dashboardForecastCard.image}" alt="Weather">
      </figure>
    </div>
    <div class="card-content">
        <div class="media-content">
          <p class="title is-4 has-text-centered"> ${dashboardForecastCard.day}</p>
          <p class="title is-4 has-text-centered"> ${dashboardForecastCard.city}</p>
          <p class="subtitle is-6">${dashboardForecastCard.temp}</p>
          <p class="subtitle is-6">${dashboardForecastCard.wind}</p></a>
        </div>
    </div>
  </div>
  </div>`
   
}

const createTitleForecastCardItem = (titleForecastCard) => {
  return `
  <div class="column is-6 is-centered">
  <section>
    <div class="box has-text-centered  mt-6 has-background-info ">
     <p class="title is-1 is-family-code has-text-white"> ${titleForecastCard.text}</p>
    </div>
  </section>
 </div>`
 
}