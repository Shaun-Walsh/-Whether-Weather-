const dataStore = {
  data: [
    {
      text: "Max Temp",
      //data: todayMaxTemp,
      image: "/images/temperature.png",
    },
    {
      text: "Max Wind",
      // data: todayMaxWind,
      image: "/images/windspeed.png",
    },
  ],
  list() {
    return this.data;
  },
};
