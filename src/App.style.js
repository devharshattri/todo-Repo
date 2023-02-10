import styled from "styled-components";

export const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormInput = styled.input`
  width: 300px;
  font-size: large;
  &:placeholder-shown {
    font-style: italic;
    font-size: medium;
  }
`;

export const FormButton = styled.button`
  align-items: center;
  margin: 5px;
  font-size: large;
  &:hover {
    background-color: gray;
    color: white;
    border-radius: 2px;
    cursor: pointer;
    border: solid;
    border-radius: 3px;
  }
`;

export const Styledh2 = styled.h2`
  text-align: center;
`;
