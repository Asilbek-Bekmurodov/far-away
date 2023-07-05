export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items your bag 🚀</em>
      </footer>
    );
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length || 0;
  const percentage =
    Math.round((Number(packedItems) / Number(numItems)) * 100) || 0;
  console.log(percentage);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? " You got everything ! Ready to go ✈️"
          : `💼 You have ${numItems} item your list and you already packed ${packedItems}
        (${percentage === "NaN" ? "0" : percentage}%)`}
      </em>
    </footer>
  );
}
