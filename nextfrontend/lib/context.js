import React, { createContext, useContext, useState } from "react";


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
      }}
    >
      {children}
    </shopContext.Provider>
  );
};

export const useStateContext = () => useContext(shopContext);
