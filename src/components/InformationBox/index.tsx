import React from "react";
import { ContentBox } from "./styles";
import Image from "next/image";

type Props = {
  src: string;
};

export const InformationBox: React.FC<Props> = ({ src }) => {
  // { type, value }
  return (
    <ContentBox>
      <Image src={src} width={16} height={16} alt="Icone de area" />
      <p>1.000m²</p>
    </ContentBox>
  );
};
