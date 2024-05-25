"use client";
import styled from "styled-components";

export const MainContent = styled.main`
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 50px;
  overflow-x: hidden;

  @media (max-width: 1200px) {
    padding: 20px 20px;
  }
`;

export const MaxWidth = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
