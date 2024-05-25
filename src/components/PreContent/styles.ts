import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  padding: 0 50px 0 0;
  justify-content: space-between;
  margin-top: 42px;

  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
    padding: 0;
    gap: 18px;
    margin-top: 18px;
    margin-bottom: 12px;
  }
`;

export const HStack = styled.div`
  display: flex;
  position: relative;
  width: 347px;
  align-items: center;
  gap: 30px;

  h3 {
    font-size: 40px;
  }

  @media (max-width: 1200px) {
    width: 100%;

    h3 {
      font-size: 32px;
    }
  }
`;

export const Centralize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto;
`;
