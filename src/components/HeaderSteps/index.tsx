import React from "react";
import { Header } from "./styles";
import Image from "next/image";
import { StyledLink } from "../Navigator/styles";

// import { Container } from './styles';

type Props = {
  Logo: string;
};

const HeaderSteps: React.FC<Props> = ({ Logo }) => {
  return (
    <Header>
      <div style={{ cursor: "pointer" }}>
        <a href="/">
          <Image
            width={73}
            height={73}
            src={Logo}
            alt="Logo da imobiliaria portfolio"
          />
        </a>
      </div>

      <ul>
        <li>
          <StyledLink href="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink href="/">Grupo Portfolio</StyledLink>
        </li>

        <li>
          <StyledLink href="/imovel">Imóveis</StyledLink>
        </li>
      </ul>
    </Header>
  );
};

export default HeaderSteps;
