"use client";

import React, { useEffect, useState } from "react";

import { Box, Container, ContentButton, Row } from "./styles";
import HeaderSpecific from "@/components/HeaderSpecific";
import SwitchCustom from "@/components/SwitchCustom";
import CustomButton from "@/components/CustomButton";
import ButtonFilter from "@/components/ButtonFilter";
import SearchNew from "@/components/SearchNew";

import arrowIcon from "@/assets/arrowIconFilter.svg";
import bedIcon from "@/assets/bedIconFilter.svg";
import carIcon from "@/assets/carroFilter.svg";
import buildIcon from "@/assets/predioFilter.svg";
import moneyIcon from "@/assets/moneyFilter.svg";
import ListCatalog from "@/components/ListCatalog";
import PreContentNew from "@/components/PreContentNew";
import HousesByRegion from "@/components/HousesByRegion";
import Footer from "@/shared/components/Footer";
import { useDevice } from "@/hooks/useDevice";
import Header from "@/components/Header";
import BestSearchHouses from "@/components/BestSearchHouses";
import PreContent from "@/components/PreContent";

const SearchPage: React.FC = () => {
  const { isDevice } = useDevice();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Marca o estado como pronto após a montagem do componente
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <Container>
        {!isDevice ? <HeaderSpecific isSearch /> : <Header />}
        <Box>
          <SwitchCustom />
          <Row>
            <ButtonFilter src={arrowIcon} title={"Pretensão"}></ButtonFilter>
            <ButtonFilter src={bedIcon} title={"Pretensão"}></ButtonFilter>
            <ButtonFilter src={carIcon} title={"Pretensão"}></ButtonFilter>
            <ButtonFilter src={bedIcon} title={"Pretensão"}></ButtonFilter>
          </Row>
          {true && (
            <Row gridEnd={"span 2"}>
              <ButtonFilter src={buildIcon} title={"Pretensão"}></ButtonFilter>
              <ButtonFilter src={moneyIcon} title={"Pretensão"}></ButtonFilter>
              <SearchNew />
            </Row>
          )}

          <ContentButton>
            <CustomButton title="Encontrar imóvel" />
          </ContentButton>
        </Box>

        {isDevice ? <BestSearchHouses /> : <ListCatalog paddingLeft="0" />}

        <PreContent
          callback={() => {}}
          buttonLabel="Conheça nossa história"
          src={buildIcon}
          content="Imóveis por região"
          avoidDisplayButton
        />

        <HousesByRegion />
      </Container>
      <Footer margin="72px" />
    </>
  );
};

export default SearchPage;
