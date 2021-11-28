import styled from "styled-components"

export const AvatarStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  padding: 0 20px;

  h2 {
    padding: 10px;
    text-align: center;
  }

  .card-content:hover {
    color: #daff00;
  }
`
export const ImageStyle = styled.div`
  height: 20%;
  cursor: pointer;
  transition-duration: 700ms;
  transition-property: transform;

  img:hover {
    border: 3px solid #daff00;
    transform: scale(1.2);
  }
`
