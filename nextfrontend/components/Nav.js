import { FiShoppingBag } from "react-icons/fi";
import logoDark from "../public/logo-dark.png";
import { NavbarStyle, NavItems } from "@/styles/NavStyle";
import Link from "next/link";
import Cart from "../components/Cart";
import { useStateContext } from "@/lib/context";

import { AnimatePresence, motion } from "framer-motion";

export default function Nav() {
  const { showCart, setShowCart, TotalQnty } = useStateContext();
  // console.log({ logoDark });
  return (
    <NavbarStyle>
      <Link href="/">
        <img src={logoDark.src} alt="BookHub Logo" />
      </Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {TotalQnty > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {TotalQnty}
            </motion.span>
          )}
          <FiShoppingBag />
          <h4>Cart</h4>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavbarStyle>
  );
}
