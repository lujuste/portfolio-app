"use client";

import React, { useEffect, useState } from "react";

import {
  Container,
  Content,
  FormsWrapper,
  ImageContainer,
  ImageContent,
  ImageWrapper,
} from "./styles";
// import Image from "next/image";
import houseInitial from "@/assets/casa92.png";
import houseSecond from "@/assets/casa93.png";
import Image from "next/image";
import Logo from "@/assets/LogoRed.svg";
import { Input } from "../imovel/styles";
import { Button } from "@/components/CustomButton/styles";
import HeaderSteps from "@/components/HeaderSteps";
import StepsComponents from "@/components/StepsComponents";
import { useDevice } from "@/hooks/useDevice";
import Header from "@/components/Header";

const Steps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState("initial");

  const { isDevice } = useDevice();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Marca o estado como pronto após a montagem do componente
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <Container>
      {!isDevice && (
        <ImageContent>
          <ImageContainer>
            <Image
              src={
                currentStep === "initial"
                  ? "https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150759.jpg?t=st=1717097446~exp=1717101046~hmac=f6e0031d174742804e857e422c1538061a06376e78887f57d97ccde3bf6f85eb&w=1380"
                  : "https://img.freepik.com/fotos-gratis/ai-gerado-de-entrada-de-estilo-moderno_23-2150692385.jpg?t=st=1717097598~exp=1717101198~hmac=cea1aa6b82c5833c19ed376cf01a13ae35e4b813790d2a43f064cb4014547ef9&w=740"
              }
              alt="Imagem principal de uma casa de luxo"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </ImageContainer>
        </ImageContent>
      )}
      <FormsWrapper>
        <Content>
          {!isDevice ? <HeaderSteps Logo={Logo} /> : <Header />}

          {/* <div className="divider" /> */}

          <StepsComponents
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </Content>
      </FormsWrapper>
    </Container>
  );
};

export default Steps;
