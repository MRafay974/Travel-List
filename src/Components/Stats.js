export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em> Start Adding some items on your list 🐥</em>
      </p>
    );

  const numItems = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage == 100
          ? "You are ready to Go 😀"
          : `You have ${numItems} items on your list, and you already packed ${packed}
        `}
      </em>
    </footer>
  );
}
