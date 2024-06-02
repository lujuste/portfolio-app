import { StaticImageData } from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex: 1;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 1200px) {
    padding: 30px 20px;
  }
  /* background-color: red; */
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  font-family: Inter, sans-serif;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin-left: 7px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ImageContent = styled.div`
  position: relative; /* Adiciona posição relativa para que a imagem possa se ajustar usando layout="fill" */
  width: 100%;
  height: 100%;
  /* Ajuste o valor 428 conforme necessário para corresponder à largura da imagem */
  display: flex;

  /* margin-top: 32px; */
`;

export const ImageWrapper = styled.div<{ url?: string | StaticImageData }>`
  width: 100%;
  height: 100%;
  display: flex;
  background-image: ${({ url }) => url && `url(${url})`};
  max-width: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  /* max-height: 800px; */
`;

export const FormsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* background-color: green; */
  min-height: 689px;
  padding: 0 42px;
  overflow-y: auto;

  @media (max-width: 1200px) {
    padding: 0px 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  /* background-color: yellow; */

  display: flex;
  min-height: 665px;
  /* justify-content: space-between; */
  flex-direction: column;

  .divider {
    width: 100%;
    height: 2px;
    background-color: #bdbdbd;
    display: flex;
    margin-top: 20px;
  }

  h2 {
    /* width: 339px; */
    font-size: 40px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 30px;
  }

  p {
    color: #12100c;
    font-size: 14px;
    font-weight: 400;
  }

  span {
    color: #868686;
    font-size: 12px;
    margin-top: 24px;
  }
`;
