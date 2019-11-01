import React from 'react';
import { withData } from '../hoc-helpers';

import './item-list.scss';

const ItemList = (props) => {
    const { data, onItemSelected, activeId, children: renderLabel } = props;

    const renderList = (arr) => {
        return arr
            .slice(0, 5)
            .map((i) => (
                <li className={`list-group-item ${activeId === i.id ? 'active' : ''}`}
                    key={i.id}
                    onClick={() => onItemSelected(i.id)}
                >{renderLabel(i)}</li>
            )
        );
    };

    return (
        <ul className="item-list list-group">
            {renderList(data)}
        </ul>
    );
};

export default withData(ItemList);
