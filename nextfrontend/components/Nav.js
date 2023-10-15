import { FiShoppingBag } from "react-icons/fi";
import logoDark from "../public/logo-dark.png";
import { NavbarStyle, NavItems } from "@/styles/NavStyle";
import Link from "next/link";
import Cart from "../components/Cart";
import { useStateContext } from "@/lib/context";

export default function Nav() {

  const {showCart, setShowCart} = useStateContext()
  // console.log({ logoDark });
  return (
    <NavbarStyle>
      <Link href="/">
        <img src={logoDark.src} alt="BookHub Logo" />
      </Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          <FiShoppingBag />
          <h4>Cart</h4>
        </div>
      </NavItems>
      {showCart && <Cart/>}
    </NavbarStyle>
  );
}
