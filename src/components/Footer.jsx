import React, { useEffect, useState } from "react";

const Footer = () => {
  const [Value, newValue] = useState(0);

  const handleClick = (type) => {
    type === "add" ? newValue(Value + 1) : newValue(Value - 1);
  };

  useEffect(() => {
    console.log("This will run on mount");
  }, [])

  useEffect(() => {
    console.log("This will run on update", Value);
}, [Value])

  useEffect(() => {
    return () => {
        console.log("This will run on unmount");
    }
  }, [])
  

  return (
    <div>
      <button onClick={() => handleClick("add")}>Increment</button>
      <button onClick={() => handleClick("sub")}>Decrement</button>
      <br />
      {Value >= 0 ? Value : 0}
    </div>
  );
};

export default Footer;
