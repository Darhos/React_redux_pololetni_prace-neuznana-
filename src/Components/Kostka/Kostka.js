import React, { Component } from "react";
import "./Kostka.css";

// Komponenta Kostka - Button s číslem
class Kostka extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // Disable kostky pokud už byla vybrána
  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <button
        id="tlacitko"
        disabled={this.state.clicked}
        onClick={() => {
          this.props.onClick();
          this.handleClick();
        }}
      >
        {this.props.number}
      </button>
    );
  }
}

export default Kostka;
