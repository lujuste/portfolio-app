import React from "react";
import { Container, FormText, HStack, VStack } from "./styles";
import { Input } from "@/app/imovel/styles";
import { Button } from "../CustomButton/styles";
import StepsUI from "../StepsUI";

type Props = {
  currentStep: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
};

const InitialComponent: React.FC<{
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setCurrentStep }) => {
  return (
    <>
      <h2>Encomende seu imóvel</h2>
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
      <Button onClick={() => setCurrentStep("1")} height="48px">
        Quero encontrar esse imóvel
      </Button>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nisi.
        Eveniet omnis, repellat non ut quasi quod voluptas ea fuga veniam
        perferendis hic molestiae aspernatur repellendus earum iste ab
        asperiores?
      </span>
    </>
  );
};

// import { Container } from './styles';

const StepsComponents: React.FC<Props> = ({ currentStep, setCurrentStep }) => {
  function nextStep() {
    setCurrentStep((prev) => {
      let clonePrev = prev;
      if (prev === "initial") {
        clonePrev = "1";
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

      {currentStep === "end" && (
        <Container>
          <h2>
            Tudo certo, um de nossos corretores entrará em contato em breve.{" "}
          </h2>
        </Container>
      )}

      <div style={{ width: "100%", display: "flex", marginTop: "auto" }}>
        {currentStep !== "initial" && currentStep !== "end" && (
          <>
            <button>Recuar</button>
            <button onClick={nextStep}>Avancar</button>
          </>
        )}
      </div>
    </>
  );
};

export default StepsComponents;
