import React from "react";
import { FormText, HStack, VStack } from "./styles";
import { Input } from "@/app/imovel/styles";

// import { Container } from './styles';

const CharacteristStepSpecial: React.FC = () => {
  return (
    <>
      <HStack>
        <VStack>
          <label htmlFor="">O que torna o seu imóvel especial? </label>
          <FormText placeholder="Outras características que tornam o seu imóvel especial." />
        </VStack>
      </HStack>
    </>
  );
};

export default CharacteristStepSpecial;
