import styled from "styled-components";

export const MainContentStyle = styled.div`
  background-color: #ff5b00;
  width: 100%;
  height: 100%;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
export const ClearButton = styled.button`
  position: absolute;
  display: ${({ inputValue }) => (inputValue ? "block" : "none")};
  right: 20px;
  top: 50%;
  transform: translate(0, -50%);
  height: 30px;
  border: none;
  background: transparent;
  font-size: 24px;
  color: #ff5b00;
  &:hover {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: fit-content;
  margin: auto;

  input {
    margin: 20px;
    min-width: 310px;
    height: 30px;
  }

  input::placeholder {
    text-align: center;
  }

  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  @media screen and (min-width: 320px) and (max-width: 1023px) {
    input {
      width: 80%;
    }
  }
`;
