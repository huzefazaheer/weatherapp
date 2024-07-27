export default async function fetchWeatherData(place){
    const data = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + place + "?unitGroup=metric&key=7GG7LJWV3CALF9WWPUFQ6PZW7&contentType=json")
    return (data.json())
}