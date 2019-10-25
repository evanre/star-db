import React, { Component } from 'react';

import './people-page.scss';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

const Row = ({ left, right }) => (
    <div className="row mb2">
        <div className="col-md-6">{left}</div>
        <div className="col-md-6">{right}</div>
    </div>
);

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: Math.floor(Math.random()*5).toString(),
        hasError: false,
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        })
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="row mb2">
                    <div className="col-md-12">
                        <ErrorIndicator />
                    </div>
                </div>
            )
        }
        const itemList = (
            <ItemList
                activeId={this.state.selectedPerson}
                onItemSelected={this.onPersonSelected}
                renderItem={i => `${i.name}, (${i.gender}, ${i.birthYear})`}
                getData={this.swapiService.getAllPeople}
            />
        );
        const personDetails = <PersonDetails personId={this.state.selectedPerson}/>;

        return <Row left={itemList} right={personDetails}/>
    }
}
