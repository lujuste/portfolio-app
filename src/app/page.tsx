"use client";
import Header from "@/components/Header";
import { MainContent, MaxWidth } from "./styles";
import HomeScreen from "@/components/HomeScreen";
import PreContent from "@/components/PreContent";
import heartIcon from "@/assets/heart.svg";
import buildIcon from "@/assets/construcao.svg";
import BestSearchHouses from "@/components/BestSearchHouses";
import ListCatalog from "@/components/ListCatalog";
import KnowUs from "@/components/KnowUs";
import HousesByRegion from "@/components/HousesByRegion";
import Footer from "@/shared/components/Footer";
import { useEffect, useState } from "react";
import { useDevice } from "@/hooks/useDevice";
import MenuHamburguer from "@/components/MenuHamburguer";

export default function Home() {
  const { isDevice, isMenu, handleCloseMenu, resizing } = useDevice();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Marca o estado como pronto após a montagem do componente
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  if (isDevice) {
    return (
      <>
        <MainContent>
          {isDevice && !resizing && (
            <MenuHamburguer
              onRequestClose={handleCloseMenu}
              isActive={isMenu}
            />
          )}
          <Header />
          <HomeScreen />
          <div style={{ marginTop: "32px" }}>
            <PreContent
              callback={() => {}}
              buttonLabel="Ver todos os imóveis"
              src={heartIcon}
              content="Imóveis mais buscados"
            />
          </div>
          <BestSearchHouses />

          <PreContent
            callback={() => {}}
            buttonLabel="Ver todos os imóveis"
            src={buildIcon}
            content="Novidades no catálogo"
          />

          <BestSearchHouses />

          <PreContent
            callback={() => {}}
            buttonLabel="Nossa história"
            src={buildIcon}
            content="Conheça nossa história"
          />

          <KnowUs />
          <PreContent
            callback={() => {}}
            buttonLabel="Conheça nossa história"
            src={buildIcon}
            content="Imóveis por região"
            avoidDisplayButton
          />

          <HousesByRegion />
        </MainContent>
        <MaxWidth>
          <Footer margin="72px" />
        </MaxWidth>
      </>
    );
  }

  return (
    <>
      <MainContent>
        <Header />
        <HomeScreen />
        <PreContent
          callback={() => {}}
          buttonLabel="Ver todos os imóveis"
          src={heartIcon}
          content="Imóveis mais buscados"
        />
        <BestSearchHouses />
        <PreContent
          callback={() => {}}
          buttonLabel="Ver todos os imóveis"
          src={buildIcon}
          content="Novidades no catálogo"
        />
        <ListCatalog paddingLeft="0px" />
        <PreContent
          callback={() => {}}
          buttonLabel="Conheça nossa história"
          src={buildIcon}
          content="Nossa história"
        />
        <KnowUs />
        <PreContent
          callback={() => {}}
          buttonLabel="Conheça nossa história"
          src={buildIcon}
          content="Imóveis por região"
          avoidDisplayButton
        />
        <HousesByRegion />
      </MainContent>
      <Footer margin="72px" />
    </>
  );
}
