import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapi = new SwapiService();

export const PeopleList = withData(ItemList, swapi.getAllPeople, 'People');

// export const PlanetList = withData(ItemList, swapi.getAllPlanets, 'Planet');

// export const StarshipList = withData(ItemList, swapi.getAllStarships, 'Starship');
