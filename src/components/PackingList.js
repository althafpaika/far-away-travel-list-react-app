import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ packList, setPackList }) {
    const [sortBy, setSortBy] = useState('input');
    let sortedList;
    if (sortBy === 'input')
        sortedList = packList;
    if (sortBy === 'description')
        sortedList = packList.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === 'packed')
        sortedList = packList.slice().sort((a, b) => Number(b.packed) - Number(a.packed));

    const handleClick = () => setPackList([]);

    return <div className="list">
        <ul>
            {sortedList.map(item => <Item item={item} key={item.id} setPackList={setPackList} />)}
        </ul>
        <div className="actions">
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by Packed</option>
            </select>
            <button onClick={handleClick}>Clear List</button>
        </div>
    </div>;
}
