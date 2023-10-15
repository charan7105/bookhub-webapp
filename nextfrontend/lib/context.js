import Books from "@/components/Books";
import React, { createContext, useContext, useState } from "react";
import { AiTwotoneBook } from "react-icons/ai";

const shopContext = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [qnty, setQuantity] = useState(1);

  //Incresing Quantity
  const increaseQnty = () => {
    setQuantity((qnty) => qnty + 1);
  };

  //Decrease Quantity
  const decreaseQnty = () => {
    setQuantity((qnty) => {
      if (qnty - 1 < 1) {
        return 1;
      } else {
        return qnty - 1;
      }
    });
  };

  //Add Book to cart
  const onAdd = (product, qnty) => {
    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist) {
      // Calculate the total quantity after adding
      const totalQuantity = exist.qnty + qnty;

      // Check if the total quantity exceeds the available copies
      if (totalQuantity <= product.Copies_Available) {
        setCartItems(
          cartItems.map((item) =>
            item.slug === product.slug
              ? { ...exist, qnty: totalQuantity }
              : item
          )
        );
      } else {
        // Display a message or handle the case where adding more exceeds the limit
        console.log("Exceeds available copies limit.");
      }
    } else {
      // Check if adding the specified quantity exceeds the available copies
      if (qnty <= product.Copies_Available) {
        setCartItems([...cartItems, { ...product, qnty: qnty }]);
      } else {
        // Display a message or handle the case where adding more exceeds the limit
        console.log("Exceeds available copies limit.");
      }
    }
  };

  const onRemove = (product, decrementBy) => {
    const productIndex = cartItems.findIndex(
      (item) => item.slug === product.slug
    );

    if (productIndex !== -1) {
      const updatedCart = [...cartItems];
      if (updatedCart[productIndex].qnty > 1) {
        updatedCart[productIndex].qnty -= decrementBy;
      } else {
        updatedCart.splice(productIndex, 1);
      }
      setCartItems(updatedCart);
    }
  };

  return (
    <shopContext.Provider
      value={{
        qnty,
        increaseQnty,
        decreaseQnty,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        onAdd,
        onRemove,
      }}
    >
      {children}
    </shopContext.Provider>
  );
};

export const useStateContext = () => useContext(shopContext);
