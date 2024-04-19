import Header from "./header";
import displayWeather from "./getWeather";
import showWeather from "./UI";

export default function createWeatherApp(){
    Header();
    displayWeather();
    showWeather();
}