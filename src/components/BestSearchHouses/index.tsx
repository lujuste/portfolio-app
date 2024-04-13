import React from "react";
import { Container, HStack } from "./styles";

import houseOne from "@/assets/casa.png";
import SecondaryContent from "../SecondaryContent";
import Informations from "../Informations";

const BestSearchHouses: React.FC = () => {
  return (
    <Container>
      <HStack>
        <Informations src={houseOne} />
        <SecondaryContent />
      </HStack>

      <HStack>
        <SecondaryContent />
        <Informations src={houseOne} />
      </HStack>
    </Container>
  );
};

export default BestSearchHouses;
