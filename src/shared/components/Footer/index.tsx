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
import { useDevice } from "@/hooks/useDevice";

type Props = {
  margin: string;
};

const Footer: React.FC<Props> = ({ margin }) => {
  const { isDevice } = useDevice();

  if (isDevice) {
    return (
      <>
        <Container margin={margin}>
          <BoxLogo>
            <Image
              src={Logo}
              quality={100}
              alt="logo-imobiliaria-portfolio"
              unoptimized
            />

            <h3>
              CRECI: 10930J <br /> Política de Privacidade
            </h3>
          </BoxLogo>
          <BoxContacts>
            <List>
              <ul>
                <li>
                  <strong>Links úteis</strong>
                </li>
                <li>
                  <a href="/cadastrar">Encomende seu imóvel</a>
                </li>
                <li>
                  <a href="/steps">Cadastre seu imóvel</a>
                </li>
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
        </Container>
        <EndFooter>
          <MaxWidth>
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
          </MaxWidth>
        </EndFooter>
      </>
    );
  }

  return (
    <>
      <Container margin={margin}>
        <MaxWidth>
          <BoxLogo>
            <Image
              src={Logo}
              quality={100}
              alt="logo-imobiliaria-portfolio"
              unoptimized
              className="logo-image"
            />

            <h3>CRECI: 10930J || Política de Privacidade</h3>
          </BoxLogo>

          <BoxContacts>
            <List>
              <ul>
                <li>
                  <strong>Links úteis</strong>
                </li>
                <li>
                  <a href="/steps">Encomende seu imóvel</a>
                </li>
                <li>
                  <a href="/cadastrar">Cadastre seu imóvel</a>
                </li>
                <li>
                  <a href="/cadastrar">Seja um parceiro</a>
                </li>
              </ul>
            </List>
            <List>
              <ul>
                <li>
                  <strong>Financiamento</strong>
                </li>
                <li>
                  <a href="/cadastrar">Financiamento e bancos</a>
                </li>
              </ul>
            </List>
            <List>
              <ul>
                <li>
                  <strong> Contato</strong>
                </li>
                <li>
                  <a href="">Fale conosco</a>
                </li>
              </ul>
            </List>
          </BoxContacts>
        </MaxWidth>
      </Container>
      <EndFooter>
        <MaxWidth>
          <div>
            <p>2024 © Copyright Portfolio imóveis</p>
          </div>

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
        </MaxWidth>
      </EndFooter>
    </>
  );
};

export default Footer;
