"use client";

import React, { HTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styles";

type Props = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  width: string;
  height: string;
};

const Button: React.FC<Props> = ({ width, height, children, ...rest }) => {
  return (
    <StyledButton width={width} height={height} {...rest}>
      {children}
    </StyledButton>
  );
};
export default Button;
