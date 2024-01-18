import React, { useState } from "react";
import DeliveryItemsList from "./DeliveryItemsList";
import { produce, pantryItems } from "./deliveryItems.js";

export function HomeDelivery() {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart((prev) => {
      return [item, ...prev];
    })

  };

  const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((index) => index !== targetIndex);
    })
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <DeliveryItemsList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <DeliveryItemsList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}