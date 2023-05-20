let apiKey = "ad218973a8aebf31139c4eb790e6c5a7"
let city = "Salinas"
let placeHolder = document.getElementById("location")
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // console.log(data["name"])
        placeHolder.innerHTML = data["name"]
    });