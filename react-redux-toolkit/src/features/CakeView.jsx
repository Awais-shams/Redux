import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { order } from "./CakeShop";

const CakeView = () => {
  const cakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>No of Cakes - {cakes} </h1>
      <button onClick={() => dispatch(order())}>Order Cake</button>
    </div>
  );
};

export default CakeView;
