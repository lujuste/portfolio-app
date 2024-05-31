import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 14px;
    font-weight: 500;
    font-family: Inter, sans-serif;
  }
`;

export const HStack = styled.section`
  display: flex;
  width: 100%;
  min-height: 40px;
  height: 40px;
  margin-top: 10px;
`;

export const ButtonAttachment = styled.button`
  display: flex;
  flex: 1;
  min-height: 40px;
  height: 40px;
  border: 1px solid #979797;
  padding: 0 10px;
  align-items: center;
  cursor: pointer;
`;

export const ButtonIcon = styled.button`
  display: flex;
  width: 100%;
  min-width: 72px;
  max-width: 72px;
  min-height: 40px;
  height: 40px;
  background-color: #12100c;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  /* background-color: brown; */
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 32px;
  margin: 42px 0 28px 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 12px;
    grid-auto-rows: 90px;
  }
`;

export const GridItem = styled.div`
  display: flex;
  width: 72px;
  height: 72px;
  background-color: #e3e3e3;
  align-items: center;
  justify-content: center;
`;
