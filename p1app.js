const apiKey = "6edb5b57485f07d3b09134f010628427";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";
const searchBox = document.querySelector(".Search input");
const searchBtn = document.querySelector(".Search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch (apiUrl +city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="clouds.png";
        } else if (data.weather[0].main == "Clear"){
            weatherIcon.src="clear.png";
        } else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src="drizzle.png";
        } else if (data.weather[0].main == "Mist"){
            weatherIcon.src="mist.png";
        } else if (data.weather[0].main == "Rain"){
            weatherIcon.src="rain.png";
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
    };
    }
   


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
