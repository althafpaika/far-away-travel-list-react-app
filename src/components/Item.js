
export function Item({ item, setPackList }) {
    function handleClick() {
        setPackList(prevlist => prevlist.filter(listItem => listItem.id !== item.id));
    }
    function handleToggle() {
        setPackList(prevList => prevList.map(listItem => listItem.id === item.id ? { ...listItem, packed: !listItem.packed } : listItem));
    }
    return (
        <li>
            <input type="checkbox" value={item.packed} onChange={handleToggle} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
            <button onClick={handleClick}>❌</button>
        </li>
    );
}
