import styled from "styled-components";

export const LabelImage = styled.div<{ isExpanded: boolean }>`
  width: ${({ isExpanded }) => (isExpanded ? "268px" : "268px")};
  height: 36px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: ${({ isExpanded }) => (isExpanded ? "40px" : "160px")};
  left: ${({ isExpanded }) => (isExpanded ? "58px" : "-28px")};
  z-index: 9;
  transition: all linear 450ms;

  transform: ${({ isExpanded }) =>
    isExpanded ? "rotate(0)" : "rotate(-90deg)"};

  span {
    font-size: 32px;
    color: #fff;
  }
`;
