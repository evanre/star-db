import React from 'react';

import './item-list.scss';

const ItemList = ({ data, onItemSelected, activeId, children: renderLabel, type }) => {
    const arr = data.slice(0, 5);

    const randomId = () => {
        const id = arr[Math.floor(Math.random() * arr.length)].id;
        onItemSelected(id, type);
        return id;
    };

    const id = activeId || randomId();

    return (
        <ul className="item-list list-group">
            {arr.map((i) => (
                <li className={`list-group-item ${id === i.id ? 'active' : ''}`}
                    key={i.id}
                    onClick={() => onItemSelected(i.id, type)}
                >{renderLabel(i)}</li>
            ))}
        </ul>
    );
};

export default ItemList;
