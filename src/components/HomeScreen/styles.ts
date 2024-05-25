import styled from "styled-components";

export const Container = styled.main`
  width: 100dvh;
  height: calc(100dvh - 100px);
  /* background-color: red; */
  display: flex;
  margin-top: 0.8rem;
  /* padding: 0 50px; */
`;

export const ContainerDevice = styled.div`
  /* background-color: blue; */
  width: 100%;
  height: auto;
  flex-direction: column;
  margin-top: 22px;

  h2 {
    font-size: 32px;
    font-weight: semi-bold;
    max-width: 281px;
  }
`;

export const ImageContent = styled.div`
  position: relative; /* Adiciona posição relativa para que a imagem possa se ajustar usando layout="fill" */
  width: 100%;
  height: 420px; /* Defina a altura desejada do container pai */
  display: flex;
  justify-content: center; /* Centraliza a imagem horizontalmente */
  align-items: center; /* Centraliza a imagem verticalmente */
  overflow: hidden;

  span {
    font-size: 32px;
    position: absolute;
    bottom: 30%;
    left: -20px;
    color: #fff;
    z-index: 99;
    word-wrap: break-word;
    transform: rotate(-90deg);
    width: 200px;

    @media (max-width: 1200px) {
      left: 120px;
    }

    @media (max-width: 768px) {
      left: 60px;
    }

    @media (max-width: 480px) {
      left: -20px;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const Horizontal = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 28px;
  margin-top: 16px;
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
  width: 100%;
  min-width: 176px;
  height: 64px;
  border: 2px solid #da4949;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 10px;
  position: relative;

  span {
    font-size: 16px;
    font-weight: semi-bold;
    color: #12100c;
  }

  @media (max-width: 1200px) {
    min-width: 0;
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
