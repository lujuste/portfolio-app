"use client";

import React from "react";
import { Container, StyledHeader } from "./styles";
import { Navigator } from "../Navigator";
import Logo from "../../assets/logo-black.svg";
import NavIcon from "../../assets/nav.svg";
import Image from "next/image";
import { useDevice } from "@/hooks/useDevice";

const Header: React.FC = () => {
  const { isDevice, handleOpenMenu } = useDevice();

  if (isDevice) {
    return (
      <Container>
        <a href="/">
          <Image
            src={Logo}
            width={157}
            height={24}
            quality={100}
            alt="logo-imobiliaria-portfolio"
            unoptimized
          />
        </a>

        <div onClick={handleOpenMenu} style={{ cursor: "pointer" }}>
          <Image
            src={NavIcon}
            width={37}
            height={22}
            quality={100}
            alt="logo-imobiliaria-portfolio"
            unoptimized
          />
        </div>
      </Container>
    );
  }

  return (
    <StyledHeader>
      <div className="logo-imobiliaria">
        <Image
          src={Logo}
          width={259}
          height={40}
          quality={100}
          alt="logo-imobiliaria-portfolio"
          unoptimized
        />
      </div>

      <Navigator />
    </StyledHeader>
  );
};

export default Header;
