"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Button, Container } from "./styles";

// import { Container } from './styles';

const SwitchCustom: React.FC = () => {
  const [useSwitch, setUseSwitch] = useState(false);
  const [label, setLabel] = useState<"Alugar" | "Comprar">("Alugar");

  const handleChangeSwitch = useCallback(() => {
    setUseSwitch((prev) => !prev);
  }, []);

  return (
    <Container onClick={handleChangeSwitch} useSwitch={useSwitch}>
      <Button useSwitch={useSwitch}>{!useSwitch ? label : "Comprar"}</Button>
      <span style={{ pointerEvents: "none" }}>
        {" "}
        {!useSwitch ? "Comprar" : label}
      </span>
    </Container>
  );
};

export default SwitchCustom;
