import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 1366px;
  margin: 70px auto;
  cursor: pointer;

  @media (max-width: 1366px) {
    margin: 16px auto;
  }

  /* padding-left: 50px; */
`;

export const BoxImage = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  height: 200px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ImageContent = styled.div`
  position: relative; /* Adiciona posição relativa para que a imagem possa se ajustar usando layout="fill" */
  width: 100%;
  height: calc(
    100vw * 209 / 428
  ); /* Ajuste o valor 428 conforme necessário para corresponder à largura da imagem */
  display: flex;
  justify-content: center; /* Centraliza a imagem horizontalmente */
  align-items: center; /* Centraliza a imagem verticalmente */
  overflow: hidden;
`;

export const ImageContentLarge = styled.div`
  position: relative; /* Adiciona posição relativa para que a imagem possa se ajustar usando layout="fill" */
  width: 100%;
  height: calc(
    100vw * 209 / 228
  ); /* Ajuste o valor 428 conforme necessário para corresponder à largura da imagem */
  display: flex;
  justify-content: center; /* Centraliza a imagem horizontalmente */
  align-items: center; /* Centraliza a imagem verticalmente */
  overflow: hidden;
`;

export const HStack = styled.div`
  display: flex;
  position: relative;
  margin: 17px 0;
  gap: 30px;
`;

export const Left = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  max-width: 200px;
  padding: 20px 20px;
  gap: 5px;

  p {
    font-size: 7px;
  }

  p,
  h2 {
    color: #fff;
  }

  h2 {
    font-size: 24px;
    word-wrap: break-word;
    width: 100%;
    max-width: 157px;
  }

  @media (max-width: 768px) {
    max-width: 50%;
  }

  @media (max-width: 468px) {
    max-width: 140px;

    h2 {
      font-size: 16px;
      word-wrap: break-word;
      width: 100%;
      max-width: 137px;
    }
  }
`;

export const Detail = styled.div`
  width: 100%;
  height: 30px;
  border: 1px solid #fff;
  display: flex;
  border-radius: 5px;
`;

export const HBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  p {
    color: #fff;
    font-size: 10px;
  }
`;

export const Right = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  /* background: green; */
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  /* align-items: center; */
  /* justify-content: flex-end; */
  padding: 0 20px 0 0px;
  min-width: 170px;

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 500px) {
    min-width: 170px;
  }

  @media (max-width: 346px) {
    min-width: 160px;
  }
`;

export const VStack = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: transparent;
  /* border: 2px solid #fff; */
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-right: auto;

  &:first-child,
  &:nth-child(2) {
    justify-content: flex-end;
    margin-bottom: 10px;
  }

  &:nth-child(3),
  &:nth-child(4) {
    margin-top: 10px;
  }
`;

export const BoxDetails = styled.div`
  width: calc(100% - 36px);
  height: 65%;
  display: flex;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  bottom: 10px;
  justify-content: flex-end;
`;

export const BoxDetailsLarge = styled.div`
  width: calc(100% - 36px);
  height: calc(
    100vw * 209 / 528
  ); /* Ajuste o valor 428 conforme necessário para corresponder à largura da imagem */
  display: flex;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  bottom: 10px;
  justify-content: flex-end;
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
