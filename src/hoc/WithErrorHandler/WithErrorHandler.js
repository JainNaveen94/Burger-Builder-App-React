import React, { Component } from "react";

import Model from "../../Components/UI/Model/Model";

const withErrorHandler = (WrapperComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    errorModelHandler = () => {
      this.setState({
        error: null,
      });
    };

    componentWillMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    render() {
      return (
        <>
          <Model
            show={this.state.error}
            model
            modelClose={() => this.errorModelHandler()}
          >
            {this.state.error ? this.state.error.message : null}
          </Model>
          <WrapperComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
