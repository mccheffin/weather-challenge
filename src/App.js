import { WeatherContextProvider } from './contexts/weatherContext';
import styled from 'styled-components';
import HomePage from './views/home/HomePage'

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <StyledApp>
      <WeatherContextProvider>
        <HomePage />
      </WeatherContextProvider>
    </StyledApp>
  );
}

export default App;
