const apiKey = "ad218973a8aebf31139c4eb790e6c5a7"
const weather_box = document.querySelector(".weather-box")
const location_1 = document.querySelector(".weather-box  .weather-box-header .location")
const main_status = document.querySelector(".weather-box .weather-box-body .status")
const max_and_min = document.querySelector(".weather-box .weather-box-body .max-and-min")
const degree = document.querySelector(".weather-box .weather-box-body .degree")
const search_button = document.querySelector(".search-box button")
const weather_today = document.querySelector(".details-box .weather-today")
const feels_like = document.querySelector(".details-box .feels-like")
const feels_like_temperature = document.querySelector(".details-box .feels-like-temperature")
const high_low = document.querySelector(".high-low")
const humidity = document.querySelector(".humidity")
const pressure = document.querySelector(".pressure")
const visibility = document.querySelector(".visibility")
const details_box = document.querySelector(".details-box")
const details_left_box = document.querySelector(".details-left-box")

// const image = document.querySelector(".weather-box .weather-box-body .image")

function set_labels_to_empty(){
    location_1.innerHTML = "No Results"
    main_status.innerHTML = ''
    degree.innerHTML = ""
    max_and_min.innerHTML = ""
    document.getElementById("image").src = ""
    weather_box.style.height = "0px"
    weather_today.innerHTML = ""
    feels_like.innerHTML = ""
    feels_like_temperature.innerHTML = ""
    high_low.innerHTML = ""
    humidity.innerHTML = ""
    pressure.innerHTML = ""
    visibility.innerHTML = ""
    details_box.style.height = "0px"
    details_left_box.style.height = "0px"
    details_box.style.padding = "0px"
    details_left_box.style.padding = "0px"
}

search_button.addEventListener("click", () => {
    const city = document.querySelector(".search-box input").value
    if(city == ""){
        set_labels_to_empty()
    } else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if(data.cod == "404"){
                    set_labels_to_empty()
                    return
                }
                // console.log(data)
                // console.log(data["name"])
                location_1.innerHTML = `${data["name"]}, ${data["sys"]["country"]}`
                degree.innerHTML = Math.round(data["main"]["temp"] * 9/5 + 32)+"°"
                main_status.innerHTML = data["weather"][0]["main"]
                max_and_min.innerHTML = "Day " + Math.round(data["main"]["temp_max"] * 9/5 + 32) + ", Night " + Math.round(data["main"]["temp_min"] * 9/5 + 32)
                document.getElementById("image").src = `imgs/${data["weather"][0]["icon"]}.png`
                weather_box.style.height = "275px"
                weather_today.innerHTML = `Weather Today in ${data["name"]}, ${data["sys"]["country"]}`
                feels_like.innerHTML = `Feels Like`
                feels_like_temperature.innerHTML = `${Math.round(data["main"]["feels_like"]*9/5+32)}°`
                high_low.innerHTML = `<i class="fa-solid fa-temperature-low"></i>High/Low &nbsp &nbsp &nbsp ${Math.round(data["main"]["temp_max"] * 9/5 + 32)}°/${ Math.round(data["main"]["temp_min"] * 9/5 + 32)}°`
                humidity.innerHTML = `<i class="fa-solid fa-droplet"></i>Humidity &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${data["main"]["humidity"]}%`
                pressure.innerHTML = '<i class="fa-solid fa-arrow-down-up-across-line"></i>Pressure &nbsp &nbsp &nbsp ' + (data["main"]["pressure"]*0.0295301).toFixed(2) + " in"
                visibility.innerHTML = `<i class="fa-solid fa-eye-slash"></i>Visibility &nbsp &nbsp &nbsp &nbsp &nbsp ` + data["visibility"]/1000 + " mi"
                details_box.style.height = "350px"
                details_left_box.style.height = "170px"
                details_box.style.paddingTop = "5px"
                details_left_box.style.paddingTop = "15px"
            });
    }
})
// Data fiven by the api
// {
//     coord: { lon: -121.6555, lat: 36.6777 },
//     weather: [
//       {
//         id: 803,
//         main: 'Clouds',
//         description: 'broken clouds',
//         icon: '04d'
//       }
//     ],
//     base: 'stations',
//     main: {
//       temp: 16.38,
//       feels_like: 15.93,
//       temp_min: 13.23,
//       temp_max: 23.45,
//       pressure: 1019,
//       humidity: 71
//     },
//     visibility: 10000,
//     wind: { speed: 5.14, deg: 300 },
//     clouds: { all: 75 },
//     dt: 1684627608,
//     sys: {
//       type: 1,
//       id: 5885,
//       country: 'US',
//       sunrise: 1684587350,
//       sunset: 1684638644
//     },
//     timezone: -25200,
//     id: 5391295,
//     name: 'Salinas',
//     cod: 200
//   }