import React from "react";

import { Container, Title } from "./styles";
import OwnerStep from "../OwnerStep";
import SkipAndBack from "../SkipAndBack";
import CharacteristStep from "../CharacteristStep";
import CharacteristStepAdress from "../CharacteristStepAddress";
import CharacteristStepSpecial from "../CharacteristStepSpecial";
import PhotosStep from "../PhotosStep";

type Props = {
  nextStep(): void;
  currentStep: string;
};

const RenderStepScreen: React.FC<Props> = ({ nextStep, currentStep }) => {
  const headingCase =
    currentStep === "1"
      ? "Proprietário"
      : currentStep === "2" || currentStep === "3" || currentStep === "4"
      ? "Características"
      : currentStep === "5" && "Fotos";

  return (
    <Container>
      <Title>{headingCase}</Title>

      {currentStep === "1" && <OwnerStep />}
      {currentStep === "2" && <CharacteristStep />}
      {currentStep === "3" && <CharacteristStepAdress />}
      {currentStep === "4" && <CharacteristStepSpecial />}
      {currentStep === "5" && <PhotosStep />}

      <SkipAndBack nextStep={nextStep} />
    </Container>
  );
};

export default RenderStepScreen;
