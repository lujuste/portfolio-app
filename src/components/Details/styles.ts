import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  max-width: 594px;
  height: 600px;
  position: relative;
  flex-direction: column;
  padding: 37px 23px;
  align-items: center;
`;

export const BoxGradient = styled.div`
  width: calc(100% - 40px);
  min-height: 149px;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  z-index: 10;
  display: flex;
  bottom: 37px;
  align-items: center;
  padding: 0 48px;
  justify-content: space-between;
`;

export const BoxContainer = styled.div`
  display: flex;
  /* background-color: red; */
  max-width: 211px;
  flex-direction: column;
  gap: 4px;

  > span {
    font-size: 10px;
    color: #fff;
    font-weight: 400;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  color: #fff;
  font-weight: 500;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 220px;
  height: 105px;
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
