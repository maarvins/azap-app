import styled from "styled-components"

export const LogoIconContainerStyle = styled.div`
  display: flex;
  margin: 0;
  padding: 10px;
  width: 510px;
  height: 69px;

  img {
    height: 90px;
  }
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    img {
      left: 0;
    }
  }
`
