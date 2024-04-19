export default async function getWeatherData(location) {

        const apiKey = "282bd816207d4e40bcf190307241704";

        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`; 

        try{
                const data = await fetch(url);
                
                if(!data.ok){
                        throw new Error("Could not fetch data")
                }

                const dataJson = await data.json();
                const weatherObject = {
                        feelsLike: dataJson.current.feelslike_c,
                        humidity: dataJson.current.humidity,
                        precip: dataJson.current.precip_mm,
                        uvIndex: dataJson.current.uv,
                        wind: dataJson.current.wind_kph,
                        wind_dir: dataJson.current.wind_dir,
                        cloud: dataJson.current.cloud,
                        vis: dataJson.current.vis_km,
                        condition: dataJson.current.condition,
                        lastUpdated: dataJson.current.lastUpdated,
                        country: dataJson.location.country,
                        localTime: dataJson.location.localtime,
                        timeZone: dataJson.location.tz_id,
                        name: dataJson.location.name
                }
                return weatherObject;
        }
        catch(err){
                console.log(err);
        }
        
}