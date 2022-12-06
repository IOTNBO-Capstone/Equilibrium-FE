import React, { Component } from "react";
import TherapistCard from "../TherapistCard/TherapistCard";
import "./LandingPage.css"

class LandingPage extends Component {
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
            <TherapistCard />
            <TherapistCard />
            <TherapistCard />
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage