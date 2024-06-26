"use client";

import React from "react";

import {
  Button,
  Container,
  ContentBox,
  HStack,
  Input,
  LineDivider,
  RightMenu,
  SearchMenu,
  VStack,
  WrapperButton,
} from "./styles";
// import Link from "next/link";
import { StyledLink } from "../Navigator/styles";
import { usePathname } from "next/navigation";
import logo from "@/assets/LogoRed.svg";
import Image from "next/image";
import { MagnifyingGlass, WhatsappLogo } from "phosphor-react";
import buildIcon from "@/assets/build.svg";
import CustomButton from "../CustomButton";
import iconWhats from "@/assets/whatsicon.svg";

type Props = {
  isSearch?: boolean;
};

const HeaderSpecific: React.FC<Props> = ({ isSearch = false }) => {
  const pathname = usePathname();
  return (
    <VStack>
      <Container>
        <ul>
          <li>
            <StyledLink
              className={`link ${pathname === "/" ? "active" : ""}`}
              href="/"
            >
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/">Grupo Portfolio</StyledLink>
          </li>
          <li>
            <StyledLink
              className={`link ${pathname === "/imovel" ? "active" : ""}`}
              href="/imovel"
            >
              Imóveis
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/">Financiamentos</StyledLink>
          </li>
        </ul>

        <div style={{ cursor: "pointer" }}>
          <a href="/">
            <Image
              src={logo}
              width={73}
              height={73}
              quality={100}
              priority
              alt="logo-imobiliaria-portfolio"
              unoptimized
            />
          </a>
        </div>

        {isSearch ? (
          <ContentBox>
            <WrapperButton>
              <CustomButton title="Falar com um corretor" height="48px">
                <Image
                  width={24}
                  height={24}
                  alt="Whatsapp icone"
                  src={iconWhats}
                />
              </CustomButton>
            </WrapperButton>
          </ContentBox>
        ) : (
          <HStack>
            <RightMenu>
              <Image
                src={buildIcon}
                width={24}
                height={24}
                quality={100}
                priority
                alt="logo-imobiliaria-portfolio"
                unoptimized
              />
              <p>Tipo de imóvel</p>
            </RightMenu>
            <SearchMenu>
              <Input type="text" placeholder="Digite região..." />
            </SearchMenu>
            <Button>
              <MagnifyingGlass color="#fff" size={24} weight="bold" />
            </Button>
          </HStack>
        )}
      </Container>

      <LineDivider>
        <div />
      </LineDivider>
    </VStack>
  );
};

export default HeaderSpecific;
