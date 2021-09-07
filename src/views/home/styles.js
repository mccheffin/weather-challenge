import styled from "styled-components";

export const StyledBody = styled.div`
  width: 100%;
  height: 100%;

  background-color: darkgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledForcastContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
  margin-top: 30px;
  @media (max-width: 940px) {
    grid-auto-flow: row;
  }
`;