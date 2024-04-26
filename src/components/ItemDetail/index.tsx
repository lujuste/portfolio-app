import React from "react";

import { Container } from "./styles";
import Image from "next/image";

type Props = {
  src: string;
  title: string;
};

const ItemDetail: React.FC<Props> = ({ src, title }) => {
  return (
    <Container>
      <Image alt="" src={src} width={24} height={24} quality={1} />
      <span> {title} </span>
    </Container>
  );
};

export default ItemDetail;
