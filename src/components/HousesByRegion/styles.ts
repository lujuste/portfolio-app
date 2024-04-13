import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 72px;
  gap: 170px;
`;

export const List = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 54px;

  ul {
    margin-top: 24px;
    li {
      font-size: 16px;
      margin-top: 16px;
      list-style: none;
    }
  }
`;
