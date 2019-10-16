import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import './random-planet.scss';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({

                })
            });
    }

    render() {
        const s = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${s.id}.jpg`} alt={s.name} className="planet-image"/>
                <div>
                    <h4>{s.name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population:</span>
                            <span>{s.population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period:</span>
                            <span>{s.rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter:</span>
                            <span>{s.diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};
