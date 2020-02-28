import React from "react";
import Display from './components/Display'
import ButtonDisplay from "./components/ButtonDisplay"
import calculation from "./components/calculation"
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculation(this.state, buttonName));
  };

  render() {
    return (
      <div className="app-final">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonDisplay clickHandler={this.handleClick} />
      </div>
    );
  }
}
