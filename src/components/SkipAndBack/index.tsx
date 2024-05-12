import React from "react";

import { ButtonBack, ButtonSkip, Container, ColumContainer } from "./styles";
import { ArrowLeft, ArrowRight } from "phosphor-react";

type Props = {
  nextStep(): void;
};

const SkipAndBack: React.FC<Props> = ({ nextStep }) => {
  return (
    <ColumContainer>
      <Container>
        <ButtonBack>
          {" "}
          <ArrowLeft size={24} /> Anterior
        </ButtonBack>
        <ButtonSkip onClick={nextStep}>
          Próximo <ArrowRight size={24} />
        </ButtonSkip>
      </Container>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </ColumContainer>
  );
};

export default SkipAndBack;
