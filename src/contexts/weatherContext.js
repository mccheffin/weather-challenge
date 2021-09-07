// Packages
import { createContext, useState } from 'react';

export const WeatherContext = createContext({});

export const WeatherContextProvider = ({
  children
}) => {
  const [weatherList, setWeatherList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(false);
 
  return (
    <WeatherContext.Provider
      value={{
        error,
        setError,
        isLoaded,
        setIsLoaded,
        weatherList,
        setWeatherList
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};