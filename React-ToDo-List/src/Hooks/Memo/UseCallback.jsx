import { useState } from "react";

const Button = ({ onClick, children }) => {
  console.log(`All rendering button: ${children}`);

  return (
    <button
      onClick={onClick}
      className="text-black mb-4 py-2 px5 bg-amber-200 "
    >
      {children}
    </button>
  );
};

export default function UseCallBack() {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("inside increment");
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center text-white">
      <h1 className="mb-4 text-black">{count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  );
}
