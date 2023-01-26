var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let getWeather = function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log(lat, lon);
        const url = "https://api.openweathermap.org/data/2.5/weather?lat=" +
            lat +
            "&lon=" +
            lon +
            "&units=metric&appid=46079d357e9a2c65ff03fab0ab51f02c";
        const renderLocalList = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url);
            const data = yield response.json();
            console.log(data);
            let cityNow = data.name;
            let tempNow = data.main.temp;
            let clouds = data.clouds.all;
            // console.log(cityNow);
            // console.log("Current temperature: " + tempNow);
            const h1City = document.createElement("h1");
            h1City.innerHTML = cityNow;
            const ul = document.createElement("ul");
            const coordNow = document.createElement("li");
            coordNow.innerHTML = "geolocation : " + lat + ", " + lon;
            const liTemp = document.createElement("li");
            liTemp.innerHTML = "current temperature: " + tempNow + " ºC";
            const liClouds = document.createElement("li");
            liClouds.innerHTML = "clouds : " + clouds + "%";
            document.body.appendChild(h1City);
            ul.appendChild(coordNow);
            ul.appendChild(liTemp);
            ul.appendChild(liClouds);
            document.body.appendChild(ul);
        });
        renderLocalList();
    });
};
getWeather();
const getUSD = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch("https://api.nbp.pl/api/exchangerates/rates/A/USD");
    const data = yield response.json();
    let currency = data.code;
    let currVal = data.rates[0].mid;
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerHTML = "Kurs " + currency + " : " + currVal + " PLN";
    ul.appendChild(li);
    document.body.appendChild(ul);
    console.log(data);
});
getUSD();
const getEUR = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch("https://api.nbp.pl/api/exchangerates/rates/A/EUR");
    const data = yield response.json();
    let currency = data.code;
    let currVal = data.rates[0].mid;
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerHTML = "Kurs " + currency + " : " + currVal + " PLN";
    ul.appendChild(li);
    document.body.appendChild(ul);
    console.log(data);
});
getEUR();
const getGBR = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch("https://api.nbp.pl/api/exchangerates/rates/A/GBP");
    const data = yield response.json();
    let currency = data.code;
    let currVal = data.rates[0].mid;
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerHTML = "Kurs " + currency + " : " + currVal + " PLN";
    ul.appendChild(li);
    document.body.appendChild(ul);
    console.log(data);
});
getGBR();
