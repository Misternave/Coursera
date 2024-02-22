import React from "react";

const FruitsContext = React.createContext();

function Fruits({ children }) {
  const [fruits, setFruits] = React.useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);

  return (
    <div>
      {fruits.map((f) => (
        <p key={f.id}>{f.fruitName}</p>
      ))}
      <FruitsContext.Provider value={{ fruits }}>
        {children}
      </FruitsContext.Provider>
    </div>
  );
}

export const useFruitsContext = () => React.useContext(FruitsContext);
export default Fruits;
