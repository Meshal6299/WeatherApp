import getWeatherData from "./fetch";
import showWeather from "./UI";
import clearDOM from "./clearDOM";

export default async function displayWeather(){
    
    let data = await getWeatherData("Dubai");
    console.log(data);
    showWeather(data);


    const btn = document.querySelector("button");
    btn.addEventListener("click", async function(){
        const location = document.getElementById("location");
        data = await getWeatherData(location.value);
        console.log(data);
        clearDOM();
        showWeather(data);
    });

}