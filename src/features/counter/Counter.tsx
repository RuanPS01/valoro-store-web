import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";

export default function Counter(): JSX.Element {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className="bg-black">
      {/* <div className="flex w-min px-4 py-2 rounded-lg shadow-md items-center justify-center gap-4 bg-gray-400 mx-auto mt-8">
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="py-1 px-3 min-w-[4rem] bg-red-400 text-white text-3xl cursor-pointer hover:bg-red-600 rounded-md"
        >
          -
        </button>
        <span className="bg-gray-200 text-gray-600 px-8 py-2 text-3xl rounded-md shadow-inner">
          {count}
        </span>
        <button
          aria-label="Increment value"
          className="py-1 px-3 min-w-[4rem] bg-green-400 text-white text-3xl cursor-pointer hover:bg-green-600 rounded-md"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="flex w-max px-4 py-2 rounded-lg shadow-md items-center justify-center gap-4 bg-gray-400 mx-auto mt-8">
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          className="bg-gray-200 px-4 py-2 w-12 text-gray-600 rounded-sm text-center outline-none focus:outline-none focus:ring-2 ring-purple-600"
        />
        <button
          className="bg-purple-600 text-white px-4 py-1 rounded-md hover:bg-purple-700"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className="bg-purple-600 text-white px-4 py-1 rounded-md hover:bg-purple-700"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className="bg-purple-600 text-white px-4 py-1 rounded-md hover:bg-purple-700"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div> */}
      <div className="
          flex
          items-center
          justify-center
          flex-col
      ">
        <span className="bg-primary-100 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-primary-200 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-primary-300 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-primary-400 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-primary-500 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-primary-600 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-secondary-100 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-secondary-200 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-secondary-300 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-secondary-400 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-secondary-500 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-secondary-600 px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-dark px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-gray px-8 py-2 text-3xl rounded-md my-2"/>
        <span className="bg-white px-8 py-2 text-3xl rounded-md my-2"/>
        <text className="font-primary font-medium text-2xl text-white">Batalhe com estilo. É sua escolha.</text>
        <text className="font-primary font-bold text-2xl text-white">Comprar por 85% do preço</text>
        <text className="font-title text-2xl text-white">Melee</text>
      </div>
    </div>
  );
}
