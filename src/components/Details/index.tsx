import React from "react";
import { BoxContainer, BoxGradient, Grid, GridItem, Title } from "./styles";
import TagLocation from "../TagLocation";
import { HStack } from "../HomeScreen/styles";
import { InformationBox } from "../InformationBox";

import iconArea from "@/assets/area.svg";

// import { Container } from './styles';

const Details: React.FC = () => {
  return (
    <BoxGradient>
      <BoxContainer>
        <span>CA0237-POU7</span>
        <Title>Jardim Veneza</Title>
        <TagLocation locationName="Senador Canedo-GO" />
      </BoxContainer>

      <HStack>
        <Grid>
          <GridItem>
            <InformationBox src={iconArea} />
          </GridItem>
          <GridItem>
            <InformationBox src={iconArea} />
          </GridItem>
          <GridItem>
            <InformationBox src={iconArea} />
          </GridItem>
          <GridItem>
            <InformationBox src={iconArea} />
          </GridItem>
        </Grid>
      </HStack>
    </BoxGradient>
  );
};

export default Details;
