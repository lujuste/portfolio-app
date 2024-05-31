import React from "react";
import { Container, Menu } from "./styles";
import { X } from "phosphor-react";

type Props = {
  onRequestClose(): void;
  isActive: boolean;
};

const MenuHamburguer: React.FC<Props> = ({ onRequestClose, isActive }) => {
  return (
    <Container isActive={isActive}>
      <Menu>
        <div
          onClick={onRequestClose}
          style={{ position: "absolute", top: "20px", right: "30px" }}
        >
          <X size={32} />
        </div>
        <span>Home</span>
        <span>Grupo Portfolio</span>
        <span>Imóveis</span>
        <span>Financiamentos</span>
        <span>Falar com corretor</span>
      </Menu>
    </Container>
  );
};

export default MenuHamburguer;
