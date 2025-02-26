import { useState } from "react";

interface ElementListProps {
  onAddItem: (item: string) => void;
}

const ElementList: React.FC<ElementListProps> = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddItem = () => {
    onAddItem(inputValue);
    setInputValue("");
  };

  return (
    <div className="element-input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ajouter un élément"
      />
      <button onClick={handleAddItem}>➕</button>
    </div>
  );
};

export default ElementList;
