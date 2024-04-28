import styled from "styled-components";

export const Container = styled.main`
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 50px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
  width: 100%;
  height: 375px;
  margin-top: 85px;
`;

export const Row = styled.div<{ gridEnd?: string }>`
  width: 100%;
  height: 64px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* background-color: green; */
  gap: 32px;
  margin-top: 40px;
  /* grid-column-end: span 2; */
  /* Se o número de itens for menor que 4, faça o último item ocupar 2 frs */
  > :last-child {
    grid-column-end: ${({ gridEnd }) => gridEnd};
  }
`;

export const ContentButton = styled.div`
  width: 100%;
  max-width: 591px;
  height: 64px;
  background-color: green;
  margin: 0 auto;
  margin-top: 40px;
`;
