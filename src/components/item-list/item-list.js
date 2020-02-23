import React from 'react';

import './item-list.scss';

const ItemList = ({ data, onSelected, activeId, children: renderLabel, type }) => {
    const arr = data.slice(0, 5);

    const randomId = () => {
        const { id } = arr[Math.floor(Math.random() * arr.length)];
        onSelected(id, type);
        return id;
    };

    const id = activeId || randomId();

    return (
        <div className="item-list list-group">
            {arr.map((i) => (
                <button type="button"
                    className={`list-group-item list-group-item-action ${id === i.id ? 'active' : ''}`}
                    key={i.id}
                    onClick={() => onSelected(i.id, type)}
                >{renderLabel(i)}</button>
            ))}
        </div>
    );
};

export default ItemList;
