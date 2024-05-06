"use client";

import React from "react";

import {
  Container,
  Content,
  FormsWrapper,
  Header,
  ImageWrapper,
  StyledLink,
} from "./styles";
// import Image from "next/image";
import houseInitial from "@/assets/casa92.png";
import Image from "next/image";
import Logo from "@/assets/LogoRed.svg";

const Steps: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={houseInitial}
          alt="Descriptive text for the image"
          width={644}
          height={689}
          layout="responsive"
        />
      </ImageWrapper>
      <FormsWrapper>
        <Content>
          <Header>
            <div>
              <Image
                width={73}
                height={73}
                src={Logo}
                alt="Logo da imobiliaria portfolio"
              />
            </div>

            <ul>
              <li>
                <StyledLink href="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink href="/about">Grupo Portfolio</StyledLink>
              </li>

              <li>
                <StyledLink href="/about">Imóveis</StyledLink>
              </li>
            </ul>
          </Header>

          <div className="divider"></div>

          <h2>Encomende seu imóvel</h2>

          <p>Descreva as características abaixo:</p>
        </Content>
      </FormsWrapper>
    </Container>
  );
};

export default Steps;
