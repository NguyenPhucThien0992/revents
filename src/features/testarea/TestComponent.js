import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementCounter, decrementCounter } from "./testAction";

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>Test Area </h1>
        <h3> the answer is : {data} </h3>
        <Button
          onClick={incrementCounter}
          color="green"
          content="increment"
        ></Button>
        <Button
          onClick={decrementCounter}
          color="red"
          content="decrement"
        ></Button>
      </div>
    );
  }
}

const actions = {
  incrementCounter,
  decrementCounter
};
const mapStateToprops = state => ({
  data: state.test.data
});

export default connect(
  mapStateToprops,
  actions
)(TestComponent);
