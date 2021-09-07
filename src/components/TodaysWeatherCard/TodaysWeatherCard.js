import { StyledWeatherCard, StyledTempatureContainer, StyledWeatherImage, StyledTitle, StyledCurrentTemp } from "./styles"
import { getWeatherIcon } from "../../utils/iconUtil";
import { toFahrenheit } from "../../utils/conversions";

const TodaysWeatherCard = ({maxTemp, minTemp, weatherType, currentTemp}) => {
  return <StyledWeatherCard>
    <StyledTitle>Today</StyledTitle>
    <StyledWeatherImage src={getWeatherIcon(weatherType)}/>
    <StyledCurrentTemp> {`${toFahrenheit(currentTemp)} °F`} </StyledCurrentTemp>
    <StyledTempatureContainer>
      <span>{`H: ${toFahrenheit(maxTemp)} °F`}</span>
      <span>{`L: ${toFahrenheit(minTemp)} °F`}</span>
    </StyledTempatureContainer>

  </StyledWeatherCard>
}

export default TodaysWeatherCard;