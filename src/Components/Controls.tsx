import React, { useState } from "react";
import "./Controls.css";

type Props = {
  setTimeInSeconds: Function;
};

function Controls(props: Props) {
  const { setTimeInSeconds } = props;
  const [intervalId, setIntervalId] = useState<number>(0);
  console.log(intervalId);

  const handleStart = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState + 1);
    }, 1000);
    setIntervalId(interval);
    console.log("Interval >> ", interval);
  };

  const handleStop = () => {
    clearInterval(intervalId);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
  };

  return (
    <div className="buttons-container">
      <button className="button" onClick={handleStart}>
        <span className="button__inner"> Start </span>
      </button>
      <button className="button" onClick={handleStop}>
        <span className="button__inner"> Stop </span>
      </button>
      <button className="button" onClick={handleReset}>
        <span className="button__inner"> Reset </span>
      </button>
    </div>
  );
}

export default Controls;
