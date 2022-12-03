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
        <p>Practice Name: </p>
        <p>Address: </p>
        <p>Contact: </p>
        <p>Rating: </p>
        <p>Felt Safe: </p>
        <p>Felt Heard: </p>
        <p>Review Content: </p>
      </div>
    )
  }
}

export default ResultsCard