import { FiShoppingBag } from "react-icons/fi";
import logoDark from "../public/logo-dark.png";
import { NavbarStyle, NavItems } from "@/styles/NavStyle";
import Link from "next/link";

export default function Nav() {
  // console.log({ logoDark });
  return (
    <NavbarStyle>
      <Link href="/">
        <img src={logoDark.src} alt="BookHub Logo" />
      </Link>
      <NavItems>
        <div>
          <FiShoppingBag />
          <h4>Cart</h4>
        </div>
      </NavItems>
    </NavbarStyle>
  );
}
