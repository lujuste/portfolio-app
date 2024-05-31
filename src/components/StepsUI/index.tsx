import React, { useEffect, useState } from "react";
import { BoxBar, Container, Line, ProgressLine, Rect } from "./styles";

import Image from "next/image";
import { useDevice } from "@/hooks/useDevice";
import { ImageContent, ImageContainer } from "../StepsComponents/styles";

type Props = {
  currentStep: string;
  // setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
};

const StepsUI: React.FC<Props> = ({ currentStep }) => {
  const [progress, setProgress] = useState("0%");
  const { isDevice } = useDevice();

  useEffect(() => {
    if (currentStep == "2") {
      setProgress("50%");
    }

    if (currentStep == "5") {
      setProgress("100%");
    }
  }, [currentStep]);

  return (
    <Container>
      <h3>Cadastre seu imóvel</h3>
      {isDevice && (
        <ImageContent>
          <ImageContainer>
            <Image
              src="https://img.freepik.com/fotos-gratis/ai-gerado-de-entrada-de-estilo-moderno_23-2150692385.jpg?t=st=1717097598~exp=1717101198~hmac=cea1aa6b82c5833c19ed376cf01a13ae35e4b813790d2a43f064cb4014547ef9&w=740"
              alt="Imagem principal de uma casa de luxo"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </ImageContainer>
        </ImageContent>
      )}
      <BoxBar>
        <Line>
          <Rect
            x={"0%"}
            color={currentStep === "1" && progress === "0%" ? "#000" : "red"}
          />
          <Rect
            x={"50%"}
            color={
              currentStep !== "1" && progress !== "100%"
                ? "#000"
                : progress === "100%" && currentStep === "5"
                ? "red"
                : "#afafaf"
            }
          />
          <Rect x={"100%"} color={currentStep === "5" ? "#000" : "#afafaf"} />

          <ProgressLine width={progress} />
        </Line>
      </BoxBar>
    </Container>
  );
};

export default StepsUI;
