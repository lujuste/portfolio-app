import React, { HTMLAttributes } from "react";
import { PresentationHero, RadialContainer } from "./styles";
import LabelImage from "../LabelImage";
import Image from "next/image";

// import { Container } from './styles';

type Props = HTMLAttributes<HTMLDivElement> & {
  text: string;
  src: string;
  isExpanded?: boolean;
};

const HeroMain: React.FC<Props> = ({
  text,
  src,
  isExpanded = false,
  ...rest
}) => {
  return (
    <PresentationHero {...rest} isExpanded={isExpanded}>
      <LabelImage isExpanded={isExpanded} text={text} />
      <RadialContainer />
      <Image
        src={src}
        alt="Imagem principal de uma casa de luxo"
        layout="fill"
        objectFit="cover"
        className="bgImage"
        quality={100}
        priority
      />
    </PresentationHero>
  );
};

export default HeroMain;
