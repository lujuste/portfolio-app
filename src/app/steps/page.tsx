"use client";

import React, { useState } from "react";

import { Container, Content, FormsWrapper, ImageWrapper } from "./styles";
// import Image from "next/image";
import houseInitial from "@/assets/casa92.png";
import houseSecond from "@/assets/casa93.png";
import Image from "next/image";
import Logo from "@/assets/LogoRed.svg";
import { Input } from "../imovel/styles";
import { Button } from "@/components/CustomButton/styles";
import HeaderSteps from "@/components/HeaderSteps";
import StepsComponents from "@/components/StepsComponents";

const Steps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState("initial");

  console.log(currentStep, "currentStep<<<<");

  return (
    <Container>
      <ImageWrapper>
        <Image
          src={currentStep === "initial" ? houseInitial : houseSecond}
          alt="Descriptive text for the image"
          width={644}
          height={689}
          layout="responsive"
        />
      </ImageWrapper>
      <FormsWrapper>
        <Content>
          <HeaderSteps Logo={Logo} />

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
