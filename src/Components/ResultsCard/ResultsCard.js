import React, {Component} from "react";
import "./ResultsCard.css"

class ResultsCard extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="results-card">
        <h2>Picture will go here </h2>
        <p>Practice Name: </p>
        <p>Address: </p>
        <p>Contact: </p>
        <p>Tags: </p>
      </div>
    )
  }
}

export default ResultsCard