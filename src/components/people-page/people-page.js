import React, { Component } from 'react';

import './people-page.scss';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: Math.floor(Math.random()*5).toString(),
    };


    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        })
    };

    render() {
        const itemList = (
            <ItemList
                activeId={this.state.selectedPerson}
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
            >
                {i => `${i.name}, (${i.birthYear})`}
            </ItemList>
        );
        const itemDetails = <ErrorBoundry><ItemDetails personId={this.state.selectedPerson}/></ErrorBoundry>;

        return <Row left={itemList} right={itemDetails}/>
    }
}
