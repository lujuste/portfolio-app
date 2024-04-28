import React from "react";

import { Container } from "./styles";
import Image from "next/image";

type Props = {
  src: string;
  title: string;
};

const ButtonFilter: React.FC<Props> = ({ src, title }) => {
  return (
    <Container>
      <Image src={src} width={25} height={25} alt="icone" />

      <p> {title} </p>
    </Container>
  );
};

export default ButtonFilter;
