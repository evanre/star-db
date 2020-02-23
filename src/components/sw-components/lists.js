import React from "react";
import ItemList from "../item-list";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const swapi = new SwapiService();

const wrapp = (Wrapped, fn) => props => <Wrapped {...props}>{fn}</Wrapped>;

export const PeopleList = withData(
  wrapp(ItemList, i => `${i.name}, ${i.birthYear}, id: ${i.id}`),
  swapi.getAllPeople,
  "People"
);

export const PlanetList = withData(
  wrapp(ItemList, i => `${i.name}, ${i.diameter}, id: ${i.id}`),
  swapi.getAllPlanets,
  "Planet"
);

export const StarshipList = withData(
  wrapp(ItemList, i => `${i.name}, ${i.model}, id: ${i.id}`),
  swapi.getAllStarships,
  "Starship"
);
