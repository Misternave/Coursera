import React from "react";
import { useFruitsContext } from "./Fruits";

function FruitsCounter() {
  const { fruits } = useFruitsContext();

  console.log(fruits);
  const handler = () => console.log("fourth example");
  return (
    <div>
      <button onClick={handler}>Click Me!</button>
    </div>
  );
}

export default FruitsCounter;
