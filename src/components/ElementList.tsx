interface ElementListProps {
    items: string[];
    onRemoveItem: (index: number) => void;
  }
  
  const ElementList: React.FC<ElementListProps> = ({ items, onRemoveItem }) => {
    return (
        <>
          {!items.length ? <div className="no-element">
          Aucun élément ajouté
        </div>
          :
          <ul className="element-list">
          {items.map((item, index) => (
            <li key={index} className="element-item">
              <span>{item}</span>
              <button onClick={() => onRemoveItem(index)}>❌</button>
            </li>
          ))}
        </ul>}
        </>
    );
  };
  
  export default ElementList;
  