"use client";

import React from "react";

import {
  Button,
  Container,
  HStack,
  Input,
  LineDivider,
  RightMenu,
  SearchMenu,
  VStack,
} from "./styles";
// import Link from "next/link";
import { StyledLink } from "../Navigator/styles";
import { usePathname } from "next/navigation";
import logo from "@/assets/LogoRed.svg";
import Image from "next/image";
import { MagnifyingGlass } from "phosphor-react";
import buildIcon from "@/assets/build.svg";

const HeaderSpecific: React.FC = () => {
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
            <StyledLink href="/about">Grupo Portfolio</StyledLink>
          </li>
          <li>
            <StyledLink href="/blog/hello-world">Imóveis</StyledLink>
          </li>
          <li>
            <StyledLink href="/blog/hello-world">Financiamentos</StyledLink>
          </li>
        </ul>

        <div>
          <Image
            src={logo}
            width={73}
            height={73}
            quality={100}
            priority
            alt="logo-imobiliaria-portfolio"
            unoptimized
          />
        </div>

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
      </Container>

      <LineDivider>
        <div />
      </LineDivider>
    </VStack>
  );
};

export default HeaderSpecific;
