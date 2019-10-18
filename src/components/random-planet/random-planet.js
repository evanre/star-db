import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import './random-planet.scss';

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        state: 'loading'
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            state: 'loaded'
        })
    };

    onError = () => {
        this.setState({
            state: 'error',
        })
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random()*17) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {
        const {planet, state} = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                {{
                    loading: <Spinner/>,
                    loaded: <PlanetView planet={planet}/>,
                    error: <ErrorIndicator/>,
                }[state]}
            </div>
        )
    }
};

const PlanetView = ({ planet }) => {
    return (
        <>
            <img src= {`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`} alt={planet.name} className="planet-image"/>
            <div>
                <h4>{planet.name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population:</span>
                        <span>{planet.population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period:</span>
                        <span>{planet.rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter:</span>
                        <span>{planet.diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    )
};
