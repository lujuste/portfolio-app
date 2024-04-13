import React from "react";
import { HStack } from "../HomeScreen/styles";
import {
  BoxGradient,
  Grid,
  GridItem,
  MainContent,
  Title,
  BoxContainer,
} from "./styles";
import TagLocation from "../TagLocation";
import { InformationBox } from "../InformationBox";

import iconArea from "@/assets/area.svg";
import Image, { StaticImageData } from "next/image";
// import { Container } from './styles';

type Props = {
  src: StaticImageData;
  disabledInfos?: boolean;
};

const Informations: React.FC<Props> = ({ src, disabledInfos = false }) => {
  return (
    <MainContent>
      {!disabledInfos && (
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
      )}

      <Image
        placeholder="blur"
        fill={true}
        src={src}
        alt={"Foto de uma casa."}
      />
    </MainContent>
  );
};

export default Informations;
