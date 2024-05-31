import React from "react";

import { Container } from "./styles";
import Image from "next/image";
import { useDevice } from "@/hooks/useDevice";

type Props = {
  src: string;
  title: string;
};

const ButtonFilter: React.FC<Props> = ({ src, title }) => {
  const { isDevice } = useDevice();

  return (
    <Container>
      <Image
        src={src}
        width={isDevice ? 16 : 25}
        height={isDevice ? 16 : 25}
        alt="icone"
      />

      <p> {title} </p>
    </Container>
  );
};

export default ButtonFilter;
