import styled from "styled-components";

export const Header = styled.div`
  /* background-color: blue; */
  display: flex;
  min-height: 120px;
  width: 100%;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #bdbdbd;

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
