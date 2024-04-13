import styled from "styled-components";

export const RadialContainer = styled.div`
  z-index: 2;
  position: absolute;
  width: 384px;
  height: 538px;
  background: linear-gradient(to top, rgb(0, 0, 0, 0.9), rgb(0, 0, 0, 0.27));
`;

export const PresentationHero = styled.div<{ isExpanded: boolean }>`
  position: relative;
  width: ${({ isExpanded }) => (isExpanded ? "384px" : "176px")};
  height: 538px;
  margin-left: 42px;
  margin-top: 56px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all linear 400ms;

  .bgImage {
    z-index: 0;
  }
`;
