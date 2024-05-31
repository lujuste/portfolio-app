import styled from "styled-components";

export const Container = styled.div<{ isActive: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: ${({ isActive }) => (isActive ? "0px" : "-400px")};
  z-index: 999;
  flex-direction: column;
  display: flex;
  align-items: center;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  /* justify-content: center; */
  gap: 40px;
  transition: all 450ms ease-in;

  span {
    font-size: 24px;
    font-weight: 600;
    color: #12100c;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 40px;
  padding-top: 100px;
  position: relative;
`;
