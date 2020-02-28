
import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "../App.css"

export default class ButtonDisplay extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = name => {
    this.props.clickHandler(name);
  };

  render() {
    return (
      <div className="button-display">
        <div>
          <Button name="C" clickHandler={this.handleClick} />
          <Button name="+/-" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} lightseagreen />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button  name="x" clickHandler={this.handleClick} lightseagreen />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} lightseagreen />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} lightseagreen />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick}  />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick}  />
        </div>
      </div>
    );
  }
}
