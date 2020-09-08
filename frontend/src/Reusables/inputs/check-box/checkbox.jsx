import React, { Component } from "react";
import "./checkbox.css";

class Checkbox extends Component {
  state = {
    checkbox: {
      id: 1,
      name: "terms & condition",
      checkState: false,
      state: "error"
    }
  };

  handleCheckboxValueChange = checkboxName => {
    let checkbox = this.state.checkbox;
    checkbox.checkState = checkbox.checkState ? false : true;
    this.setState({
      checkbox
    });
  };

  getLabelClasses = checkboxState => {
    if (checkboxState === "error") {
      return "checkbox-label-error";
    } else if (checkboxState === "disable") {
      return "checkbox-label-disable";
    } else {
      return "checkbox-label";
    }
  };
  render() {
    let checkbox = this.props.checkbox;

    return (
      <div className="checkbox-container">
        <div className="checkbox">
          <input
            name={checkbox.name}
            type="checkbox"
            onChange={() => this.props.handleCheckboxValueChange()}
            checked={checkbox.checkState}
          />
        </div>
        {this.props.children ? (
          <div className={this.getLabelClasses(checkbox.state)}>
            {this.props.children}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Checkbox;
