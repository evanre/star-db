import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import { PeopleList, PlanetsList, StarshipsList } from "../sw-components/lists";
import { PeopleDetails, PlanetsDetails, StarshipsDetails } from "../sw-components/details";
import Row from "../row";

import "./app.scss";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false,
    peopleSelected: false,
    starshipsSelected: false,
    planetsSelected: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  // toggleRandomPlanet = () => {
  //     this.setState((state) => {
  //         return {
  //             showRandomPlanet: !state.showRandomPlanet
  //         }
  //     });
  // };

  onSelected = (id, type) => {
    this.setState({
      [`${type}Selected`]: id
    });
  };

  render() {
    const { hasError, peopleSelected, starshipsSelected, planetsSelected, showRandomPlanet } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="container">
        <Header />
        {showRandomPlanet ? <RandomPlanet /> : null}

        <Row
          left={<PeopleList activeId={peopleSelected} onSelected={this.onSelected} />}
          right={<PeopleDetails itemId={peopleSelected} />}
        />

        <Row
          left={<StarshipsList activeId={starshipsSelected} onSelected={this.onSelected} />}
          right={<StarshipsDetails itemId={starshipsSelected} />}
        />

        <Row
          left={<PlanetsList activeId={planetsSelected} onSelected={this.onSelected} />}
          right={<PlanetsDetails itemId={planetsSelected} />}
        />
      </div>
    );
  }
}
