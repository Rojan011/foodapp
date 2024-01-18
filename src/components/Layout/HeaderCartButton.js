import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHIghlighted] = useState(false);
  const { items } = cartCtx;
  // const numberofCartItems = cartCtx.items.reduce((curNumber, item) => {
  //       return curNumber + item.amount;
  //     }, 0);
  //since number of items in cart is null at the moment so we use this codesnippet instead
  const numberofCartItems = items
    ? items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0)
    : 0;

  // const cartCtx = useContext(CartContext);

  // Check if cartCtx or cartCtx.items is undefined
  // const numberofCartItems = cartCtx && cartCtx.items
  //   ? cartCtx.items.reduce((curNumber, item) => {
  //       return curNumber + item.amount;
  //     }, 0)
  //   : 0;
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHIghlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHIghlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
