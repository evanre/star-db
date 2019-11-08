import ItemDetails from '../item-details/item-details';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapi = new SwapiService();

export const PeopleDetails = withData(ItemDetails, swapi.getPeople);

export const PlanetDetails = withData(ItemDetails, swapi.getPlanet);

export const StarshipDetails = withData(ItemDetails, swapi.getStarship);
