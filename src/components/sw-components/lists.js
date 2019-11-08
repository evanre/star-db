import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapi = new SwapiService();

const wrapp = (Wrapped, fn) => {
    return (props) => {
        return <Wrapped {...props}>{fn}</Wrapped>
    }
};

export const PeopleList = withData(wrapp(ItemList, item => `${item.name}, ${item.id}`), swapi.getAllPeople, 'People');

export const PlanetList = withData(wrapp(ItemList, item => `${item.name}, ${item.id}`), swapi.getAllPlanets, 'Planet');

export const StarshipList = withData(wrapp(ItemList, item => `${item.name}, ${item.id}`), swapi.getAllStarships, 'Starship');
