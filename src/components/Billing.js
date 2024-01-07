// src/components/Billing.js
import React, { useState } from 'react';

const Billing = () => {
  // State to manage form inputs
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  // State to manage displayed billing items
  const [billingItems, setBillingItems] = useState([
    { id: 1, itemName: 'Product A', quantity: 2, price: 20.0 },
    { id: 2, itemName: 'Product B', quantity: 3, price: 15.0 },
    { id: 3, itemName: 'Product C', quantity: 1, price: 30.0 },
    // Add more initial billing items as needed
  ]);

  // State to manage editing
  const [editingItem, setEditingItem] = useState(null);

  // Function to handle form submission (Add or Update)
  const handleAddOrUpdateItem = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!itemName || !quantity || !price) {
      alert('Please fill in all fields.');
      return;
    }

    if (editingItem) {
      // Update existing item
      const updatedItems = billingItems.map(item =>
        item.id === editingItem.id
          ? { ...item, itemName, quantity, price: parseFloat(price) }
          : item
      );

      setBillingItems(updatedItems);
      setEditingItem(null); // Clear editing state
    } else {
      // Add new billing item to the list
      const newItem = { id: Date.now(), itemName, quantity, price: parseFloat(price) };
      setBillingItems([...billingItems, newItem]);
    }

    // Clear form inputs
    setItemName('');
    setQuantity('');
    setPrice('');
  };

  // Function to handle item edit
  const handleEditItem = (item) => {
    setItemName(item.itemName);
    setQuantity(item.quantity);
    setPrice(item.price.toString());
    setEditingItem(item);
  };

  // Function to handle item delete
  const handleDeleteItem = (id) => {
    const updatedItems = billingItems.filter(item => item.id !== id);
    setBillingItems(updatedItems);
  };

  return (
    <div>
      <h2>Billing</h2>

      <div className="billing-content">
        {/* Form for adding or updating a billing item */}
        <form onSubmit={handleAddOrUpdateItem}>
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />

          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button type="submit">{editingItem ? 'Update Item' : 'Add Item'}</button>
        </form>

        {/* Table for displaying billing items */}
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {billingItems.map((item) => (
              <tr key={item.id}>
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleEditItem(item)}>Edit</button>
                  <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Additional billing-related content */}
      {/* Add more details, charts, or calculations related to billing as needed */}
    </div>
  );
};

export default Billing;
