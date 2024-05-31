"use client";

import { darken } from "polished";
import styled from "styled-components";

export const MainContent = styled.main`
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 0 auto;
  padding-right: 40px;
  overflow-y: auto;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ImageContent = styled.div`
  position: relative; /* Adiciona posição relativa para que a imagem possa se ajustar usando layout="fill" */
  width: 100%;
  min-height: 502px;
  height: calc(
    100vw * 309 / 308
  ); /* Ajuste o valor 428 conforme necessário para corresponder à largura da imagem */
  display: flex;
  justify-content: center; /* Centraliza a imagem horizontalmente */
  align-items: center; /* Centraliza a imagem verticalmente */
  overflow: hidden;
  margin-top: 32px;
`;

export const HStack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;

  /* flex-wrap: wrap; */
  @media (max-width: 1200px) {
    flex-direction: column;

    h2 {
      font-size: 40px;
      font-weight: 600;
      max-width: 299px;
      margin-bottom: 10px;
    }

    > p {
      font-size: 24px;
      font-weight: 600;
      max-width: 299px;
      margin-bottom: 16px;
    }
  }
`;

export const Carrousel = styled.div`
  width: 100%;
  height: 590px;
  max-width: 820px;
  display: flex;
  /* background-color: blue; */
  flex-direction: column;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 {
    height: 80%;
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
    /* background-color: black; */
    display: flex;
    gap: 30px;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 1;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    height: auto;

    /* max-width: 100%; */
  }
`;

export const FormBox = styled.div`
  max-width: 403px;
  width: 100%;
  height: 581px;
  display: flex;
  background-color: transparent;
  border: 1px solid #bdbdbd;
  padding: 18px;
  flex-direction: column;

  h3 {
    width: 339px;
    font-size: 40px;
    font-weight: bold;
  }

  h4 {
    font-size: 24px;
    color: #000;
    font-weight: 400;
    margin: 18px 0;
  }

  label {
    margin: 8px 0;
  }

  span {
    font-size: 11px;
    color: #868686;
    margin-top: 12px;
  }

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
    border: none;
    padding: 18px 0;
    height: auto;

    label {
      font-size: 15px;
      font-weight: 600;
    }

    > span {
      margin-bottom: 32px;
    }
  }
`;

export const Input = styled.div`
  width: 100%;
  height: 48px;
  border: 1px solid #979797;
`;

export const Button = styled.button`
  background-color: #d71016;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  border: none;
  margin-top: 18px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => darken(0.1, "#D71016")};
  }

  @media (max-width: 1200px) {
    height: 42px;
    margin-bottom: 32px;
  }
`;

export const MobileDescription = styled.div`
  width: 100%;
  height: auto;
  flex-direction: column;

  .text-description-imovel {
    word-wrap: break-word;
  }

  .items-imovel {
    width: 100%;
    height: auto;
    flex-direction: column;
    min-height: 81px;
    /* background-color: red; */
    margin-top: 32px;

    div {
      display: flex;
      justify-content: space-between;

      &:first-child {
        height: 42px;
      }
    }
  }
`;
