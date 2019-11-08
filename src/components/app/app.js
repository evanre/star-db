import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import { PeopleList, StarshipList, PlanetList } from '../sw-components/lists'
import { PeopleDetails, StarshipDetails, PlanetDetails } from '../sw-components/details'
import Row from '../row';

import './app.scss';

export default class App extends Component {
    state = {
        showRandomPlanet: false,
        hasError: false,
        selectedPeople: false,
        selectedStarship: false,
        selectedPlanet: false,
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

    onSelected = (id, type) => {
        this.setState({
            [`selected${type || 'Item'}`]: id,
        });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="container">
                <Header/>
                { this.state.showRandomPlanet ? <RandomPlanet/> : null }

                <Row
                    left={<PeopleList activeId={this.state.selectedPeople} onSelected={this.onSelected}/>}
                    right={<PeopleDetails itemId={this.state.selectedPeople}/>}
                />

                <Row
                    left={<StarshipList activeId={this.state.selectedStarship} onSelected={this.onSelected}/>}
                    right={<StarshipDetails itemId={this.state.selectedStarship}/>}
                />

                <Row
                    left={<PlanetList activeId={this.state.selectedPlanet} onSelected={this.onSelected}/>}
                    right={<PlanetDetails itemId={this.state.selectedPlanet}/>}
                />
            </div>
        );
    }
};
