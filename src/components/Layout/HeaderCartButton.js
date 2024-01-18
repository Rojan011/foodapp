import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  // const numberofCartItems = cartCtx.items.reduce((curNumber, item) => {
  //       return curNumber + item.amount;
  //     }, 0);
  //since number of items in cart is null at the moment so we use this codesnippet instead
  // const numberofCartItems = cartCtx.items ? cartCtx.items.reduce((curNumber, item) => {
    
  //   return curNumber + item.amount;
  // }, 0) : 0;
  
  // const cartCtx = useContext(CartContext);

  // Check if cartCtx or cartCtx.items is undefined
  const numberofCartItems = cartCtx && cartCtx.items
    ? cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0)
    : 0;

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
