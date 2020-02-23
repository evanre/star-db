import React, { Component } from "react";

import "./error-button.scss";

export default class ErrorButton extends Component {
  state = {
    renderError: false
  };

  render() {
    const { renderError } = this.state;

    if (renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        className="error-button btn btn-danger btn-lg"
        type="button"
        onClick={() => this.setState({ renderError: true })}
      >
        Throw Error
      </button>
    );
  }
}
