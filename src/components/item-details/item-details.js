import React, { Component } from 'react';

import Spinner from "../spinner";

import './item-details.scss'
import ErrorButton from '../error-button';

export const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
};

export default class ItemDetails extends Component {

    state = {
        item: null,
        loaded: false,
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { itemId, getData } = this.props;
        if(!itemId) {
            return;
        }

        this.setState({ loaded: false });

        getData(itemId)
            .then((item) => {
                this.setState({ item, loaded: true });
            })
    }

    render() {
        const { item } = this.state;

        if (!this.state.loaded) {
            return <div className="item-details card"><Spinner/></div>
        }

        return(
            <div className="item-details card">
                <img className="item-image" src={item.imgUrl} alt={item.name}/>

                <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        { React.Children.map(this.props.children, child => React.cloneElement(child, { item })) }
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        )
    }
}
