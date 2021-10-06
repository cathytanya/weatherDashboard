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
    // for the icon use innerHTML because since its not actual text
    // everything else would use textcontent
}

function renderFiveDay(){
    // createelement (method)
    // class called five-day
        // have an empty container that will allow you to append elements which will be added to this function
        // use only append
    


}

function renderItems(cityName,data){
    renderCurrentDay(cityName)
    renderFiveDay()
    console.log(cityName,data)
}


function corrfind(){
    
    let weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q="+inputCity.value+"&appid=d9e0fa417e5a25b1237d9e6b7fcee2e0"
    fetch(weatherURL) 
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            // confirming the location of the coordinates in the api data
            // let lat = data.city.coord.lat
            // let lon = data.city.coord.lon
            // console.log(data.city.coord.lat)
            // console.log(data.city.coord.lon)
            weather(data)
           
        });
}
    
function weather(data){
        console.log(data)
        console.log(data.city.coord.lat)
        console.log(data.city.coord.lon)
        let latVal = data.city.coord.lat
        let lonVal = data.city.coord.lon

        let infoURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+latVal+"&lon="+lonVal+"&exclude={part}&appid=d9e0fa417e5a25b1237d9e6b7fcee2e0"
        fetch(infoURL)
            .then(function(results){
                return results.json()      
            })

            .then(function(data){
               renderItems(cityName,data)
           })


        

    }


        // let infoURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude={part}&appid=d9e0fa417e5a25b1237d9e6b7fcee2e0"
        

        //     // renderCurrentDay(cityName,)
        //     // renderFiveDa

button.addEventListener("click",corrfind);
