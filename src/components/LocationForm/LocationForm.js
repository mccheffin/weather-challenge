import { useContext, useState } from 'react';
import { WeatherContext } from "../../contexts/weatherContext";
import { StyledInput, StyledError, StyledSearchButton, StyledForm } from "./styles";

const LocationInput = () => {
  const { setWeatherList, setError, setIsLoaded, error } = useContext(WeatherContext)
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(false);
    setIsLoaded(false);

    fetch(`/api/location/search/?query=${location}`)
      .then(res => res.json())
      .then(
        (location) => {
          setIsLoaded(true);
          return fetch(`/api/location/${location[0].woeid}/`);
        },
        (error) => {
          setError(true);
          setIsLoaded(true);
          setWeatherList([]);
        }
      )
      .then(res => res.json())
      .then((weather) => {
        setIsLoaded(true);
        setWeatherList(weather.consolidated_weather);
      }, (error) => {
        setError(true);
        setIsLoaded(true);
        setWeatherList([]);
      })
  }

  return <StyledForm onSubmit={handleSubmit}>
    <StyledInput 
      placeholder="denver" 
      type="text"
      value={location} 
      onChange={e => setLocation(e.target.value)}
      error={error}
    />
    <StyledSearchButton type="text">
      Search
    </StyledSearchButton>

    {error ? <StyledError>
      There was a problem: Make sure you spelled your search correctly
    </StyledError> : null}
  </StyledForm>
}

export default LocationInput