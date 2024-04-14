import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 242px;
  background-color: #000;
  display: flex;
  margin-top: 72px;
`;

export const EndFooter = styled.footer`
  width: 100%;
  min-height: 45px;
  background-color: #000;
  display: flex;
  background-color: #d71016;
  padding: 0 50px;
  align-items: center;
  justify-content: center;

  p {
    font-size: 16px;
    color: #fff;
    font-weight: 300;
  }
`;

export const TotalRightBox = styled.div`
  display: flex;
  margin-left: auto;
  gap: 62px;
  align-items: center;
  justify-content: center;
`;

export const List = styled.div`
  flex-direction: column;
  display: flex;
  min-width: 100px;
  margin-left: 36px;
`;

export const BoxContacts = styled.div`
  flex: 0.7;
  display: flex;
  margin-left: auto;
  margin-top: 51px;

  ul {
    li {
      font-size: 16px;
      margin-top: 12px;
      list-style: none;
      color: #fff;
      font-weight: 300;
    }
  }
`;

export const MaxWidth = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0 20px;
`;

export const BoxLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  h3 {
    font-size: 16px;
    color: #c4c4c4;
    margin-left: 2.6rem;
  }
`;
