import styled from "styled-components";

export const FormText = styled.textarea`
  border: 1px solid #979797;
  width: 100%;
  display: flex;
  height: 148px;
  overflow-y: auto;
  resize: none;
  padding: 20px;
  font-size: 14px;
  color: #a4a4a4;
  outline: none;
  font-family: Inter;
  margin-top: 1rem;

  &::placeholder {
    font-size: 14px;
    color: #a4a4a4;
    font-family: "Inter", sans-serif;
  }
`;

export const ImageContainerEnd = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ImageContentEnd = styled.div`
  position: relative; /* Adiciona posição relativa para que a imagem possa se ajustar usando layout="fill" */
  width: 100%;
  height: calc(
    100vw * 209 / 308
  ); /* Ajuste o valor 428 conforme necessário para corresponder à largura da imagem */
  display: flex;

  justify-content: center; /* Centraliza a imagem horizontalmente */
  align-items: center; /* Centraliza a imagem verticalmente */
  overflow: hidden;
  margin-top: -18px;
  margin-bottom: 20px;
  background-position: center;
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
    100vw * 109 / 308
  ); /* Ajuste o valor 428 conforme necessário para corresponder à largura da imagem */
  display: flex;

  justify-content: center; /* Centraliza a imagem horizontalmente */
  align-items: center; /* Centraliza a imagem verticalmente */
  overflow: hidden;
  margin-top: -18px;
  margin-bottom: 20px;
  background-position: center;
`;

export const VStack = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  gap: 10px;
`;

export const HStack = styled.div`
  display: flex;
  width: 100%;
  /* height: 100%; */
  margin-top: 24px;
  gap: 32px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  /* background-color: red; */

  input {
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  /* background-color: brown; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;

  h2 {
    font-size: 32px !important;
    font-weight: 600;
    width: 416px;
    margin-right: auto;
    margin-top: auto;
  }

  p {
    margin-top: auto !important;
    min-height: 200px;
  }

  @media (max-width: 1200px) {
    h2 {
      width: 100%;
      font-size: 24px;
      max-width: 341px;
      margin-right: auto;
      margin-bottom: 70px;
      margin-top: 50px;
    }
  }
`;
