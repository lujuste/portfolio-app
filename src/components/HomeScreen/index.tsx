"use client";
import React, { useCallback, useState } from "react";
import imovelIcon from "@/assets/imoveis.svg";
import arrowIcon from "@/assets/arrow.svg";
import {
  Container,
  ContainerDevice,
  HStack,
  HStackCustom,
  HStackHero,
  Horizontal,
  ImageContainer,
  ImageContent,
  SelectStyled,
  VStack,
} from "./styles";
import Image from "next/image";
import Search from "../Search";
import CustomButton from "../CustomButton";
import HeroMain from "../HeroMain";
import { useDevice } from "@/hooks/useDevice";
import { RadialContainer } from "../HeroMain/styles";
import { useRouter } from "next/navigation";

const HomeScreen: React.FC = () => {
  const [imageExpanded, setImageExpanded] = useState({
    visible: 1,
  });

  const router = useRouter();

  const { isDevice } = useDevice();

  const handleChangeImageExpanded = useCallback((value: number) => {
    setImageExpanded((prevState) => {
      return {
        ...prevState,
        visible: value,
      };
    });
  }, []);

  if (isDevice) {
    return (
      <ContainerDevice>
        <h2>Realize seu sonho aqui</h2>

        <Horizontal>
          <SelectStyled>
            <Image
              src={arrowIcon}
              width={16}
              height={19}
              alt="Icone de seta."
            />
            <span>Pretensão</span>
          </SelectStyled>

          <SelectStyled>
            <Image
              src={imovelIcon}
              width={24}
              height={24}
              alt="Icone de imovel."
            />
            <span>Tipo de imóvel</span>
          </SelectStyled>
        </Horizontal>
        <Search />
        <CustomButton
          onClick={() => {
            console.log("clico");
            router.push("/search");
          }}
          title="Encontrar imóvel"
        />
        <Horizontal>
          <ImageContent>
            <RadialContainer />
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
            <span>Jardim Bueno</span>
          </ImageContent>

          <ImageContent>
            <RadialContainer />
            <ImageContainer>
              <Image
                src="https://img.freepik.com/fotos-premium/exterior-de-casa-bonita-e-moderna-com-grama-verde_293060-14722.jpg"
                alt="Imagem principal de uma casa de luxo"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
            </ImageContainer>
            <span>Casa Alphaville</span>
          </ImageContent>
        </Horizontal>
      </ContainerDevice>
    );
  }

  return (
    <Container>
      <HStack>
        <VStack>
          <h2>Realize seu sonho aqui</h2>
          <HStackCustom>
            <SelectStyled>
              <Image
                src={arrowIcon}
                width={16}
                height={19}
                alt="Icone de seta."
              />
              <span>Pretensão</span>
            </SelectStyled>

            <SelectStyled>
              <Image
                src={imovelIcon}
                width={24}
                height={24}
                alt="Icone de imovel."
              />
              <span>Tipo de imóvel</span>
            </SelectStyled>
          </HStackCustom>

          <Search />

          <CustomButton
            onClick={() => {
              console.log("clico");
              router.push("/search");
            }}
            title="Encontrar imóvel"
          />
        </VStack>

        <HStackHero className="box-primary-images">
          <HeroMain
            onMouseEnter={() => handleChangeImageExpanded(1)}
            isExpanded={imageExpanded.visible === 1}
            src={
              "https://img.freepik.com/fotos-gratis/design-house-villa-moderna-com-sala-de-estar-em-plano-aberto-e-ala-de-quarto-privado-grande-terraco-com-privacidade_1258-169741.jpg"
            }
            text={"Jardim Bueno"}
          />

          <HeroMain
            onMouseEnter={() => handleChangeImageExpanded(2)}
            isExpanded={imageExpanded.visible === 2}
            src={
              "https://img.freepik.com/fotos-premium/exterior-de-casa-bonita-e-moderna-com-grama-verde_293060-14722.jpg"
            }
            text={"Casa Alphaville"}
          />

          <HeroMain
            onMouseEnter={() => handleChangeImageExpanded(3)}
            isExpanded={imageExpanded.visible === 3}
            src={
              "https://static.vecteezy.com/system/resources/previews/028/114/564/non_2x/unique-industrial-architecture-house-in-daylight-realistic-ai-generative-free-photo.jpg"
            }
            text={"Jardim Veneza"}
          />
        </HStackHero>
      </HStack>
    </Container>
  );
};

export default HomeScreen;
