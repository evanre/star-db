import React, { Component } from 'react';

import Spinner from '../spinner';

import './item-list.scss';

export default class ItemList extends Component {

    state = {
        itemList: null,
    };

    componentDidMount() {
        this.props.getData().then((itemList) => {
            this.setState({ itemList })
        })
    }

    renderList(arr) {
        return arr
            .slice(0, 5)
            .map((i) => (
                <li className={`list-group-item ${this.props.activeId === i.id ? 'active' : ''}`}
                    key={i.id}
                    onClick={() => this.props.onItemSelected(i.id)}
                >{this.props.renderItem(i)}</li>
            )
        );
    }

    render() {
        const { itemList } = this.state;

        if (!itemList) {
            return <div className="card"><Spinner/></div>
        }

        return (
            <ul className="item-list list-group">
                {this.renderList(itemList)}
            </ul>
        );
    }
};
