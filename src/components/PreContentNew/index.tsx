import React from "react";
import { Centralize, Container, HStack } from "./styles";
import Image from "next/image";
import Button from "../Button";

type Props = {
  content: string;
  src: string;
  buttonLabel: string;
  callback: () => void;
  avoidDisplayButton?: boolean;
};

const PreContentNew: React.FC<Props> = ({
  content,
  src,
  buttonLabel,
  callback,
  avoidDisplayButton = false,
}) => {
  return (
    <Container>
      <HStack>
        <Image loading={"lazy"} src={src} width={38} height={38} alt="" />
        <h3>{content}</h3>
      </HStack>

      {!avoidDisplayButton && (
        <HStack>
          <Button onClick={callback} width={"398px"} height={"38px"}>
            <Centralize>{buttonLabel}</Centralize>
          </Button>
        </HStack>
      )}
    </Container>
  );
};

export default PreContentNew;
