import styled from "styled-components";

export const StyledButton = styled.button<{ width?: string; height: string }>`
  background: #d71016;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => height && height};
  min-width: ${({ width }) => (width ? width : "100%")};
  min-height: ${({ height }) => height && height};
  display: flex;
  border: none;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
`;
