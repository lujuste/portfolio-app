import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  margin-left: auto;
  gap: 38px;
  align-items: center;

  .active {
    color: red;
  }

  .link .active {
    color: red;
  }

  > ul {
    display: flex;
    text-decoration: none;
    justify-content: space-between;
    list-style-type: none;
    gap: 38px;

    li {
      text-decoration: none;
    }
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  font-family: Inter, sans-serif;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin-left: 7px;
  transition: all 150ms linear;

  &:hover {
    color: #d71016;
  }

  .active {
    color: red;
  }

  .link .active {
    color: red;
  }
`;

export const VStack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font-family: Inter, sans-serif;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin-left: 7px;
  }
`;
