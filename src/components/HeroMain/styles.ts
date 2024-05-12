import styled from "styled-components";

export const RadialContainer = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgb(0, 0, 0, 0.9), rgb(0, 0, 0, 0.27));
`;

export const PresentationHero = styled.div<{ isExpanded: boolean }>`
  position: relative;
  width: ${({ isExpanded }) => (isExpanded ? "405px" : "176px")};
  max-width: ${({ isExpanded }) => (isExpanded ? "1366px" : "176px")};
  height: calc(100% - 60px);
  max-height: 600px;
  margin-left: 42px;
  margin-top: 56px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all linear 400ms;

  .bgImage {
    z-index: 0;
  }

  @media (max-width: 1366px) {
    width: ${({ isExpanded }) => (isExpanded ? "390px" : "176px")};
  }
`;
