import React, { useState } from "react";
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./doge-counter-slice";

export function DogeCounter() {
  const count = useSelector((state: RootState) => state.dogeCounter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <>
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px 10px",
        }}
      >
        <h2>Doge Counter</h2>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increase
          </button>
          <span style={{ margin: "0 10px" }}>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrease
          </button>
        </div>
        <div>
          <input
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={e => setIncrementAmount(Number(e.target.value))}
          />
          <button
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {[...new Array<number>(count)].map((item, idx) => (
          <img
            key={`doge-${idx}`}
            src="https://www.coinspot.com.au/public/img/dogelogo-lrg.png"
            alt={"doge"}
            width={100}
            height={100}
          />
        ))}
      </div>
    </>
  );
}
