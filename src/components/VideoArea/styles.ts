import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-height: 573px;
  background-color: black;
  display: flex;
  flex: 1;
  margin: 72px 0;

  video {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1200px) {
    margin: 32px 0;
  }
`;
