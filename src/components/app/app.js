import React, {Component} from 'react';

// import Header from '../header';
// import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import { PeopleList/*, StarshipList, PlanetList*/ } from '../sw-components/lists'
import { PeopleDetails/*, StarshipDetails, PlanetDetails*/ } from '../sw-components/details'
// import Row from '../row';

import './app.scss';
import { Record } from '../item-details/item-details';

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

    onItemSelected = (id, type) => {
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
                {/*<Header/>*/}
                {/*{ this.state.showRandomPlanet ? <RandomPlanet/> : null }*/}

                <div className="row mb2">
                    <div className="col-md-6">
                        <PeopleList
                            activeId={this.state.selectedPeople}
                            onItemSelected={this.onItemSelected}
                        >
                            {item => `${item.name}, ${item.id}`}
                        </PeopleList>
                    </div>
                    <div className="col-md-6">
                        <PeopleDetails itemId={this.state.selectedPeople}>
                            <Record field="id" label="ID"/>
                            <Record field="gender" label="Gender"/>
                            <Record field="eyeColor" label="Eye Color"/>
                            <Record field="birthYear" label="Birth Year"/>
                        </PeopleDetails>
                    </div>
                </div>
                {/*<div className="row mb2">
                    <div className="col-md-6">
                        <StarshipList
                            activeId={this.state.selectedStarship}
                            onItemSelected={this.onItemSelected}
                        >
                            {item => `${item.name}, ${item.id}`}
                        </StarshipList>
                    </div>
                    <div className="col-md-6">
                        <StarshipDetails itemId={this.state.selectedStarship}>
                            <Record field="id" label="ID"/>
                            <Record field="model" label="Model"/>
                            <Record field="manufacturer" label="Manufacturer"/>
                            <Record field="costInCredits" label="Cost"/>
                            <Record field="length" label="Length"/>
                            <Record field="crew" label="Crew"/>
                            <Record field="passengers" label="Passengers"/>
                            <Record field="cargoCapacity" label="Capacity"/>
                        </StarshipDetails>
                    </div>
                </div>
                <div className="row mb2">
                    <div className="col-md-6">
                        <PlanetList
                            activeId={this.state.selectedPlanet}
                            onItemSelected={this.onItemSelected}
                        >
                            {item => `${item.name}, ${item.id}`}
                        </PlanetList>
                    </div>
                    <div className="col-md-6">
                        <PlanetDetails itemId={this.state.selectedPlanet}>
                            <Record field="id" label="ID"/>
                            <Record field="diameter" label="Diameter"/>
                            <Record field="population" label="Population"/>
                            <Record field="rotationPeriod" label="Rotation Period"/>
                        </PlanetDetails>
                    </div>
                </div>*/}
            </div>
        );
    }
};
