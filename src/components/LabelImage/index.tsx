import React, { memo } from "react";

import { LabelImage as LabelStyled } from "./styles";

type Props = {
  text: string;
  isExpanded: boolean;
};

const LabelImage: React.FC<Props> = ({ text, isExpanded }) => {
  return (
    <LabelStyled isExpanded={isExpanded}>
      <span> {text} </span>{" "}
    </LabelStyled>
  );
};

export default memo(LabelImage);
