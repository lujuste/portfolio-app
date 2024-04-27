import React from "react";
import { Container, HStack } from "./styles";
import Informations from "../Informations";
import SecondaryContent from "../SecondaryContent";
import houseOne from "@/assets/casa.png";

// import { Container } from './styles';
type Props = {
  paddingLeft: string;
};

const ListCatalog: React.FC<Props> = ({ paddingLeft }) => {
  return (
    <Container paddingLeft={paddingLeft}>
      <HStack>
        <Informations src={houseOne} />
        <SecondaryContent />
      </HStack>
    </Container>
  );
};

export default ListCatalog;
