let apiKey = "ad218973a8aebf31139c4eb790e6c5a7"
let city = "New York"
const location1 = document.querySelector(".weather-box  .weather-box-header .location")
const main_status = document.querySelector(".weather-box .weather-box-body .status")
const degree = document.querySelector(".weather-box .weather-box-body .degree")
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // console.log(data["name"])
        location1.innerHTML = data["name"]
        main_status.innerHTML = data["weather"][0]["main"]
        degree.innerHTML = Math.round(data["main"]["temp"] * 9/5 + 32)
    });