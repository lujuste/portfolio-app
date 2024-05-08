import React, { useEffect, useState } from "react";
import { BoxBar, Container, Line, ProgressLine, Rect } from "./styles";

type Props = {
  currentStep: string;
  // setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
};

const StepsUI: React.FC<Props> = ({ currentStep }) => {
  const [progress, setProgress] = useState("0%");

  useEffect(() => {
    if (currentStep == "2") {
      setProgress("50%");
    }

    if (currentStep == "5") {
      setProgress("100%");
    }
  }, [currentStep]);

  console.log(currentStep, "current step");
  console.log("progrs", progress);

  return (
    <Container>
      <h3>Cadastre seu imóvel</h3>
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
