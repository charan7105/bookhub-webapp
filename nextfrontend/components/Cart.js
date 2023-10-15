import { useStateContext } from "@/lib/context";
import {
  CartWrapper,
  CartsStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Quantity,
} from "@/styles/CartStyle";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export default function Cart() {
  const {
    cartItems,
    setShowCart,
    qnty,
    onAdd,
    onRemove,
  } = useStateContext();
  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartsStyle onClick={(e) => e.stopPropagation()}>
        {/* If it is below 1 then text will display */}
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h2>A Lot of Books are just waiting for you, pick them 😌</h2>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        {/* If it is Above or Equal to 1 then details will display */}
        {cartItems.length >= 1 &&
          cartItems.map((item, index) => {
            return (
              <Card key={item.slug + index}>
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
                    <button onClick={() => onRemove(item,1)}>
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
      </CartsStyle>
    </CartWrapper>
  );
}
