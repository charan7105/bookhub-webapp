import styled from "styled-components";

export const AllBooksStyle = styled.div`
  background-color: #dadada;
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

  
h2 {
  font-size: 1.2 rem;
  color: var(--primary);
  font-weight: 800;
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.Title {
  padding: 1rem 0rem 0.5rem 0rem;
  min-height: 5rem;
}

h4 {
  font-size: 1 rem;
  color: var(--secondary);
  font-weight: 500;
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  line-height: 150%;
}

img {
  max-width: 100%;
  height: auto;
}

h2::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #252525;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

h2:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

`;
