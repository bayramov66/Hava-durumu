const url = "https://api.openweathermap.org/data/2.5/";
const key = "98ae31648bb5166c77e4887e33fb4245";

const setQuery = (e) => {
  if (e.keyCode == "13") getResults(serchBar.value);
};

const getResults = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}*c`;

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;
};

const serchBar = document.getElementById("searchBar");
serchBar.addEventListener("keypress", setQuery);
