export function Stats({ list }) {
    if (!list.length)
        return <footer className="stats"><em>Fill out what you need!</em></footer>;
    const numItems = list.length;
    const numPacked = list.filter(item => item.packed).length;
    const packedPercentage = Math.round(numPacked / numItems * 100);
    return (
        <footer className="stats">
            <em>
                {packedPercentage === 100 ? "Everything is Packed, Ready to GO ✈️" : `you have ${numItems} item on our list and you already paked ${numPacked} items (${packedPercentage}%)`}
            </em>
        </footer>);
}
