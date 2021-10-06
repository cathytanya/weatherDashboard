// set variables to call information from the html
let button = document.querySelector(".buttonSubmit")
let inputCity = document.querySelector(".inputCity")
let cityName = document.querySelector(".cityName")
let temp = document.querySelector(".temp")
let icon = document.querySelector(".icon")
let humidity = document.querySelector(".humidity")
let windSpeed = document.querySelector(".windSpeed")
let indexUV = document.querySelector(".indexUV")

function renderCurrentDay(){
    

}

function renderFiveDay(){

}

function weather(){
    let weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q="+inputCity.value+"&appid=d9e0fa417e5a25b1237d9e6b7fcee2e0"

    fetch(weatherURL) 
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            // confirming the location of the coordinates in the api data
            console.log(data.city.coord.lat)
            console.log(data.city.coord.lon)

            // renderCurrentDay(cityName,)
            // renderFiveDay()


                


        })
   
}
button.addEventListener("click",weather);
// event listener to occur when the submit button is pressed
// button.addEventListener("click",function(){
    // made my API key into a variable
    // fetch("http://api.openweathermap.org/data/2.5/forecast?q="+inputCity.value+"&appid=d9e0fa417e5a25b1237d9e6b7fcee2e0")
    // .then(response => response.json())
    // .then(data => console.log(data))
    // This will be grabbing the data from the api
    // .then(data => {
    //     // setting variables in the function to call on the API variables needed
        // let city = data["city"]["name"]
        // let tempVal = data["main"]["temp"]
        // let descVal = data["weather"]["description"]
        // let iconVal = data["weather"]["icon"]
        // let humidityVal  = data["main"]["humidity"]
        // let windSpeedVal = data["wing"]["speed"]
        // let indexUVVal = data[""]
        // cityName.innerHTML = city
        // temp.innerHTML = tempVal
        // desc.innerHTML = descVal
        // icon.innerHTML = iconVal
        // humidity.innerHTML = humidityVal
        // windSpeed.innerHTML = windSpeedVal
//     })

//     .catch (err => alert("Wrong city!"))
// })