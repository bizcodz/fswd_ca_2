import React from "react";

const InventoryItem = ({ item }) => {
  // TODO: Display item details (name, quantity, price)

  return (
    <li className="inventory-item">
      {/* TODO: Use item props to show product name, quantity, and price */}
      <p>{item.name}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price}</p>
    </li>
  );
};

export default InventoryItem;
