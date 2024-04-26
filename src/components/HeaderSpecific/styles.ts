import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  /* background-color: red; */
  margin: 0 auto;
  align-items: center;
  padding: 0 0px;
  margin-top: 33px;
  position: relative;

  > div {
    margin-left: 87px;
    /* transform: translateX(38px); */
  }

  > ul {
    /* background-color: red; */
    display: flex;
    text-decoration: none;
    justify-content: space-between;
    list-style-type: none;
    gap: 38px;
    text-decoration: none;
    color: inherit;
    min-width: 40%;
    /* margin-right: 48px; */

    li {
      text-decoration: none;
    }

    a {
      text-decoration: none;
    }
  }
`;

export const RightMenu = styled.div`
  width: 211px;
  max-width: 211px;
  display: flex;
  align-items: center;
  /* background-color: blue; */
  height: 48px;
  border: 2px solid #cccccc;
  border-right: none;
  padding: 0 22px;
  gap: 10px;

  p {
    font-size: 14px;
    color: #727272;
    font-weight: 700;
    font-family: Inter;
  }
`;
export const SearchMenu = styled.div`
  width: 211px;
  max-width: 211px;
  display: flex;
  align-items: center;
  /* background-color: blue; */
  height: 48px;
  border: 2px solid #cccccc;
`;

export const HStack = styled.div`
  display: flex;
  margin-left: auto;
  width: 100%;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  width: 72px;
  height: 48px;
  background-color: #d71016;
  border: none;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: none;
  border: none;

  &::placeholder {
    font-size: 14px;
    color: #727272;
    font-weight: 700;
    font-family: Inter;
    padding: 0 32px;
  }
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LineDivider = styled.div`
  padding: 0 0px;
  margin-top: 20px;
  width: 100%;
  display: flex;

  > div {
    width: 1366px;
    height: 1.7px;
    background-color: #bdbdbd;
  }
`;
