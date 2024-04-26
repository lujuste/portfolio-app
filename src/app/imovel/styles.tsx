"use client";

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

export const HStack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
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
`;

export const FormBox = styled.div`
  width: 403px;
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
`;
