import React from "react";
import { Fragment } from "react";

interface CheckButtonProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

interface CheckButtonState {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

class CheckButton extends React.Component<CheckButtonProps, CheckButtonState> {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      isActive: props.isActive,
      onClick: props.onClick,
    };
  }

  render() {
    let button;
    if (this.props.isActive) {
      button = (
        <button
          onClick={this.state.onClick}
          className="check-main__check-list check-list-active"
        >
          {this.state.name}
        </button>
      );
    } else {
      button = (
        <button onClick={this.state.onClick} className="check-main__check-list">
          {this.state.name}
        </button>
      );
    }

    return <Fragment>{button}</Fragment>;
  }
}

export default CheckButton;
