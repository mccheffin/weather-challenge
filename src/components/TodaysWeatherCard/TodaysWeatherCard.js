import { StyledWeatherCard, StyledTempatureContainer, StyledWeatherImage, StyledTitle, StyledCurrentTemp } from "./styles"
import { getWeatherIcon } from "../../utils/iconUtil";
import { toFahrenheit } from "../../utils/conversions";

const TodaysWeatherCard = ({maxTemp, minTemp, weatherType, currentTemp}) => {
  return <StyledWeatherCard>
    <StyledTitle>Today</StyledTitle>
    <StyledWeatherImage src={getWeatherIcon(weatherType)}/>
    <StyledCurrentTemp> {`${toFahrenheit(currentTemp).toFixed(0)} °F`} </StyledCurrentTemp>
    <StyledTempatureContainer>
      <span>{`H: ${toFahrenheit(maxTemp).toFixed(0)} °F`}</span>
      <span>{`L: ${toFahrenheit(minTemp).toFixed(0)} °F`}</span>
    </StyledTempatureContainer>

  </StyledWeatherCard>
}

export default TodaysWeatherCard;