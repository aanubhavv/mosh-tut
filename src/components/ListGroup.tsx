import { useState } from "react";

export default function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No Items Found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setselectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
