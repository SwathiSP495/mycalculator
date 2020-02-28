import React from "react";
import PropTypes from "prop-types";
import "../App.css";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    lightseagreen: PropTypes.bool,
    widthwide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const buttonClass = [
      "buttton-component",
      this.props.lightseagreen ? "lightseagreen" : "",
      this.props.widthwide ? "widthwide" : "",
    ];

    return (
      <div className={buttonClass.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
