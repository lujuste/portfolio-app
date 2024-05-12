import styled from "styled-components";

export const Container = styled.main`
  width: 100dvh;
  height: calc(100dvh - 100px);
  /* background-color: red; */
  display: flex;
  margin-top: 0.8rem;
  /* padding: 0 50px; */
`;

export const HStack = styled.div`
  display: flex;
  position: relative;
  max-width: 387px;
  /* background-color: red; */
`;

export const HStackHero = styled.div`
  display: flex;
  position: relative;
  flex: 1;
`;

export const HStackCustom = styled.div`
  display: flex;
  gap: 32px;
`;

export const SelectStyled = styled.div`
  display: flex;
  width: 176px;
  height: 64px;
  border: 2px solid #da4949;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 10px;

  span {
    font-size: 16px;
    font-weight: semi-bold;
    color: #12100c;
  }
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 387px;

  h2 {
    font-size: 56px;
    font-weight: semi-bold;
    max-width: 388px;
    margin-top: 72px;
    margin-bottom: 32px;
  }
`;
