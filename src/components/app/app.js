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
        showRandomPlanet: true,
        hasError: false,
        selectedPeople: false,
        selectedStarship: false,
        selectedPlanet: false,
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    // toggleRandomPlanet = () => {
    //     this.setState((state) => {
    //         return {
    //             showRandomPlanet: !state.showRandomPlanet
    //         }
    //     });
    // };

    onSelected = (id, type) => {
        this.setState({
            [`selected${type || 'Item'}`]: id,
        });
    };

    render() {
        const { hasError, selectedPeople, selectedStarship, selectedPlanet, showRandomPlanet } = this.state;

        if (hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="container">
                <Header/>
                { showRandomPlanet ? <RandomPlanet/> : null }

                <Row
                    left={<PeopleList activeId={selectedPeople} onSelected={this.onSelected}/>}
                    right={<PeopleDetails itemId={selectedPeople}/>}
                />

                <Row
                    left={<StarshipList activeId={selectedStarship} onSelected={this.onSelected}/>}
                    right={<StarshipDetails itemId={selectedStarship}/>}
                />

                <Row
                    left={<PlanetList activeId={selectedPlanet} onSelected={this.onSelected}/>}
                    right={<PlanetDetails itemId={selectedPlanet}/>}
                />
            </div>
        );
    }
};
