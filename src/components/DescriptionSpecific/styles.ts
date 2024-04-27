import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HStack = styled.div`
  width: 100%;
  display: flex;
  margin-top: 72px;
  justify-content: space-between;

  h3 {
    font-size: 40px;
    width: 330px;
  }

  h4 {
    font-size: 40px;
    width: 630px;
  }

  p {
    width: 400px;
  }
`;

export const HStackWithoutMargin = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 38px;

  h3 {
    font-size: 40px;
    width: 330px;
  }

  h4 {
    font-size: 40px;
    width: 630px;
  }

  p {
    width: 400px;
  }
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  margin: 32px 0;
  gap: 32px;

  .line {
    width: 100%;
    height: 1px;
    background-color: #bdbdbd;
    display: flex;
    margin-bottom: 48px;
  }
`;

export const RightContent = styled.section<{ src: string }>`
  display: flex;
  width: 50%;
  background-image: ${({ src }) => src && `url(${src})`};
  min-height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LeftContent = styled.section`
  display: flex;
  width: 50%;
  min-height: 600px;
  flex-direction: column;
  .line {
    width: 100%;
    height: 1px;
    background-color: #bdbdbd;
    display: flex;
    margin-top: 13px;
  }

  p {
    font-size: 16px;
    margin-top: 50px;
  }
`;

export const VStackCustom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HStackCustom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 38px;
  gap: 30px;

  h3 {
    font-size: 40px;
    width: 330px;
  }

  h4 {
    font-size: 40px;
    width: 630px;
  }

  p {
    width: 400px;
  }
`;

export const Button = styled.button`
  background-color: #d71016;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  border: none;
  margin-top: 18px;
`;

export const DetailsHorizontal = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: green; */
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const MapContent = styled.div`
  display: flex;
  width: 50%;
  min-height: 500px;
  margin-top: 60px;
  /* background-color: yellow; */
`;

export const FormMapContent = styled.div`
  display: flex;
  width: 50%;
  min-height: 500px;
  /* background-color: red; */
  flex-direction: column;
  margin-top: 60px;

  h3 {
    width: 339px;
    font-size: 40px;
    font-weight: bold;
  }

  h4 {
    font-size: 24px;
    color: #000;
    font-weight: 400;
    margin: 18px 0;
  }

  label {
    margin: -18px 0 5px 0;
  }
`;
