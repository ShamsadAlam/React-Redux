// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/Actions";

function App() {
  // useSelector is a hook to access the state from the Redux store
  const count = useSelector((state) => state.count);

  // useDispatch is a hook to get the dispatch function
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </div>
  );
}

export default App;
