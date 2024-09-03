import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setdescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    /* TO PREVENT PAGES FROM RELOADING AGAIN AND AGAIN... */
    e.preventDefault();
    if (!description) return null;
    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    console.log(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your 🤗 trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Items...."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
}
