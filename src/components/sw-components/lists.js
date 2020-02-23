import React from "react";
import ItemList from "../item-list";
import { withData } from "../hoc-helpers";

const wrapp = (Wrapped, fn) => props => <Wrapped {...props}>{fn}</Wrapped>;

export const PeopleList = withData(
  wrapp(ItemList, i => `${i.name}, ${i.birthYear}, id: ${i.id}`),
  "people",
  "PeopleList"
);

export const PlanetsList = withData(
  wrapp(ItemList, i => `${i.name}, ${i.diameter}, id: ${i.id}`),
  "planets"
);

export const StarshipsList = withData(
  wrapp(ItemList, i => `${i.name}, ${i.model}, id: ${i.id}`),
  "starships"
);
