import React from "react";
import "./../App.css"; // Import styles

const InventoryForm = () => {
  return (
    <div className="inventory-form">
      <h2>Add New Item</h2>
      <form>
        {/* TODO: Add input fields for name, quantity, and price */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />  
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" required />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" required />
        {/* TODO: Add a submit button */}
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default InventoryForm;
