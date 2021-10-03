// set variables to call information from the html
let button = document.querySelector(".buttonSubmit")
let inputCity = document.querySelector(".inputCity")
let cityName = document.querySelector(".cityName")
let temp = document.querySelector("temp")
let humidity = document.querySelector("humidity")
let windSpeed = document.querySelector("windSpeed")
let indexUV = document.querySelector("indexUV")

// todays date will come from moment.js
let date = moment().format("ddd MMM Do, YYYY, hh:mm:ss")
$("#todayDate").text(todayDate)
console.log(date)

// event listener to occur when the submit button is pressed
button.addEventListener("click",function(){
    // made my API key into a variable
    let key = "d9e0fa417e5a25b1237d9e6b7fcee2e0"
    let url = "http://api.openweathermap.org/data/2.5/forecast?q="+inputCity.value+"&appid="+key
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => {
        // setting variables in the function to call on the API variables needed
        let city = data["name"]
        let tempVal = data["main"]["temp"]
        let humidityVal  = data["main"]["humidity"]
        let windSpeedVal = data["wing"]["speed"]
        // let indexUVVal = data[""]
        cityName.innerHTML = city
        temp.innerHTML = tempVal
        humidity.innerHTML = humidityVal
        windSpeed.innerHTML = windSpeedVal
    })

    .catch (err => alert("Wrong city!"))
})