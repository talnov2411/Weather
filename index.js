const apiKey="b0894a9ed8daa9a127efa9b40e29809c";
const   apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");
// alert("hi");
async function checkWeather(city) {
    // console.log("yaha aaya");
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();
    // console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp )+ "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main == "Clouds"){
        // alert("here");
        weatherIcon.src="./Img/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="./Img/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="./Img/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="./Img/mist.png"
    }
     else if(data.weather[0].main == "Rain"){
        weatherIcon.src="./Img/rain.png"
    }
     else if(data.weather[0].main == "Snow"){
        weatherIcon.src="./Img/snow.png"
    }
    
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

    }
    
}
searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);
});
document.addEventListener("keydown",function(event){
   // alert("Key was pressed!!");
   if(event.key=="Enter"){
    // console.log("chal raha hai");
checkWeather(searchBox.value);
   }
})
