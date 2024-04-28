"use client";

import React from "react";

import { Box, Container, ContentButton, Row } from "./styles";
import HeaderSpecific from "@/components/HeaderSpecific";
import SwitchCustom from "@/components/SwitchCustom";
import CustomButton from "@/components/CustomButton";
import ButtonFilter from "@/components/ButtonFilter";
import Search from "@/components/Search";
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

const SearchPage: React.FC = () => {
  return (
    <>
      <Container>
        <HeaderSpecific isSearch />
        <Box>
          <SwitchCustom />
          <Row>
            <ButtonFilter src={arrowIcon} title={"Pretensão"}></ButtonFilter>
            <ButtonFilter src={bedIcon} title={"Pretensão"}></ButtonFilter>
            <ButtonFilter src={carIcon} title={"Pretensão"}></ButtonFilter>
            <ButtonFilter src={bedIcon} title={"Pretensão"}></ButtonFilter>
          </Row>
          <Row gridEnd={"span 2"}>
            <ButtonFilter src={buildIcon} title={"Pretensão"}></ButtonFilter>
            <ButtonFilter src={moneyIcon} title={"Pretensão"}></ButtonFilter>
            <SearchNew />
          </Row>

          <ContentButton>
            <CustomButton title="Encontrar imóvel" />
          </ContentButton>
        </Box>
        <ListCatalog paddingLeft="0" />

        <PreContentNew
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
