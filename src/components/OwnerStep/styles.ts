import styled from "styled-components";

// export const Container = styled.div``;

export const HStack = styled.div`
  display: flex;
  width: 100%;
  /* height: 100%; */
  /* margin-top: 24px; */
  gap: 32px;
  margin-bottom: 16px;
  /* background-color: red; */

  input {
    margin-bottom: 10px;
  }
`;

export const VStack = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  gap: 10px;
`;
