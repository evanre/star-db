import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details/item-details';
import Row from '../row';
import SwapiService from '../../services/swapi-service';

import './app.scss';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: false,
        hasError: false,
        selectedItem: Math.floor(Math.random()*5 + 1).toString(),
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

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id,
        })
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const personDetails = (
            <ItemDetails getData={this.swapiService.getItem} itemId={11}>
                <Record field="gender" label="Gender"/>
                <Record field="eyeColor" label="Eye Color"/>
                <Record field="birthYear" label="Birth Year"/>
            </ItemDetails>
        );

        const planetDetails = (
            <ItemDetails getData={this.swapiService.getPlanet} itemId={3}>
                <Record field="diameter" label="Diameter"/>
                <Record field="population" label="Population"/>
                <Record field="rotationPeriod" label="Rotation Period"/>
            </ItemDetails>
        );

        return (
            <div className="container">
                <Header/>
                { planet }
                {/*
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

                {/*<Row left={personDetails} right={planetDetails}/>*/}

                {/*
                */}
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            activeId={this.state.selectedItem}
                            onItemSelected={this.onItemSelected}
                            getData={this.swapiService.getAllPlanets}
                        >
                            {item => item.name}
                        </ItemList>
                    </div>
                    <div className="col-md-6">
                        <ItemDetails
                            itemId={this.state.selectedItem}
                            getData={this.swapiService.getPlanet}
                        >
                            <Record field="diameter" label="Diameter"/>
                            <Record field="population" label="Population"/>
                            <Record field="rotationPeriod" label="Rotation Period"/>
                        </ItemDetails>
                    </div>
                </div>
            </div>
        );
    }
};
