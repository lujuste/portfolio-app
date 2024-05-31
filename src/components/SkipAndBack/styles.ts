import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  gap: 32px;
  margin-top: 16px;
`;

export const ButtonSkip = styled.button`
  width: 100%;
  height: 48px;
  background-color: #d71016;
  display: flex;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  gap: 7px;
`;

export const ButtonBack = styled.button`
  width: 100%;
  height: 48px;
  background-color: red;
  display: flex;
  background-color: transparent;
  border: 1px solid #808080;
  color: #808080;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  gap: 7px;
`;

export const ColumContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
    font-weight: 400;
    color: #868686;
    margin-top: 16px;
    min-height: 200px;
  }
`;
