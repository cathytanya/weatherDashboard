// set variables to call information from the html
let submitbtn = document.querySelector(".buttonSubmit")
let inputCity = document.querySelector(".inputCity")
let cityName = document.querySelector(".cityName")
let temp = document.querySelector(".temp")
let icon = document.querySelector(".icon")
let humidity = document.querySelector(".humidity")
let windSpeed = document.querySelector(".windSpeed")
let indexUV = document.querySelector(".indexUV")

function renderCurrentDay(cityName,data){
    console.log(data)
    // rendering the necessary information to variables
    let name = cityName
    // to convert the tempereature from kelvins(K) to Celsius(C) and round to the hundreth
    let tempK = data.current.temp
    let tempC = Math.round(100*(tempK-273.15))/100;
    let humid = data.current.humidity
    //convert the wind speed to km/h
    let speedW = Math.round((data.current.wind_speed*3.6))
    let uv = data.current.uvi
    let con = data.current.icon
    // console logging the data to verify its correct
    console.log(name)
    console.log(tempC)
    console.log(humid)
    console.log(speedW)
    console.log(uv)
    console.log(con)
    // using .textContent/.innerHTML for the rendered information to appear on the application
    cityName.textContent=" City: "+name;
    temp.textContent =" Temperature: "+tempK+"°C";
    humidity.textContent =" Humidity: "+humid+" %";
    windSpeed.textContent =" Wind Speed: "+speedW+" km/h";
    indexUV.textContent =" UV index: "+uv+" ";
    if (uv >= 0 && uv <= 2){
        indexUV.setAttribute("style","background: green; border-style: solid; width:fit-content; color:white")
    }else if (uv >= 3 && uv <= 5){
        indexUV.setAttribute("style","background: yellow; border-style: solid; width:fit-content")
    }else if (uv >= 6 && uv <= 7){
        indexUV.setAttribute("style","background: orange; border-style: solid; width:fit-content")
    }else{
        indexUV.setAttribute("style","background: red; border-style: solid; width:fit-content; color:white")
    }
    icon.innerHTML = con;

    




    // for the icon use innerHTML because since its not actual text
    // everything else would use textcontent
}

function renderFiveDay(){

    // createelement (method)
    // class called five-day
        // have an empty container that will allow you to append elements which will be added to this function
        // use only append
    


}
// this function is used to call the renderFiveDay() and renderCurrentDay()
// the console.log is ensuring that the data from weather function is passing through
function renderItems(cityName,data){
    renderCurrentDay(cityName,data)
    renderFiveDay(cityName,data)
    console.log(cityName,data)
}
// this function will find the longitude and latitude
function corrfind(){
    let key = "720340e154314c77dd80d328e3567077"
    // this element is holding the api link for the 
    let weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q="+inputCity.value+"&appid="+key
    fetch(weatherURL) 
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            // confirming the location of the coordinates in the api data
            let lat = data.city.coord.lat
            let lon = data.city.coord.lon
            console.log(lat)
            console.log(lon)
            weather(data)
        });
}
// this function pulls the latitude and longitude from the corrfind
// used console.log to confirm that the information is passing through this function   
function weather(data){
    let key = "720340e154314c77dd80d328e3567077"
    console.log(data)
    console.log(data.city.coord.lat)
    console.log(data.city.coord.lon)
    //find the latitude coordinates
    let latVal = data.city.coord.lat
    //find the longitude coordinate 
    let lonVal = data.city.coord.lon
    // the link to the will be used in the fetch to grab its data
    let infoURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+latVal+"&lon="+lonVal+"&exclude={part}&appid="+key
    fetch(infoURL)
        .then(function(results){
            return results.json()      
        })
        .then(function(data){
            renderItems(cityName,data)
        })
    // Appending the data
    let cityName = data.city.name 
    // verified that this is where the city's name is located in the API
    console.log(cityName)
}
        // let infoURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude={part}&appid=d9e0fa417e5a25b1237d9e6b7fcee2e0"


        submitbtn.addEventListener("click",corrfind);
