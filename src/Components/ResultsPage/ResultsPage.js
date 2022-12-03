import React, { Component } from "react";
import ResultsCard from "../ResultsCard/ResultsCard";
import "./ResultsPage.css"

class ResultsPage extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  // Function to map the providers

  render() {
    return(
      <div className="results-window">
        <p>Choose up to 5 additional filters</p>
        <div className="filter-box">
          <p>The checkboxes will go here</p>
          <div className="results-cards">
            <ResultsCard />
            <ResultsCard />
            <ResultsCard />
          </div>
        </div>
      </div>
    )
  }
}

export default ResultsPage