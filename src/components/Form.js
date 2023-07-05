import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || description === " " || description === "  ") return;

    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for 😍 trip ?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="item..."
        value={description}
      />
      <button>add</button>
    </form>
  );
}
