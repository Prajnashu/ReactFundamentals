import { Fragment, useState } from "react";

interface prop {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

export default function ListGroup({ items, heading, onSelectItem }: prop) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h3>heading</h3>
      {items.length === 0 && <p>No items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
