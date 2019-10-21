import React, { Component } from 'react';

import './people-page.scss';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

export default class PeoplePage extends Component {
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
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList activeId={this.state.selectedPerson} onItemSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}
