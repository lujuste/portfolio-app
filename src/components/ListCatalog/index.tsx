import React from "react";
import { Container, HStack } from "./styles";
import Informations from "../Informations";
import SecondaryContent from "../SecondaryContent";
import houseOne from "@/assets/casa.png";

// import { Container } from './styles';

const ListCatalog: React.FC = () => {
  return (
    <Container>
      <HStack>
        <Informations src={houseOne} />
        <SecondaryContent />
      </HStack>
    </Container>
  );
};

export default ListCatalog;
