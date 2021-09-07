import { useContext } from "react";
import { WeatherContext } from "../../contexts/weatherContext";
import { StyledBody, StyledForcastContainer } from "./styles";
import WeatherForecastCard from "../../components/WeatherForecastCard/WeatherForcastCard";
import TodaysWeatherCard from "../../components/TodaysWeatherCard/TodaysWeatherCard";

import Title from "../../components/Title/Title"; 
import LocationInput from "../../components/LocationForm/LocationForm";

const HomePage = () => {
  const {weatherList} = useContext(WeatherContext)

  const renderForcast = () => {
    console.log(weatherList);
    if(weatherList.length <= 0){
      return null;
    }
    return weatherList.slice(1).map((weather, index) => {
      console.log("Weather event: ", weather)
      return <WeatherForecastCard key={index} maxTemp={weather.max_temp} minTemp={weather.min_temp} weatherType={weather.weather_state_abbr} date={weather.applicable_date}/>
    })
  }

  return <StyledBody>
    <Title>
      Whats the Weather?
    </Title>
    <LocationInput />
    { weatherList.length > 0 ? 
      <TodaysWeatherCard  maxTemp={weatherList[0].max_temp} minTemp={weatherList[0].min_temp} weatherType={weatherList[0].weather_state_abbr} currentTemp={weatherList[0].the_temp}/> 
    : null}
    <StyledForcastContainer>
      {renderForcast(renderForcast())}
    </StyledForcastContainer>
  </StyledBody>
}

export default HomePage;