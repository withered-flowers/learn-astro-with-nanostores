import React from "react";
import { useStore } from "@nanostores/react";
import {
  counter,
  decrementCounter,
  incrementCounter,
} from "../stores/counter.js";

export default function CounterReact({ children }) {
  const count = useStore(counter);

  return (
    <React.StrictMode>
      <div className="py-4">
        <div className="children">{children}</div>
        <div className="counter flex flex-row">
          <button
            className="py-2 px-4 bg-red-200 hover:bg-red-400 rounded-xl"
            onClick={decrementCounter}
          >
            -
          </button>
          <pre className="py-2 mx-4">{count}</pre>
          <button
            className="py-2 px-4 bg-blue-200 hover:bg-blue-400 rounded-xl"
            onClick={incrementCounter}
          >
            +
          </button>
        </div>
      </div>
    </React.StrictMode>
  );
}
