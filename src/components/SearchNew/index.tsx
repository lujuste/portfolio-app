import React from "react";

import { Box, StyledInput } from "./styles";
import { MagnifyingGlass } from "phosphor-react";

const SearchNew: React.FC = () => {
  return (
    <Box>
      <MagnifyingGlass size={24} />
      <StyledInput placeholder="Digite condomínio, região, bairro, ou cidade"></StyledInput>
    </Box>
  );
};

export default SearchNew;
