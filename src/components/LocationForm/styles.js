import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;

export const StyledSearchButton = styled.button`
  outline: none;
  background-color: #488CF1;
  margin: 5px 0px;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  margin: 5px 0px;
  border: none;
  height: 20px;
  border-radius: 4px;
  border-bottom: 2px solid  
    ${(props) =>
      props.error ? '#C6392E' : '#242624'};
`;

export const StyledError = styled.span`
  color: red;
  margin: 5px 0px;
`;