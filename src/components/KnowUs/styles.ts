import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 1366px;
  margin: 35px auto;
  padding-left: 50px;
`;

export const HStack = styled.div`
  display: flex;
  position: relative;
  margin: 17px 0;
  gap: 30px;
`;

export const ContentBox = styled.div`
  width: 96px;
  height: 41px;
  display: flex;
  border: 2px solid #fff;
  border-radius: 8px;
  gap: 6px;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
    font-size: 14px;
    font-weight: 400;
  }
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

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  max-width: 643px;
  height: 600px;
  position: relative;
  flex-direction: column;
  padding: 37px 23px;
  align-items: center;
`;

export const BoxGradient = styled.div`
  width: calc(100% - 40px);
  min-height: 214px;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  z-index: 10;
  display: flex;
  bottom: 37px;
  align-items: center;
  padding: 0 48px;
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
export const MaxWidth = styled.div`
  max-width: 600px;
  display: flex;

  p {
    font-size: 16px;
    line-height: 24px;
  }
`;
