import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 20px;
  gap: 170px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 100px;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 80px;
    padding: 0px 20px;
  }

  @media (max-width: 460px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 120px;
    padding: 0px 20px;
  }
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

  @media (max-width: 1200px) {
    ul {
      margin-top: 12px;
      li {
        font-size: 16px;
        margin-top: 16px;
        list-style: none;
      }
    }
  }
`;
