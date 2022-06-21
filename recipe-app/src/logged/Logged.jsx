import React, { useState } from "react";
import LoggedKid from "./LoggedKid";

function Logged() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    console.log("handle count");
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <LoggedKid count={count} />
      <button onClick={handleCount}>+</button>
    </div>
  );
}

export default Logged;
