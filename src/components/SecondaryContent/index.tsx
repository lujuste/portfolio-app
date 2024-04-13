import React from "react";

import { Container, ImageContent } from "./styles";
import Image from "next/image";

import houseExample from "@/assets/casa2.png";
import Informations from "../Informations";
import Details from "../Details";

const SecondaryContent: React.FC = () => {
  return (
    <Container>
      <ImageContent>
        <Image
          placeholder="blur"
          fill={true}
          src={houseExample}
          alt={"Foto de uma casa."}
        />
        <Details />
      </ImageContent>

      <ImageContent>
        <Image
          placeholder="blur"
          fill={true}
          src={houseExample}
          alt={"Foto de uma casa."}
        />
        <Details />
      </ImageContent>
    </Container>
  );
};

export default SecondaryContent;
