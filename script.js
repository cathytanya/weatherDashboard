let button = document.querySelector(".buttonSubmit")
let inputCity = document.querySelector(".inputCity")
let cityName = document.querySelector(".cityName")
let temp = document.querySelector("temp")
let info = document.querySelector("info")

button.addEventListener("click",function(){
    //Aapi.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    // my API key is d9e0fa417e5a25b1237d9e6b7fcee2e0
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+inputCity.value+"&appid=d9e0fa417e5a25b1237d9e6b7fcee2e0")
    .then(response => response.json())
    .then(data => console.log(data))

    .catch (err => alert("Wrong city!"))
})