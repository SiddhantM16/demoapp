import { useState } from "react";

const UseState = () => {
  const btn = {
    backgroundColor: "green",
    padding: "20px",
    color: "white",
    border: "transparent",
    borderRadius: "10px",
  };

  const mainDiv = {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(() => count + 10);
  };

  return (
    <>
      <div style={mainDiv}>
        <h1>{count}</h1>
        <button style={btn} onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </>
  );
};

export default UseState;
