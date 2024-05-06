import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  padding: 0 50px 0 0;
  justify-content: space-between;
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
`;

export const Centralize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto;
`;
