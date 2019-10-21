import React, { Component } from 'react';

import Spinner from "../spinner";

import './person-details.scss'
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        loaded: false,
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if(!personId) {
            return;
        }

        this.setState({ loaded: false });

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person, loaded: true });
            })
    }

    render() {
        const p = this.state.person;

        if (!this.state.loaded) {
            return <div className="person-details card"><Spinner/></div>
        }

        return(
            <div className="person-details card">
                <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${p.id}.jpg`} alt={p.name}/>

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
