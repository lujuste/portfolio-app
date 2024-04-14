import React from "react";

import {
  BoxContacts,
  BoxLogo,
  Container,
  EndFooter,
  MaxWidth,
  List,
  TotalRightBox,
} from "./styles";
import Logo from "@/assets/logo-white.svg";
import Image from "next/image";
import redLogo from "@/assets/Modo_de_isolamento.svg";

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <MaxWidth>
          <BoxLogo>
            <Image
              src={Logo}
              quality={100}
              alt="logo-imobiliaria-portfolio"
              unoptimized
            />

            <h3>CRECI: 10930J || Política de Privacidade</h3>
          </BoxLogo>

          <BoxContacts>
            <List>
              <ul>
                <li>
                  <strong>Links úteis</strong>
                </li>
                <li>Encomende seu imóvel</li>
                <li>Cadastre seu imóvel</li>
                <li>Seja um parceiro</li>
              </ul>
            </List>
            <List>
              <ul>
                <li>
                  <strong>Financiamento</strong>
                </li>
                <li>Financiamento e bancos</li>
              </ul>
            </List>
            <List>
              <ul>
                <li>
                  <strong>Contato</strong>
                </li>
                <li>Fale conosco</li>
              </ul>
            </List>
          </BoxContacts>
        </MaxWidth>
      </Container>
      <EndFooter>
        <p>2024 © Copyright Portfolio imóveis</p>

        <TotalRightBox>
          <p>Desenvolvido por:</p>

          <Image
            src={redLogo}
            quality={100}
            width={19}
            height={24}
            alt="logo-imobiliaria-portfolio"
            unoptimized
          />
        </TotalRightBox>
      </EndFooter>
    </>
  );
};

export default Footer;