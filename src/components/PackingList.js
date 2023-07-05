import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onToggleItem,
  onDeleteItem,
  onClearList,
}) {
  const [sortedBy, setSortedBy] = useState("input");

  let sortedItems;
  if (sortedBy === "input") sortedItems = items;
  if (sortedBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortedBy === "packed")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            key={item.id}
            data={item}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input">Sorted by input</option>
          <option value="description">Sorted by description</option>
          <option value="packed">Sorted by packed</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
