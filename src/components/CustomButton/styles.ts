import styled from "styled-components";
import { darken } from "polished";

export const Button = styled.button<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: #d71016;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 220ms linear;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => darken(0.1, "#D71016")};
  }
`;
