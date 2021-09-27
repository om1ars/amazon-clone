import React from "react";
import { useStateValue } from "./StateProvider";
import banner from "./assets/bannerAddd.jpg";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__add" src={banner} alt="" />
        {basket?.length === 0 ? (
          <div>
            <h1>Your shopping basket is empty</h1>
            <p>
              Yo have no items in basket. To buy one click "Add to basket" next
              to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
