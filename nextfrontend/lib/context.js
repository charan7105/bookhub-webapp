import Books from "@/components/Books";
import { Quantity } from "@/styles/CartStyle";
import React, { createContext, useContext, useState } from "react";
import { AiTwotoneBook } from "react-icons/ai";

const shopContext = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qnty, setQuantity] = useState(1);
  const [TotalQnty, SetTotalQnty] = useState(0);
  const [TotalPrice, SetTotalPrice] = useState(0);

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

  // Add Book to cart
  const onAdd = (product, quantity) => {
    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist) {
      // Calculate the total quantity after adding
      const totalQuantity = exist.qnty + quantity;

      // Check if the total quantity exceeds the available copies
      if (totalQuantity <= product.Copies_Available) {
        setCartItems(
          cartItems.map((item) =>
            item.slug === product.slug
              ? { ...exist, qnty: totalQuantity }
              : item
          )
        );

        // Update TotalPrice and TotalQnty
        SetTotalPrice((PrevPrice) => PrevPrice + product.Price * quantity);
        SetTotalQnty((PrevQnty) => PrevQnty + quantity);
      } else {
        // Display a message or handle the case where adding more exceeds the limit
        console.log("Exceeds available copies limit.");
      }
    } else {
      // Check if adding the specified quantity exceeds the available copies
      if (quantity <= product.Copies_Available) {
        setCartItems([...cartItems, { ...product, qnty: quantity }]);

        // Update TotalPrice and TotalQnty
        SetTotalPrice((PrevPrice) => PrevPrice + product.Price * quantity);
        SetTotalQnty((PrevQnty) => PrevQnty + quantity);
      } else {
        // Display a message or handle the case where adding more exceeds the limit
        console.log("Exceeds available copies limit.");
      }
    }
  };

  // Remove Book from cart
  const onRemove = (product, decrementBy) => {
    const productIndex = cartItems.findIndex(
      (item) => item.slug === product.slug
    );

    if (productIndex !== -1) {
      const updatedCart = [...cartItems];
      if (updatedCart[productIndex].qnty > 1) {
        // Calculate the total quantity after removing
        const totalQuantity = updatedCart[productIndex].qnty - decrementBy;

        // Check if the total quantity is greater than or equal to 1
        if (totalQuantity >= 1) {
          updatedCart[productIndex].qnty = totalQuantity;

          // Update TotalPrice and TotalQnty
          SetTotalPrice((PrevPrice) => PrevPrice - product.Price * decrementBy);
          SetTotalQnty((PrevQnty) => PrevQnty - decrementBy);
        } else {
          // Remove the item from the cart if quantity reaches 0
          updatedCart.splice(productIndex, 1);
        }

        setCartItems(updatedCart);
      } else {
        // Remove the item from the cart if quantity reaches 0
        updatedCart.splice(productIndex, 1);
        setCartItems(updatedCart);

        // Update TotalPrice and TotalQnty
        SetTotalPrice((PrevPrice) => PrevPrice - product.Price * decrementBy);
        SetTotalQnty((PrevQnty) => PrevQnty - decrementBy);
      }
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
        TotalQnty,
        TotalPrice,
      }}
    >
      {children}
    </shopContext.Provider>
  );
};

export const useStateContext = () => useContext(shopContext);
