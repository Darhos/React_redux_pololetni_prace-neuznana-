import React, { Component } from "react";
import "./Kostky.css";
import { connect } from "react-redux";
import { actionCreators as accisla } from "../../store/cisla";
import Kostka from "../Kostka/Kostka";
import { throwDice, nextRound, endGame } from "../../Model/index";

// Komponenta reprezentující pole hrací pole kostek
class Kostky extends Component {
  constructor() {
    super();
    this.handleThrow = this.handleThrow.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.state = {
      nums: [],
      body: 0
    };
  }

  // Zavolá se před vykreslením komponenty
  componentWillMount() {
    this.setState({
      body: document.cookie === "" ? 0 : parseInt(document.cookie)
    });
  }

  // Hod kostkou - náhodné generování
  handleThrow() {
    this.props.nastavCisla(throwDice());
  }

  // Další hod - kontrola bodů
  handleNext() {
    let response = nextRound(this.state.nums, this.state.body);
    this.setState({ body: response, nums: [] });
    this.handleThrow();
  }

  // Konec kola - kontrola výhry
  handleEnd() {
    endGame();
  }

  render() {
    // Generování pole kostek
    const kostky = this.props.cisla.map(kostka => {
      return (
        <Kostka
          number={kostka}
          onClick={() => {
            this.setState({ nums: [...this.state.nums, kostka] });
          }}
          style={{ width: 50, height: 50 }}
        />
      );
    });

    return (
      <div className="Kostky">
        <h1 id="nadpis">Kingdom Come Deliverance - Kostky</h1>
        <button onClick={this.handleThrow}>Hoď kostkou!</button>
        <button onClick={this.handleNext}>Další hod!</button>
        <button onClick={this.handleEnd}>Ukonči kolo!</button>
        <h1 id="body">{this.state.body}</h1>
        <div className="kosticka">{kostky}</div>
      </div>
    );
  }
}

// Propojení reduxu s komponentou
export default connect(
  state => {
    return {
      cisla: state.cisla.cisla
    };
  },
  {
    nastavCisla: accisla.nastavCisla
  }
)(Kostky);
