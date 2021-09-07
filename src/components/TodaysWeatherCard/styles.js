import styled from 'styled-components';

export const StyledWeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;
  width: 210px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  @media (max-width: 940px) {
    width: 260px;
  }
`;

export const StyledTempatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

export const StyledWeatherImage = styled.img`
  height: 60px;
  width: 60px;
`;

export const StyledTitle = styled.h4`
  margin-top: 0;
`;

export const StyledCurrentTemp = styled.h2`  
`;