import React from "react";
import {
  Container,
  FormText,
  HStack,
  ImageContainer,
  ImageContainerEnd,
  ImageContent,
  ImageContentEnd,
  VStack,
} from "./styles";
import { Input } from "@/app/imovel/styles";
import { Button } from "../CustomButton/styles";
import StepsUI from "../StepsUI";
import Owner from "../RenderStepScreen";
import RenderStepScreen from "../RenderStepScreen";
import Image from "next/image";
import { useDevice } from "@/hooks/useDevice";

type Props = {
  currentStep: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
};

const InitialComponent: React.FC<{
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setCurrentStep }) => {
  const { isDevice } = useDevice();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // background: "red",
      }}
    >
      <h2>Encomende seu imóvel</h2>

      {isDevice && (
        <ImageContent>
          <ImageContainer>
            <Image
              src="https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150759.jpg?t=st=1717097446~exp=1717101046~hmac=f6e0031d174742804e857e422c1538061a06376e78887f57d97ccde3bf6f85eb&w=1380"
              alt="Imagem principal de uma casa de luxo"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </ImageContainer>
        </ImageContent>
      )}

      <p>Descreva as características abaixo:</p>
      <FormText placeholder="Ex. Desejo uma casa com dois dormitórios, garagem com duas vagas e duas suítes no bairro Jardim Bueno." />
      <HStack>
        <VStack>
          <label htmlFor="">E-mail</label>
          <Input />
        </VStack>

        <VStack>
          <label htmlFor="">Telefone</label>
          <Input />
        </VStack>
      </HStack>
      <Button onClick={() => setCurrentStep("end")} height="48px">
        Quero encontrar esse imóvel
      </Button>
      <span style={{ minHeight: "200px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nisi.
        Eveniet omnis, repellat non ut quasi quod voluptas ea fuga veniam
        perferendis hic molestiae aspernatur repellendus earum iste ab
        asperiores?
      </span>
    </div>
  );
};

// import { Container } from './styles';

const StepsComponents: React.FC<Props> = ({ currentStep, setCurrentStep }) => {
  function nextStep() {
    setCurrentStep((prev) => {
      let clonePrev = prev;
      if (prev === "initial") {
        clonePrev = "end";
      } else if (prev === "5") {
        clonePrev = "end";
      } else {
        let number = Number(prev);
        let result = (number += 1);
        clonePrev = String(result);
      }
      return clonePrev;
    });
  }

  const { isDevice } = useDevice();

  return (
    <>
      {currentStep === "initial" && (
        <InitialComponent setCurrentStep={setCurrentStep} />
      )}
      {currentStep !== "initial" && currentStep !== "end" && (
        <>
          <StepsUI currentStep={currentStep} />
        </>
      )}

      {currentStep !== "end" && currentStep !== "initial" && (
        <RenderStepScreen nextStep={nextStep} currentStep={currentStep} />
      )}

      {currentStep === "end" && (
        <Container>
          <h2>
            Tudo certo, um de nossos corretores entrará em contato em breve.{" "}
          </h2>

          {isDevice && (
            <ImageContentEnd>
              <ImageContainerEnd>
                <Image
                  src="https://img.freepik.com/fotos-gratis/ai-gerado-de-entrada-de-estilo-moderno_23-2150692385.jpg?t=st=1717097598~exp=1717101198~hmac=cea1aa6b82c5833c19ed376cf01a13ae35e4b813790d2a43f064cb4014547ef9&w=740"
                  alt="Imagem principal de uma casa de luxo"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority
                />
              </ImageContainerEnd>
            </ImageContentEnd>
          )}

          <p style={{ marginTop: "14px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Container>
      )}

      {/* <div style={{ width: "100%", display: "flex", marginTop: "auto" }}>
        {currentStep !== "initial" && currentStep !== "end" && (
          <>
            <button>Recuar</button>
            <button onClick={nextStep}>Avancar</button>
          </>
        )}
      </div> */}
    </>
  );
};

export default StepsComponents;
