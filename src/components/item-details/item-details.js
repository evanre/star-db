import React, { Component } from 'react';

import Spinner from "../spinner";

import './item-details.scss'
import ErrorButton from '../error-button';

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
        const p = this.state.item;

        if (!this.state.loaded) {
            return <div className="item-details card"><Spinner/></div>
        }
        
        console.log( p );

        return(
            <div className="item-details card">
                <img className="item-image" src={p.imgUrl} alt={p.name}/>

                <div className="card-body">
                    <h4>{p.name}</h4>
                    <ul className="list-group list-group-flaush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{p.gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth year</span>
                            <span>{p.BirthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{p.eyeColor}</span>
                        </li>
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        )
    }
}
