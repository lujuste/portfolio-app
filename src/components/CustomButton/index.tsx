import React, { HTMLAttributes, ReactNode } from "react";

import { Button } from "./styles";

type Props = HTMLAttributes<HTMLButtonElement> & {
  title: string;
  height?: string;
  children?: ReactNode;
};

const CustomButton: React.FC<Props> = ({
  title,
  height = "63px",
  children,
  ...rest
}) => {
  return (
    <Button height={height} {...rest}>
      {children && children}
      {title}{" "}
    </Button>
  );
};

export default CustomButton;
