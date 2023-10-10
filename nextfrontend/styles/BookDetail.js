import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    height: 30rem;
    /* max-height: 5%; */
    /* width: 50px; */
  }
  margin-top: 5%;
`;

export const DescriptionStyle = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  h2 {
    font-size: 2.3rem;
    letter-spacing: -0.1rem;
    margin-bottom: 1rem;
  }
  .des {
    letter-spacing: 0rem;
    font-size: 1rem;
    line-height: 120%;
    padding-bottom: 1rem;
  }

  h4 {
    padding-bottom: 0.4rem;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }

  svg {
    color: #494949;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
`;

export const CompleteDetailski = styled.div`
  margin: 0rem 2rem;
`;
