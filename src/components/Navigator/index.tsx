"use client";

import { usePathname } from "next/navigation";

// import Link from "next/link";
import { StyledLink, StyledNav, VStack } from "./styles";
import Button from "../Button";

import whatsIcon from "../../assets/whatsapp.svg";
import Image from "next/image";

export function Navigator() {
  const pathname = usePathname();

  return (
    <StyledNav>
      <ul>
        <li>
          <StyledLink
            className={`link ${pathname === "/" ? "active" : ""}`}
            href="/"
          >
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            Grupo Portfolio
          </StyledLink>
        </li>

        <li>
          <StyledLink
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            Imóveis
          </StyledLink>
        </li>

        <li>
          <StyledLink
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            Financiamentos
          </StyledLink>
        </li>
      </ul>

      <Button width="280px" height="48px">
        <VStack>
          <Image
            quality={100}
            src={whatsIcon}
            width={24}
            height={24}
            alt="whatsapp-icon"
          />
          <p>Falar com um corretor</p>
        </VStack>
      </Button>
    </StyledNav>
  );
}
