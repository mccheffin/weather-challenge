import styled from 'styled-components';

export const StyledWeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  @media (max-width: 940px) {
    flex-direction: row;
    width: 240px;
    height: 60px;
  }
`;

export const StyledTempatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

export const StyledWeatherImage = styled.img`
  height: 45px;
  width: 45px;
  margin-bottom: 20px;
  @media (max-width: 940px) {
   margin-bottom: 0px;
   margin-right: 20px;
  }
`;