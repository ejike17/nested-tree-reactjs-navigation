import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
          {list && list.length ?
              list.map(listItem => <MenuItem item={listItem} />) : <h1>There are no menu yet</h1>}
    </ul>
  );
}
