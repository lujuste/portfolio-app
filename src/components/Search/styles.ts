import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  height: 100%;
  font-size: 14px;
  color: #12100c;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const Box = styled.div`
  width: 384px;
  height: 64px;
  display: flex;
  border: 2px solid #da4949;
  align-items: center;
  margin: 18px 0;
  gap: 10px;
  padding: 0 25px;
`;
