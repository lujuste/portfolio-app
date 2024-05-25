import React from "react";
import { Main, HStack, MaxWidth, ImageContainer, ImageContent } from "./styles";
import Informations from "../Informations";
import houseOne from "@/assets/casa.png";
import { useDevice } from "@/hooks/useDevice";
import Image from "next/image";

const KnowUs: React.FC = () => {
  const { isDevice } = useDevice();

  return (
    <Main>
      <HStack>
        {!isDevice && <Informations disabledInfos src={houseOne} />}
        {!isDevice && (
          <MaxWidth>
            <p>
              Nossa história começa a 17 anos atrás, em maio de 2006, quando
              nosso atual CEO - Chief Executive Officer, Reginaldo Abdala,
              resolveu fundar a Portfolio Imóveis. No início era ele, alguns
              corretores e um sonho. <br /> <br />
              Naquela época pouquíssimas pessoas e empresas vendiam Jardins FGR.
              A quantidade de tempo de mercado e a ramificação da marca foi um
              grande diferencial na construção da Portfolio. Em 2011 nasce uma
              segunda parte do projeto, A Portfolio Desenvolvimento Urbano que é
              criada com o intuito central em parcelamento de solo urbano como
              loteamentos e condomínios, onde eram desenvolvidas a gestão de
              aprovações de projetos e gestão comercial. <br /> <br />
              Em 2013 mais um passo é dado rumo ao sucesso, nasce a Portfolio
              Participações, que é uma empresa voltada para a planejamento e
              execução de loteamentos, foi aí que começamos com nossos
              empreendimentos próprios, e só após sete anos do último lançamento
              a vem terceira parte do projeto: A primeira imobiliária boutique
              do Centro Oeste do país com a loja do Jardim Goiás no Metropolitan
              Mall, com o intuito de atender não só a FGR mas também a todas
              outras incorporadoras, Em 2021 foi criado a Portfolio S.A
              Fazendas, com ênfase na comercialização de fazendas do
              agronegócio.
              <br /> <br /> Essa ação foi a cereja do bolo, a loja veio para
              abarcar todo o segmento do mercado imobiliário nos colocando como
              uma das poucas completas no segmento do mercado imobiliário com
              venda de imóveis urbanos, rurais, aluguéis, áreas para
              incorporação, lançamentos imobiliários e revenda. <br /> <br />
              Esse foi um pequeno resumo sobre nossa trajetória, ainda é cedo
              para confirmar se paramos por aqui. Ficou curioso? Nos acompanhe
              em nossas redes, estamos chegando com uma versão 2.0.
            </p>
          </MaxWidth>
        )}

        {isDevice && (
          <MaxWidth>
            <p>
              Nossa história começa a 17 anos atrás, em maio de 2006, quando
              nosso atual CEO - Chief Executive Officer, Reginaldo Abdala,
              resolveu fundar a Portfolio Imóveis. No início era ele, alguns
              corretores e um sonho. <br /> <br />
              Naquela época pouquíssimas pessoas e empresas vendiam Jardins FGR.
              A quantidade de tempo de mercado e a ramificação da marca foi um
              grande diferencial na construção da Portfolio. Em 2011 nasce uma
              segunda parte do projeto, A Portfolio Desenvolvimento Urbano que é
              criada com o intuito central em parcelamento de solo urbano como
              loteamentos e condomínios, onde eram desenvolvidas a gestão de
              aprovações de projetos e gestão comercial. <br /> <br />
            </p>
          </MaxWidth>
        )}

        {isDevice && (
          <ImageContainer>
            <ImageContent>
              <Image
                src={houseOne}
                alt="Imagem principal de uma casa de luxo"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
            </ImageContent>
          </ImageContainer>
        )}

        {isDevice && (
          <MaxWidth>
            Em 2013 mais um passo é dado rumo ao sucesso, nasce a Portfolio
            Participações, que é uma empresa voltada para a planejamento e
            execução de loteamentos, foi aí que começamos com nossos
            empreendimentos próprios, e só após sete anos do último lançamento a
            vem terceira parte do projeto: A primeira imobiliária boutique do
            Centro Oeste do país com a loja do Jardim Goiás no Metropolitan
            Mall, com o intuito de atender não só a FGR mas também a todas
            outras incorporadoras, Em 2021 foi criado a Portfolio S.A Fazendas,
            com ênfase na comercialização de fazendas do agronegócio.
            <br /> <br /> Essa ação foi a cereja do bolo, a loja veio para
            abarcar todo o segmento do mercado imobiliário nos colocando como
            uma das poucas completas no segmento do mercado imobiliário com
            venda de imóveis urbanos, rurais, aluguéis, áreas para incorporação,
            lançamentos imobiliários e revenda. <br /> <br />
            Esse foi um pequeno resumo sobre nossa trajetória, ainda é cedo para
            confirmar se paramos por aqui. Ficou curioso? Nos acompanhe em
            nossas redes, estamos chegando com uma versão 2.0.
          </MaxWidth>
        )}
      </HStack>
    </Main>
  );
};

export default KnowUs;
