import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Header from "./layout/Header";
import Dashboard from "./activities/Dashboard";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Dashboard />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
