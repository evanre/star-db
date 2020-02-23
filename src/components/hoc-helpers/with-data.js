import React, { Component } from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

const swapi = new SwapiService();

const withData = (View, type) => {
  return class extends Component {
    state = {
      data: false,
      hasError: false
    };

    componentDidMount() {
      const { itemId } = this.props;

      if (itemId !== false) {
        this.requestData(itemId);
      }
    }

    componentDidUpdate(prevProps) {
      const { itemId } = this.props;

      if (itemId !== prevProps.itemId) {
        this.setState({ data: false });
        this.requestData(itemId);
      }
    }

    requestData(id) {
      swapi.request(type)(id)
        .then(data => {
          this.setState({ data });
        })
        .catch(err => {
          console.error(err);
          this.setState({ hasError: true });
        });
    }

    render() {
      const { hasError } = this.state;

      if (hasError) {
        return (
          <div className="card item-details">
            <ErrorIndicator />
          </div>
        );
      }

      const { data } = this.state;

      if (!data) {
        return (
          <div className="card item-details">
            <Spinner />
          </div>
        );
      }

      return <View {...this.props} type={type} data={data} />;
    }
  };
};

export default withData;
