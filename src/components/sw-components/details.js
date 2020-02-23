import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withData } from "../hoc-helpers";

export const PeopleDetails = withData(props => {
  return (
    <ItemDetails {...props}>
      <Record field="id" label="ID" />
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
      <Record field="birthYear" label="Birth Year" />
    </ItemDetails>
  );
}, 'people');

export const PlanetsDetails = withData(props => {
  return (
    <ItemDetails {...props}>
      <Record field="id" label="ID" />
      <Record field="diameter" label="Diameter" />
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
    </ItemDetails>
  );
}, 'planets');

export const StarshipsDetails = withData(props => {
  return (
    <ItemDetails {...props}>
      <Record field="id" label="ID" />
      <Record field="model" label="Model" />
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="costInCredits" label="Cost" />
      <Record field="length" label="Length" />
      <Record field="crew" label="Crew" />
      <Record field="passengers" label="Passengers" />
      <Record field="cargoCapacity" label="Capacity" />
    </ItemDetails>
  );
}, 'starships');
