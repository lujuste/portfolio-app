import React, { HTMLAttributes } from "react";

import { Button } from "./styles";

type Props = HTMLAttributes<HTMLButtonElement> & {
  title: string;
};

const CustomButton: React.FC<Props> = ({ title, ...rest }) => {
  return <Button {...rest}> {title} </Button>;
};

export default CustomButton;
