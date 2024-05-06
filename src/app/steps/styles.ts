import { StaticImageData } from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 1366px;
  min-height: 720px;
  display: flex;
  flex: 1;
  /* background-color: red; */
  margin: 0 auto;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  font-family: Inter, sans-serif;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin-left: 7px;
`;

export const ImageWrapper = styled.div<{ url?: string | StaticImageData }>`
  width: 100%;
  height: 100%;
  display: flex;
  background-image: ${({ url }) => url && `url(${url})`};
  min-height: 720px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* background-color: green; */
  min-height: 689px;
  padding: 28px;
`;

export const Content = styled.div`
  width: 100%;
  /* background-color: yellow; */

  display: flex;
  min-height: 665px;
  /* justify-content: space-between; */
  flex-direction: column;

  .divider {
    width: 100%;
    height: 2px;
    background-color: #bdbdbd;
    display: flex;
    margin-top: 20px;
  }

  h2 {
    /* width: 339px; */
    font-size: 40px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 30px;
  }

  p {
    color: #12100c;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Header = styled.div`
  /* background-color: blue; */
  display: flex;
  height: 77px;
  width: 100%;
  align-items: center;
  padding: 0 10px;

  > div {
    display: flex;
  }

  > ul {
    /* background-color: red; */
    display: flex;
    text-decoration: none;
    justify-content: space-between;
    list-style-type: none;
    gap: 62px;
    text-decoration: none;
    color: inherit;
    margin-left: auto;
    /* margin-right: 48px; */

    li {
      text-decoration: none;
    }

    a {
      text-decoration: none;
    }
  }
`;
