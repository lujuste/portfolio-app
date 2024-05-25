import React from "react";
import {
  BoxDetails,
  BoxDetailsLarge,
  BoxImage,
  Container,
  Detail,
  HBox,
  HStack,
  ImageContainer,
  ImageContent,
  ImageContentLarge,
  Item,
  Left,
  Right,
  VStack,
} from "./styles";

import houseOne from "@/assets/casa.png";
import SecondaryContent from "../SecondaryContent";
import Informations from "../Informations";
import { useDevice } from "@/hooks/useDevice";
import Image from "next/image";

import regua from "@/assets/regua.svg";
import bed from "@/assets/cama.svg";
import carro from "@/assets/carro.svg";
import iconArea from "@/assets/area.svg";

type Props = {
  src: string;
  content: string;
};

const BestSearchHouses: React.FC = () => {
  const { isDevice } = useDevice();

  const Info: React.FC<Props> = ({ src, content }) => {
    return (
      <HBox>
        <Image src={src} width={12} height={12} alt="" />
        <p> {content} </p>
      </HBox>
    );
  };

  return (
    <Container>
      {isDevice ? (
        <VStack>
          <ImageContent>
            <ImageContainer>
              <Image
                src="https://img.freepik.com/fotos-gratis/design-house-villa-moderna-com-sala-de-estar-em-plano-aberto-e-ala-de-quarto-privado-grande-terraco-com-privacidade_1258-169741.jpg"
                alt="Imagem principal de uma casa de luxo"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
            </ImageContainer>
            <BoxDetails>
              <Left>
                <p>CA0257-POU4</p>
                <h2>Casa Alphaville</h2>
              </Left>

              <Right>
                <Item>
                  <Detail>
                    <Info src={iconArea} content="1.000m2" />
                  </Detail>
                </Item>
                <Item>
                  <Detail>
                    <Info src={iconArea} content="4 quartos" />
                  </Detail>
                </Item>
                <Item>
                  <Detail>
                    <Info src={iconArea} content="2 suites" />
                  </Detail>
                </Item>
                <Item>
                  <Detail>
                    <Info src={iconArea} content="2 vagas" />
                  </Detail>
                </Item>
              </Right>
            </BoxDetails>
          </ImageContent>

          <ImageContent>
            <ImageContainer>
              <Image
                src="https://img.freepik.com/fotos-gratis/design-house-villa-moderna-com-sala-de-estar-em-plano-aberto-e-ala-de-quarto-privado-grande-terraco-com-privacidade_1258-169741.jpg"
                alt="Imagem principal de uma casa de luxo"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
            </ImageContainer>
            <BoxDetails>
              <Left>
                <p>CA0257-POU4</p>
                <h2>Casa Alphaville</h2>
              </Left>

              <Right>
                <Item>
                  <Detail>
                    <Info src={iconArea} content="1.000m2" />
                  </Detail>
                </Item>
                <Item>
                  <Detail>
                    <Info src={iconArea} content="4 quartos" />
                  </Detail>
                </Item>
                <Item>
                  <Detail>
                    <Info src={iconArea} content="2 suites" />
                  </Detail>
                </Item>
                <Item>
                  <Detail>
                    <Info src={iconArea} content="2 vagas" />
                  </Detail>
                </Item>
              </Right>
            </BoxDetails>
          </ImageContent>

          <ImageContentLarge>
            <ImageContainer>
              <Image
                src="https://img.freepik.com/fotos-gratis/design-house-villa-moderna-com-sala-de-estar-em-plano-aberto-e-ala-de-quarto-privado-grande-terraco-com-privacidade_1258-169741.jpg"
                alt="Imagem principal de uma casa de luxo"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
            </ImageContainer>
            <BoxDetailsLarge>
              <Left>
                <p>CA0257-POU4</p>
                <h2>Casa Alphaville</h2>
              </Left>

              <Right>
                <Item>
                  <Detail>
                    <Info src={iconArea} content="1.000m2" />
                  </Detail>
                </Item>
                <Item>
                  <Detail>
                    <Info src={iconArea} content="4 quartos" />
                  </Detail>
                </Item>
                <Item>
                  <Detail>
                    <Info src={iconArea} content="2 suites" />
                  </Detail>
                </Item>
                <Item>
                  <Detail>
                    <Info src={iconArea} content="2 vagas" />
                  </Detail>
                </Item>
              </Right>
            </BoxDetailsLarge>
          </ImageContentLarge>
        </VStack>
      ) : (
        <>
          <HStack>
            <Informations src={houseOne} />
            <SecondaryContent />
          </HStack>
          <HStack>
            <SecondaryContent />
            <Informations src={houseOne} />
          </HStack>
        </>
      )}
    </Container>
  );
};

export default BestSearchHouses;
