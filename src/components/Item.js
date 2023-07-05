export default function Item({ data, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={data.packed}
        checked={data.packed}
        onChange={() => onToggleItem(data.id)}
      />
      <span style={data.packed ? { textDecoration: "line-through" } : {}}>
        {data.quantity} {data.description}
      </span>
      <button onClick={() => onDeleteItem(data.id)}>❌</button>
    </li>
  );
}
