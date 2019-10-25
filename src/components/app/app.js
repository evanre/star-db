import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import './app.scss';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false,
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const personDetails = <ItemDetails getData={this.swapiService.getPerson} itemId={11}/>
        const planetDetails = <ItemDetails getData={this.swapiService.getPlanet} itemId={3}/>

        return (
            <div className="container">
                <Header/>
                {/*
                { planet }
                <div className="row mb2 button-row">
                    <div className="col-md-12">
                        <button
                            className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                            Toggle Random Planet
                        </button>
                        <ErrorButton />
                    </div>
                </div>
                */}

                <Row left={personDetails} right={planetDetails}/>

                {/*
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            activeId={this.state.selectedPerson}
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets}
                        >
                            {item => item.name}
                        </ItemList>
                    </div>
                    <div className="col-md-6">
                        <ItemDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
                */}
            </div>
        );
    }
};
