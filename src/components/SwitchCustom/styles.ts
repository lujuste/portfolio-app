import styled from "styled-components";

export const Container = styled.div<{ useSwitch: boolean }>`
  width: 200px;
  height: 55px;
  background-color: red;
  display: flex;
  margin: 0 auto;
  border-radius: 27px;
  align-items: center;
  cursor: pointer;

  span {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    transition: all 120ms ease-in-out;
    transform: ${({ useSwitch }) =>
      useSwitch ? "translateX(-80px)" : "translateX(0px)"};
  }
`;

export const Button = styled.div<{ useSwitch: boolean }>`
  width: 100px;
  height: 55px;
  background-color: #000;
  display: flex;
  border-radius: 27px;
  transition: all 200ms ease-in;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-right: 10px;
  z-index: 99;

  transform: ${({ useSwitch }) =>
    useSwitch ? "translateX(100px)" : "translateX(0px)"};
`;
