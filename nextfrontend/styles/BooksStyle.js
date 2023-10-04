import styled from "styled-components";

export const AllBooksStyle = styled.div`
  background-color: #e5e5e5;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 1.5rem;
  font-family: inter;
  border-radius: 10px;
  margin: 2rem;

  img {
    border-radius: 5px;
    cursor: pointer;
  }



  @media (max-width: 768px) {
    /* padding: 1rem;  */
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
