import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi"
import logoDark from '../public/logo-dark.png'
import { NavbarStyle } from "@/styles/NavStyle";


export default function Nav() {

  console.log({logoDark})
  
  return (
    <NavbarStyle>
      <img src={logoDark.src} alt="BookHub Logo"/>
      <div>
        <FiShoppingBag/>
        <p>Cart</p>
      </div>
    </NavbarStyle>
  );
}