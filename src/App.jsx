import "./App.css";
import TreeView from "./components";
import menus from "./components/data";

function App() {
  return (
    <main>
      <TreeView menus={menus} />
    </main>
  );
}

export default App;
