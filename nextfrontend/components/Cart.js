import { useStateContext } from "@/lib/context";
import {
  CartWrapper,
  CartsStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Quantity,
  Checkout,
  Cards,
} from "@/styles/CartStyle";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import getStripe from "@/lib/getStripe";
import { CardElement } from "@stripe/react-stripe-js";
// import { delay } from "framer-motion";

// const { motion } = require("framer-motion") Added in Style Page

const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export default function Cart() {
  const { cartItems, setShowCart, qnty, onAdd, onRemove, TotalPrice } =
    useStateContext();

  //Payment
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    await stripe.redirectToCheckout({
      sessionId: data.id,
    });
  };

  return (
    <CartWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <CartsStyle
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        exit={{ x: "50%" }}
        transition={{ type: "tween" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* If it is below 1 then text will display */}
        {cartItems.length < 1 && (
          <EmptyStyle
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <h2>A Lot of Books are just waiting for you, pick them 😌</h2>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {/* If it is Above or Equal to 1 then details will display */}
        <Cards layout variants={cards} initial="hidden" animate="show">
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <Card layout variants={card} key={item.slug}>
                  <img
                    src={item.Book_Image.data.attributes.formats.small.url}
                    alt={item.Title}
                  />
                  <CardInfo>
                    <h2>{item.Title}</h2>
                    <h4>Rs. {item.Price}</h4>
                    <Quantity>
                      <span>Copies</span>
                      <div>
                        <button onClick={() => onRemove(item, 1)}>
                          <AiFillMinusCircle />
                        </button>
                        <p>{item.qnty}</p>
                        <button
                          onClick={() => onAdd(item, 1)}
                          disabled={qnty >= item.Copies_Available}
                        >
                          <AiFillPlusCircle />
                        </button>
                      </div>
                    </Quantity>
                  </CardInfo>
                </Card>
              );
            })}
        </Cards>
        {cartItems.length >= 1 && (
          <div>
            <Checkout layout>
              <h4>Subtotal: Rs.{TotalPrice}/-</h4>
              <button onClick={handleCheckout}>Purchase</button>
            </Checkout>
          </div>
        )}
      </CartsStyle>
    </CartWrapper>
  );
}
