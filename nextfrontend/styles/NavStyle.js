import styled from "styled-components";

export const NavbarStyle = styled.div`
  /* height: 3rem; */
  /* width: 100%; */
  background-color: #00000019;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  img {
    width: 10rem;
  }
`;

export const NavItems = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  h4 {
    font-size: 0.75rem;
    padding: 0.25rem;
  }
  svg {
    font-size: 1.3rem;
  }
`;
