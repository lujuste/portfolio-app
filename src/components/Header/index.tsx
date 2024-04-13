"use client";

import React from "react";
import { StyledHeader } from "./styles";
import { Navigator } from "../Navigator";
import Logo from "../../assets/logo-black.svg";
import Image from "next/image";

const Header: React.FC = () => {
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
