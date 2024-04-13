import React from "react";
import iconLocation from "@/assets/location.svg";
import Image from "next/image";
import { Container } from "./styles";

type Props = {
  locationName: string;
};

const TagLocation: React.FC<Props> = ({
  locationName = "JAOAOAOAOAOA O AOAOAO OAOA ",
}) => {
  return (
    <Container>
      <Image
        src={iconLocation}
        alt="Icone de localizacao"
        width={15}
        height={18}
      />

      <p> {locationName}</p>
    </Container>
  );
};

export default TagLocation;
