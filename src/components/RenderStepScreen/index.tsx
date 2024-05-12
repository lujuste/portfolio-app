import React from "react";

import { Container, Title } from "./styles";
import OwnerStep from "../OwnerStep";
import SkipAndBack from "../SkipAndBack";

const RenderStepScreen: React.FC = () => {
  const step = "1";

  return (
    <Container>
      <Title>Proprietário</Title>

      <OwnerStep />

      <SkipAndBack />
    </Container>
  );
};

export default RenderStepScreen;
