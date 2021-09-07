import { StyledWeatherCard, StyledTempatureContainer, StyledWeatherImage } from "./styles"
import { getWeatherIcon } from "../../utils/iconUtil";
import { toFahrenheit } from "../../utils/conversions";
import { getNameOfDay } from "../../utils/dayUtil";

const WeatherCard = ({maxTemp, minTemp, weatherType, date}) => {
  return <StyledWeatherCard>
    <span> {getNameOfDay(date)} </span>
    <StyledWeatherImage src={getWeatherIcon(weatherType)}/>
    <StyledTempatureContainer>
      <span>{`${toFahrenheit(maxTemp)} °F`}</span>
      <span>{`${toFahrenheit(minTemp)} °F`}</span>
    </StyledTempatureContainer>
  </StyledWeatherCard>
}

export default WeatherCard