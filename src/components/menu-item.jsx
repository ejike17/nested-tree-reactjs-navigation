import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
    const [displayChildren, setDisplayChildren] = useState({});
    
    function handleToggleChildren(getCurrentLabel) {
        setDisplayChildren({
            ...displayChildren,
            [getCurrentLabel] : !displayChildren[getCurrentLabel]
        })
    }

    console.log(displayChildren);
  const { label, children } = item;
  return (
    <li>
      <div>
        <p>{label}</p>
              {item && children && children.length ? <span onClick={() => handleToggleChildren(label)}>{ displayChildren[label] ? "-" : "+"}</span> : null}
      </div>
      {item && children && children.length && displayChildren[label] ? (
        <MenuList list={children} />
      ) : null}
    </li>
  );
}
