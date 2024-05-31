import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #d71016;
  gap: 11px;
  min-height: 64px;

  p {
    font-size: 16px;
    font-weight: 600;
    color: #000;

    @media (max-width: 1200px) {
      font-size: 14px;
    }
  }
`;
