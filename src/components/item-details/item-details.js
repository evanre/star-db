import React from 'react';

import './item-details.scss'

export const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
};

const ItemDetails = ({ data: item, children }) => {
    console.log( item );
    return (
        <div className="item-details card">
            <img className="item-image" src={item.imgUrl} alt={item.name}/>

            <div className="card-body">
                <h4>{item.name}</h4>
                <ul className="list-group list-group-flush">
                    { React.Children.map(children, child => React.cloneElement(child, { item })) }
                </ul>
            </div>
        </div>
    );
};

export default ItemDetails;
