import React from "react";

import {
  Container,
  DetailsHorizontal,
  HStack,
  HStackWithoutMargin,
  LeftContent,
  Main,
  RightContent,
} from "./styles";
import Image from "next/image";
import ItemDetail from "../ItemDetail";

import reguaIcon from "@/assets/regua.svg";
import carIcon from "@/assets/carro.svg";
import roomIcon from "@/assets/cama.svg";

const DescriptionSpecific: React.FC = () => {
  return (
    <Container>
      <HStack>
        <h3>Casa Jardim Bueno 300m²</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </HStack>

      <Main>
        <LeftContent>
          <DetailsHorizontal>
            <ItemDetail src={reguaIcon} title="300m²" />
            <ItemDetail src={roomIcon} title="4 Quartos" />
            <ItemDetail src={carIcon} title="2 Vagas" />
            <ItemDetail src={roomIcon} title="4 Quartos" />
          </DetailsHorizontal>

          <div className="line"></div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. Lorem Ipsum has been the standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. Lorem Ipsum has been the standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </LeftContent>
        <RightContent
          src={
            "https://cdn.uso.com.br/16744/2022/03/31a0fdc4e1d28e6b9cbf5c78bb24db9d.jpg"
          }
        ></RightContent>
      </Main>

      <HStackWithoutMargin>
        <h4>Tenha momentos inesquecíveis com área de lazer completa. </h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </HStackWithoutMargin>

      <Main>
        <RightContent
          src={
            "https://grantec.com.br/wp-content/uploads/2021/10/casa-alto-padrao-01.jpg"
          }
        ></RightContent>
        <RightContent
          src={"https://www.iprojetei.com.br/upload/1190/1920x1080.jpg"}
        ></RightContent>
      </Main>

      <HStack>
        <h3>Vídeo do imóvel</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </HStack>
    </Container>
  );
};

export default DescriptionSpecific;
