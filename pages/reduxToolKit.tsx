import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../src/state/slices/counterSlice";
import { RootState } from "../src/state/store";

const ReduxToolKit = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counterReducer.value);

  return (
    <div>
      <p>Value: {count}</p>
      <button onClick={() => dispatch(increment())}> Increment</button>
      <button onClick={() => dispatch(decrement())}> Decrement</button>
    </div>
  );
};

export default ReduxToolKit;
