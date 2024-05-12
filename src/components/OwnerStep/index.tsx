import React from "react";

import { HStack, VStack } from "./styles";
import { Input } from "@/app/imovel/styles";

const OwnerStep: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default OwnerStep;
