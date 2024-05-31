import styled from "styled-components";

export const BoxBar = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  /* background-color: red; */
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 500px) {
    margin: 20px auto 8px auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;

  h3 {
    font-size: 32px;
    font-weight: 600;
    color: #000;
    margin: 32px auto 32px auto;
  }

  @media (max-width: 500px) {
    h3 {
      width: 200px;
      margin: 32px 0;
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  display: flex;
  background-color: #afafaf;
  position: relative;
`;

export const Rect = styled.div<{ x: string; color: string }>`
  position: absolute;
  width: 21px;

  height: 21px;
  background-color: ${({ color }) => color && color};
  left: ${({ x }) => x && `calc(${x} - 11.5px)`};
  top: -10px;
  z-index: 10;
`;

export const ProgressLine = styled.div<{ width: string }>`
  position: absolute;
  width: ${({ width }) => width};
  height: 2px;
  display: flex;
  background-color: red;
  top: 0;
  left: 0;
  z-index: 1;
`;
