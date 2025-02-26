import { useState } from "react";
import ElementInput from "./components/ElementInput";
import ElementList from "./components/ElementList";

const App: React.FC = () => {
  const [items, setItems] = useState<string[]>([
    "Du code",
    "des bugs",
    "les IA",
  ]);

  const handleAddItem = (item: string) => {
    if (item.trim()) {
      setItems([...items, item]);
    }
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <div className="element-container">
        <ElementInput onAddItem={handleAddItem} />
        <ElementList items={items} onRemoveItem={handleRemoveItem} />
      </div>
    </div>
  );
};

export default App;
