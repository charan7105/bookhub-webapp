import styled from "styled-components";

// const { motion } = require ("framer-motion")
import { motion } from "framer-motion";
// import { motion } from "framer-motion";

export const CartWrapper = styled(motion.div)`
  font-family: inter;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  /* visibility: hidden; */

  h2 {
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }

  h4 {
    /* padding-bottom: 0.4rem; */
    font-weight: 600;
    color: var(--secondary);
  }
`;

export const CartsStyle = styled(motion.div)`
  width: 30%;
  background-color: #f1f1f1;
  padding: 3rem 4rem;
  overflow-y: scroll;
  position: relative;
`;

// export const

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-radius: 1rem; */
  img {
    /* height: 10rem; */
    max-width: 7rem;
    border-radius: 0.2rem
  }
  margin-bottom: 2rem;
`;

export const CardInfo = styled(motion.div)`
  width: 50%;
  h2 {
    font-size: 1.2rem;
    font-weight: 800;
  }

  div {
    display: flex;
    flex-direction: space-between;
  }
`;
export const EmptyStyle = styled(motion.div)`
  position: absolute;
  h2{
    font-size: 1.4rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  top: 0%;
  /* left: 50%; */
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  
  svg {
    font-size: 6rem;
    color: #5353537e;
  }
`;

export const Quantity = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0rem;

  div{
    display: flex;
    align-items: center;
  }

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

export const Checkout = styled(motion.div)`
  button {
    background: var(--primary);
    padding: 0.7rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
  }
`;

export const Cards = styled(motion.div)`
  
`