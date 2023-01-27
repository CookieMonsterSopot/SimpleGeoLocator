let getWeather = function () {
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
    const renderLocalList = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      const h1City = document.createElement("h1");
      h1City.innerHTML = data.name;
      document.body.appendChild(h1City);

      const ul = document.createElement("ul");
      const coordNow = document.createElement("li");
      coordNow.innerHTML = "geolocation : " + lat + ", " + lon;
      const liTemp = document.createElement("li");
      liTemp.innerHTML = "current temperature: " + data.main.temp + " ºC";
      const liClouds = document.createElement("li");
      liClouds.innerHTML = "clouds : " + data.clouds.all + "%";
      const liHum = document.createElement("li");
      liHum.innerHTML = "humidity : " + data.main.humidity + "%";
      const liWind = document.createElement("li");
      liWind.innerHTML = "wind speed : " + data.wind.speed + " m/s";
      ul.appendChild(coordNow);
      ul.appendChild(liTemp);
      ul.appendChild(liClouds);
      ul.appendChild(liHum);
      ul.appendChild(liWind);
      document.body.appendChild(ul);
    };
    renderLocalList();
  });
};

getWeather();

const getUSD = async () => {
  const response = await fetch(
    "https://api.nbp.pl/api/exchangerates/rates/A/USD"
  );
  const data = await response.json();
  let currency = data.code;
  let currVal = data.rates[0].mid;
  const usd = document.createElement("h3");
  usd.innerHTML = "Kurs " + currency + " : " + currVal + " PLN";
  document.body.appendChild(usd);
  console.log(data);
};
setTimeout(getUSD, 2000);

const getEUR = async () => {
  const response = await fetch(
    "https://api.nbp.pl/api/exchangerates/rates/A/EUR"
  );
  const data = await response.json();
  let currency = data.code;
  let currVal = data.rates[0].mid;
  const eur = document.createElement("h3");
  eur.innerHTML = "Kurs " + currency + " : " + currVal + " PLN";
  document.body.appendChild(eur);
  console.log(data);
};
setTimeout(getEUR, 3000);

const getGBP = async () => {
  const response = await fetch(
    "https://api.nbp.pl/api/exchangerates/rates/A/GBP"
  );
  const data = await response.json();
  let currency = data.code;
  let currVal = data.rates[0].mid;
  const gbp = document.createElement("h3");
  gbp.innerHTML = "Kurs " + currency + " : " + currVal + " PLN";
  document.body.appendChild(gbp);
  console.log(data);
};
setTimeout(getGBP, 4000);

function reload() {
  document.location.reload();
}

setTimeout(reload, 30000);
