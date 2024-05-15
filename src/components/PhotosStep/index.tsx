import React from "react";

import {
  ButtonAttachment,
  ButtonIcon,
  Container,
  GridContainer,
  GridItem,
  HStack,
} from "./styles";
import Image from "next/image";
import iconAttachment from "@/assets/anexo-icon.png";
import exampleImage from "@/assets/imagemexemplo.png";

const PhotosStep: React.FC = () => {
  return (
    <Container>
      <h3>Precisamos de algumas fotos</h3>
      <HStack>
        <ButtonAttachment>
          <h3>Anexe suas fotos aqui</h3>
        </ButtonAttachment>
        <ButtonIcon>
          <Image alt="" width={18} height={18} src={iconAttachment} />
        </ButtonIcon>
      </HStack>

      <GridContainer>
        <GridItem>
          <Image alt="" width={50} height={50} src={exampleImage} />
        </GridItem>
        <GridItem>
          <Image alt="" width={50} height={50} src={exampleImage} />
        </GridItem>
        <GridItem>
          <Image alt="" width={50} height={50} src={exampleImage} />
        </GridItem>
        <GridItem>
          <Image alt="" width={50} height={50} src={exampleImage} />
        </GridItem>
        <GridItem>
          <Image alt="" width={50} height={50} src={exampleImage} />
        </GridItem>
        <GridItem>
          <Image alt="" width={50} height={50} src={exampleImage} />
        </GridItem>
      </GridContainer>
    </Container>
  );
};

export default PhotosStep;
