import styled from "styled-components";

export const FormText = styled.textarea`
  border: 1px solid #979797;
  width: 100%;
  display: flex;
  height: 148px;
  overflow-y: auto;
  resize: none;
  padding: 20px;
  font-size: 14px;
  color: #a4a4a4;
  outline: none;
  font-family: Inter;
  margin-top: 1rem;

  &::placeholder {
    font-size: 14px;
    color: #a4a4a4;
    font-family: Inter;
  }
`;

export const VStack = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  gap: 10px;
`;

export const HStack = styled.div`
  display: flex;
  width: 100%;
  /* height: 100%; */

  gap: 32px;
  margin-bottom: 12px;
  /* background-color: red; */

  input {
    margin-bottom: 10px;
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  /* background-color: brown; */
  display: flex;
  align-items: center;

  h2 {
    font-size: 32px;
    font-weight: 600;
    width: 416px;
  }
`;
