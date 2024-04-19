export default function showWeather(data){

    const body = document.querySelector("body");

    const content = document.createElement("div");
    content.classList.add("content");
    content.id = "content";

    const favi = document.createElement("link");
    favi.rel = 'icon';
    document.head.appendChild(favi);
    favi.href = data.condition.icon;
    
    const details = document.createElement("div");
    details.classList.add("details");
    details.innerHTML = 
        `<h2> ${data.name}, ${data.country}</h2>
        <br>
        <h3>Local Time: ${data.localTime}</h3>
        <br>
        <h3>Time zone: ${data.timeZone}</h3>`;

    const feels = document.createElement("div");
    feels.classList.add("feels");
    feels.innerHTML = 
        `<h2>Feels like 🌬️</h2><br>
        <h1>${data.feelsLike} c°<h1>`;

    const humidity = document.createElement("div");
    humidity.classList.add("humidity");
    humidity.innerHTML = 
    `<h2> Humidity 💧</h2><br>
    <h1> ${data.humidity}%<h1>`;

    const cloud = document.createElement("div");
    cloud.classList.add("cloud");
    cloud.innerHTML = 
    `<h2>Cloud ☁️<h2><br>
    <h1>${data.cloud} clouds</h1>`;

    const wind = document.createElement("div");
    wind.classList.add("wind");
    wind.innerHTML = 
    `<h2>Wind 💨</h2><br>
    <h1>${data.wind} km/h</h1>
    <h1>at ${data.wind_dir} 🧭`;

    const uvIndex = document.createElement("div");
    uvIndex.classList.add("uvIndex");
    uvIndex.innerHTML = 
    `<h2>UV Index ☀️</h2><br>
    <h2>${data.uvIndex} mW/m<sup>2</sup></h2>`;

    const Precipitation = document.createElement("div");
    Precipitation.classList.add("Precipitation");
    Precipitation.innerHTML = 
    `<h2>Precipitation💧</h2><br>
    <h1> ${data.precip} mm</h1>
    <h3>in the last 24h</h3>`;


    content.appendChild(details);
    content.appendChild(feels);
    content.appendChild(humidity);
    content.appendChild(cloud);
    content.appendChild(wind);
    content.appendChild(uvIndex);
    content.appendChild(Precipitation);

    body.append(content);
}