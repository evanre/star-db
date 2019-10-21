import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.scss';

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: null,
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }

    renderList(arr) {
        return arr
            .slice(0, 5)
            .map(({id, name}) => {
            return (
                <li className={`list-group-item ${this.props.activeId === id ? 'active' : ''}`}
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >{name}</li>
            )
        });
    }

    render() {
        const { peopleList } = this.state;

        if (!peopleList) {
            return <div className="card"><Spinner/></div>
        }

        return (
            <ul className="item-list list-group">
                {this.renderList(peopleList)}
            </ul>
        );
    }
};
