set variables to call information from the html
let button = document.querySelector(".buttonSubmit")
let inputCity = document.querySelector(".inputCity")
let cityName = document.querySelector(".cityName")
let temp = document.querySelector("temp")
let humidity = document.querySelector("humidity")
let windSpeed = document.querySelector("windSpeed")
let indexUV = document.querySelector("indexUV")


button.addEventListener("click",function(){
    //Aapi.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    // my API key is d9e0fa417e5a25b1237d9e6b7fcee2e0
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+inputCity.value+"&appid=d9e0fa417e5a25b1237d9e6b7fcee2e0")
    .then(response => response.json())
    .then(data => console.log(data))
    .then( data => {
        let city = data['cityName']
        let tempVal = data["main"]["temp"]
        let
    })
    cityName

    .catch (err => alert("Wrong city!"))
})