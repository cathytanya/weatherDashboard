// set variables to call information from the html
let submitbtn = document.querySelector(".buttonSubmit")
let inputCity = document.querySelector(".inputCity")
// these variables are used in current day section of the application
let city = document.querySelector(".cityName")
let temp = document.querySelector(".temp")
let icon = document.querySelector(".icon")
let descjs = document.querySelector("#description")
let humidity = document.querySelector(".humidity")
let windSpeed = document.querySelector(".windSpeed")
let indexUV = document.querySelector(".indexUV")

function renderCurrentDay(cityName,data){
    console.log(data)
    let today = moment()
    $("#day").text(today.format("MMM Do, YYYY"));
    // rendering the necessary information to variables
    let name = cityName
    // to convert the tempereature from kelvins(K) to Celsius(C) and round to the hundreth
    let tempK = data.current.temp
    let tempC = Math.round(100*(tempK-273.15))/100;
    let humid = data.current.humidity
    //convert the wind speed to km/h
    let speedW = Math.round((data.current.wind_speed*3.6))
    let uv = data.current.uvi
    let con = data.current.weather[0].icon
    let desc = data.current.weather[0].description
    // console logging the data to verify its correct
    console.log(name)
    console.log(tempC)
    console.log(humid)
    console.log(speedW)
    console.log(uv)
    console.log(con)
    // using .textContent/.innerHTML for the rendered information to appear on the application
    city.textContent=" City: "+ name;
    temp.textContent ="Temperature: "+ tempC +" °C";
    description.textContent = desc;
    humidity.textContent ="Humidity: "+ humid +" %";
    windSpeed.textContent ="Wind Speed: "+ speedW +" km/h";
    indexUV.textContent ="UV index: "+ uv +" ";
    // this if statement changes the colour of the UX index
    if (uv >= 0 || uv <= 2){
        indexUV.setAttribute("style","background: green; border-style: solid; width:fit-content; color:white;text-align: center;")
    }else if (uv >= 3 || uv <= 5){
        indexUV.setAttribute("style","background: yellow; border-style: solid; width:fit-content;text-align: center;")
    }else if (uv >= 6 || uv <= 7){
        indexUV.setAttribute("style","background: orange; border-style: solid; width:fit-content;text-align: center;")
    }else{
        indexUV.setAttribute("style","background: red; border-style: solid; width:fit-content; color:whitetext-align: center;")
    }
    icon.innerHTML = "<img src=http://openweathermap.org/img/wn/"+con+".png>";
}

function renderFiveDay(data){
    // this will make produce the date for each of the future days
    let date = moment();
    $("#day0").text(date.add(1, 'days').format("MMM Do, YYYY"));
    $("#day1").text(date.add(1, 'days').format("MMM Do, YYYY"));
    $("#day2").text(date.add(1, 'days').format("MMM Do, YYYY"));
    $("#day3").text(date.add(1, 'days').format("MMM Do, YYYY"));
    console.log(data)
    // rendering the day 0 on the application
    let temp0C = Math.round(100*((data.daily[0].temp.day)-273.15))/100;
    let desc0 = data.daily[0].weather[0].description
    let icon0image = data.daily[0].weather[0].icon
    let humid0 = data.daily[0].humidity
    let windspeed0 = Math.round((data.daily[0].wind_speed*3.6))
    temp0.textContent ="Temperature: "+ temp0C +" °C";
    icon0.innerHTML = "<img src=http://openweathermap.org/img/wn/"+icon0image+".png>";
    description0.textContent = desc0;
    humidity0.textContent ="Humidity: "+ humid0 +" %";
    windSpeed0.textContent ="Wind Speed: "+ windspeed0 +" km/h";

    // rendering the day 1 on the application
    let temp1C = Math.round(100*((data.daily[0].temp.day)-273.15))/100;
    let desc1 = data.daily[1].weather[0].description
    let icon1image = data.daily[1].weather[0].icon
    let humid1 = data.daily[1].humidity
    let windspeed1 = Math.round((data.daily[1].wind_speed*3.6))
    temp1.textContent ="Temperature: "+ temp1C +" °C";
    icon1.innerHTML = "<img src=http://openweathermap.org/img/wn/"+icon1image+".png>";
    description1.textContent = desc1;
    humidity1.textContent ="Humidity: "+ humid1 +" %";
    windSpeed1.textContent ="Wind Speed: "+ windspeed1 +" km/h";

    // rendering the day 2 on the application
    let temp2C = Math.round(100*((data.daily[0].temp.day)-273.15))/100;
    let desc2 = data.daily[2].weather[0].description
    let icon2image = data.daily[2].weather[0].icon
    let humid2 = data.daily[2].humidity
    let windspeed2 = Math.round((data.daily[2].wind_speed*3.6))
    temp2.textContent ="Temperature: "+ temp2C +" °C";
    icon2.innerHTML = "<img src=http://openweathermap.org/img/wn/"+icon2image+".png>";
    description2.textContent = desc2;
    humidity2.textContent ="Humidity: "+ humid2 +" %";
    windSpeed2.textContent ="Wind Speed: "+ windspeed2 +" km/h";

    // rendering the day 3 on the application
    let temp3C = Math.round(100*((data.daily[0].temp.day)-273.15))/100;
    let desc3 = data.daily[3].weather[0].description
    let icon3image = data.daily[3].weather[0].icon
    let humid3 = data.daily[3].humidity
    let windspeed3 = Math.round((data.daily[3].wind_speed*3.6))
    temp3.textContent ="Temperature: "+ temp3C +" °C";
    icon3.innerHTML = "<img src=http://openweathermap.org/img/wn/"+icon3image+".png>";
    description3.textContent = desc3;
    humidity3.textContent ="Humidity: "+ humid3 +" %";
    windSpeed3.textContent ="Wind Speed: "+ windspeed3 +" km/h";
}
// this function is used to call the renderFiveDay() and renderCurrentDay()
// the console.log is ensuring that the data from weather function is passing through
function renderItems(cityName,data){
    renderCurrentDay(cityName,data)
    renderFiveDay(data)
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
        submitbtn.addEventListener("click",corrfind);
