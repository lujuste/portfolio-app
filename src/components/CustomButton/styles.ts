import styled from "styled-components";

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
`;
