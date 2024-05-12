import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  /* background-color: red; */
  display: flex;
  margin-top: 12px;
  flex-direction: column;

  p {
    color: black;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #525252;
  margin: 0 auto;
  font-weight: 600;
  margin-bottom: 22px;
`;
