"use client";
import Header from "@/components/Header";
import { MainContent } from "./styles";
import HomeScreen from "@/components/HomeScreen";
import PreContent from "@/components/PreContent";
import heartIcon from "@/assets/heart.svg";
import buildIcon from "@/assets/construcao.svg";
import BestSearchHouses from "@/components/BestSearchHouses";
import ListCatalog from "@/components/ListCatalog";
import KnowUs from "@/components/KnowUs";
import HousesByRegion from "@/components/HousesByRegion";
import Footer from "@/shared/components/Footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <MainContent>
        <Header />
        <HomeScreen />
        <PreContent
          callback={() => {
            router.push("/search");
          }}
          buttonLabel="Ver todos os imóveis"
          src={heartIcon}
          content="Imóveis mais buscados"
        />

        <BestSearchHouses />

        <PreContent
          callback={() => {
            router.push("/search");
          }}
          buttonLabel="Ver todos os imóveis"
          src={buildIcon}
          content="Novidades no catálogo"
        />

        <ListCatalog paddingLeft="50px" />

        <PreContent
          callback={() => {}}
          buttonLabel="Conheça nossa história"
          src={buildIcon}
          content="Nossa 
          história"
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
