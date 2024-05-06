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
                            <article class="card-content has-background-warning">
                            <p class="card-header-title is-size-4 is-centered">
                            ${forecastCard.data}
                            </p>
                            </article>
                        </section>
                    </div>`
}

                    const createSummaryForecastCardItem = (summaryForecastCard) => {
                        return `
                    <div class="column is-1 ml-6 mt-6 has-background-warning">
                        <section class="card has-background-warning">
                        <header class="card-header">
                            <p class="card-header-title is-size-4 is-centered">
                            ${summaryForecastCard.day}
                            </p>
                            </header>
                        <div class="card-image">
                            <figure class="image has-background-warning">
                            <img src= "${summaryForecastCard.image}" alt="Weather">
                            </figure>
                        </div>
                        <article class="card-content has-background-warning">
                        <p class="card-header-title is-size-4 is-centered">
                            ${summaryForecastCard.temp}
                            </p>
                            <p class="card-header-title is-size-4 is-centered">
                            ${summaryForecastCard.wind}
                            </p>
                         </article>
                         </section>
                        </div>`
}