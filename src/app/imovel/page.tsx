"use client";

import React, { useEffect, useState } from "react";
import { MainContent } from "../styles";
import HeaderSpecific from "@/components/HeaderSpecific";
import {
  Button,
  Carrousel,
  FormBox,
  HStack,
  ImageContainer,
  ImageContent,
  Input,
  MobileDescription,
} from "./styles";
import buildIcon from "@/assets/construcao.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import reguaIcon from "@/assets/regua.svg";
import carIcon from "@/assets/carro.svg";
import roomIcon from "@/assets/cama.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import DescriptionSpecific from "@/components/DescriptionSpecific";
import Footer from "@/shared/components/Footer";
import { useDevice } from "@/hooks/useDevice";
import Header from "@/components/Header";
import ItemDetail from "@/components/ItemDetail";
import VideoArea from "@/components/VideoArea";
import { MapContent } from "@/components/DescriptionSpecific/styles";
import GoogleMap from "@/components/GoogleMap";
import PreContent from "@/components/PreContent";
import BestSearchHouses from "@/components/BestSearchHouses";

const SpecificPage: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const [delayImage, setDelayImage] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Marca o estado como pronto após a montagem do componente
    setIsReady(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDelayImage(true);
    }, 0);
  }, []);

  const { isDevice } = useDevice();

  if (!isReady) {
    return null;
  }

  return (
    <>
      <MainContent>
        {!isDevice ? <HeaderSpecific /> : <Header />}

        <HStack>
          {isDevice && (
            <>
              <h2>Casa Jardim Bueno 300m²</h2>
              <p>R$ 3.000.000,00</p>
            </>
          )}
          <Carrousel>
            <Swiper
              navigation={false}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
              className="mySwiper2"
              autoplay={{ delay: 2000 }} // Adicionando autoplay
            >
              <SwiperSlide>
                <Image
                  alt=""
                  src={
                    "https://meulugar.quintoandar.com.br/wp-content/uploads/2023/06/casa-de-luxo-7-1.jpg"
                  }
                  layout="fill"
                  className={"image"}
                  quality={1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt=""
                  src={
                    "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2020/04/Casa-de-luxo-frente-a-praia-em-Interlagos-Bahia-12.jpg"
                  }
                  layout="fill"
                  className={"image"}
                  quality={1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt=""
                  src={
                    "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2024/03/Casa-de-luxo-a-80-m-da-praia-a-venda-Guarajuba-44-1240x720.jpg"
                  }
                  layout="fill"
                  className={"image"}
                  quality={1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt=""
                  src={
                    "https://s2.glbimg.com/zQoB3zBXSzJORlOtbjgF1FeLo2I=/smart/e.glbimg.com/og/ed/f/original/2022/01/03/seed_pascoal_cozinha_hr02.jpg"
                  }
                  layout="fill"
                  className={"image"}
                  quality={1}
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={42}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                {delayImage && (
                  <Image
                    src={
                      "https://meulugar.quintoandar.com.br/wp-content/uploads/2023/06/casa-de-luxo-7-1.jpg"
                    }
                    width={178}
                    height={174}
                    alt="Icone de area"
                  />
                )}
              </SwiperSlide>
              <SwiperSlide>
                {delayImage && (
                  <Image
                    src={
                      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2024/03/Casa-de-luxo-a-80-m-da-praia-a-venda-Guarajuba-44-1240x720.jpg"
                    }
                    width={178}
                    height={174}
                    alt="Icone de area"
                  />
                )}
              </SwiperSlide>
              <SwiperSlide>
                {delayImage && (
                  <Image
                    src={
                      "https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2020/04/Casa-de-luxo-frente-a-praia-em-Interlagos-Bahia-12.jpg"
                    }
                    width={178}
                    height={174}
                    alt="Icone de area"
                  />
                )}
              </SwiperSlide>
              <SwiperSlide>
                {delayImage && (
                  <Image
                    src={
                      "https://s2.glbimg.com/zQoB3zBXSzJORlOtbjgF1FeLo2I=/smart/e.glbimg.com/og/ed/f/original/2022/01/03/seed_pascoal_cozinha_hr02.jpg"
                    }
                    width={178}
                    height={174}
                    alt="Icone de area"
                  />
                )}
              </SwiperSlide>
            </Swiper>
          </Carrousel>

          {/* corpo mobile */}
          {
            <FormBox>
              {!isDevice && (
                <>
                  <h3>Casa Jardim Bueno 300m²</h3>
                  <h4>R$ 3.000.000,00</h4>
                </>
              )}
              <label>Nome</label>
              <Input />
              <label>E-mail</label>
              <Input />
              <label>Telefone</label>
              <Input />
              <Button>
                <p>Quero mais informações</p>
              </Button>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </span>
            </FormBox>
          }

          {isDevice && (
            <MobileDescription>
              <h2>Casa Jardim Bueno 300m²</h2>

              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </span>

              <div className="items-imovel">
                <div
                  style={{
                    marginBottom: "30px",
                    borderBottom: "1px solid #000",
                    height: "130px;",
                  }}
                >
                  <ItemDetail src={reguaIcon} title="300m²" />
                  <ItemDetail src={roomIcon} title="4 Quartos" />
                </div>
                <div style={{ marginTop: "-10px" }}>
                  <ItemDetail src={carIcon} title="2 Vagas" />
                  <ItemDetail src={roomIcon} title="4 Quartos" />
                </div>
              </div>
              <ImageContent>
                <ImageContainer>
                  <Image
                    src="https://img.freepik.com/fotos-gratis/design-house-villa-moderna-com-sala-de-estar-em-plano-aberto-e-ala-de-quarto-privado-grande-terraco-com-privacidade_1258-169741.jpg"
                    alt="Imagem principal de uma casa de luxo"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                  />
                </ImageContainer>
              </ImageContent>

              <div style={{ margin: "32px 0" }}>
                <span className="text-description-imovel">
                  Lorem Ipsum has been the standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  <br /> <br />
                  Lorem Ipsum has been the standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                  <br />
                  <br />
                  Lorem Ipsum has been the standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                  <br />
                  <br />
                  Lorem Ipsum has been the standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry. \n
                  Lorem Ipsum has been the standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </span>
              </div>

              <Button>
                <p>Quero mais informações</p>
              </Button>

              <h2>Vídeo do imóvel</h2>

              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </span>

              <VideoArea />

              <h2>Marcar visita</h2>

              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </span>
              <div
                style={{
                  width: "100%",
                  height: "355px",
                  display: "flex",
                  background: "red",
                  marginTop: "32px",
                }}
              >
                <GoogleMap />
              </div>

              {isDevice && (
                <div style={{ margin: "32px 0" }}>
                  <h2>Casa Jardim Bueno 300m²</h2>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "-24px",
                    }}
                  >
                    R$ 3.000.000,00
                  </p>
                </div>
              )}

              <FormBox>
                {!isDevice && (
                  <>
                    <h3>Casa Jardim Bueno 300m²</h3>
                    <h4>R$ 3.000.000,00</h4>
                  </>
                )}
                <label>Nome</label>
                <Input />
                <label>E-mail</label>
                <Input />
                <label>Telefone</label>
                <Input />
                <Button>
                  <p>Quero mais informações</p>
                </Button>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </span>
              </FormBox>

              <PreContent
                callback={() => {}}
                buttonLabel="Ver todos os imóveis"
                src={buildIcon}
                content="Imóveis Sugeridos"
                avoidDisplayButton
              />

              <BestSearchHouses />
            </MobileDescription>
          )}
        </HStack>

        {!isDevice && <DescriptionSpecific />}
      </MainContent>
      <Footer margin="0"></Footer>
    </>
  );
};

export default SpecificPage;
