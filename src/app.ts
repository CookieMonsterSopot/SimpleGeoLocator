let getWeather = function () {
  if (navigator.geolocation) {
    const options = {
      enableHighAccuracy: true,
    };
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(lat, lon);
      const url =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=metric&appid=46079d357e9a2c65ff03fab0ab51f02c";

      const renderTodoList = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        let cityNow = data.name;

        let tempNow = data.main.temp;
        console.log(cityNow);
        console.log("Current temperature: " + tempNow);

        const ul = document.createElement("ul");
        const liCity = document.createElement("li");
        const h1City = document.createElement("h1");

        h1City.innerHTML = cityNow;

        const liTemp = document.createElement("li");
        liTemp.textContent = "Current temperature: " + tempNow + " ºC";
        liCity.appendChild(h1City);
        ul.appendChild(liCity);
        ul.appendChild(liTemp);

        document.body.appendChild(ul);
      };
      renderTodoList();
    });
  } else {
    window.alert("Could not get location");
  }
};

getWeather();
