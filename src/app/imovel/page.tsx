"use client";

import React, { useEffect, useState } from "react";
import { MainContent } from "../styles";
import HeaderSpecific from "@/components/HeaderSpecific";
import { Button, Carrousel, FormBox, HStack, Input } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import DescriptionSpecific from "@/components/DescriptionSpecific";
import Footer from "@/shared/components/Footer";

const SpecificPage: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const [delayImage, setDelayImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDelayImage(true);
    }, 0);
  }, []);

  return (
    <>
      <MainContent>
        <HeaderSpecific />

        <HStack>
          <Carrousel>
            <Swiper
              navigation={false}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
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
          <FormBox>
            <h3>Casa Jardim Bueno 300m²</h3>
            <h4>R$ 3.000.000,00</h4>
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
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </span>
          </FormBox>
        </HStack>

        <DescriptionSpecific />
      </MainContent>
      <Footer margin="0"></Footer>
    </>
  );
};

export default SpecificPage;
