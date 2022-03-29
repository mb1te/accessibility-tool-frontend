import React from "react";
import { Fragment } from "react";

interface CheckButtonProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

class CheckButton extends React.Component<CheckButtonProps, {}> {
  render() {
    let button;
    if (this.props.isActive) {
      button = (
        <button
          onClick={this.props.onClick}
          className="check-main__check-list check-list-active"
        >
          {this.props.name}
        </button>
      );
    } else {
      button = (
        <button onClick={this.props.onClick} className="check-main__check-list">
          {this.props.name}
        </button>
      );
    }

    return <Fragment>{button}</Fragment>;
  }
}

export default CheckButton;
