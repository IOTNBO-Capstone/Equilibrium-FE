import React, { Component } from "react";
import "./LandingPage.css"

class LandingPage extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="navigation-box">
        <p>How can we help you today?</p>
        <div className="navigation-buttons">
          <div className="all-reviews selection"> <p>All Therapy Reviews</p></div>
          <div className="top-reviews selection"><p>Top Rated Therapy Reviews</p></div>
          <div className="specialty-reviews selection"><p>Specialty Therapy Reviews</p></div>
          <div className="low-cost selection"><p>Low Cost Therapy Reviews</p></div>
          <div className="sliding-cost selection"><p>Sliding Cost Therapy Reviews</p></div>
          <div className="psychiatry reviews selection"><p>Psychiatry Reviews</p></div>
          <div className="unused-tab selection"><p>Pending</p></div>
          <div className="unused-tab selection"><p>Pending</p></div>
          <div className="unused-tab selection"><p>Pending</p></div>
          <div className="unused-tab selection"><p>Pending</p></div>
        </div>
      </div>
    )
  }
}

export default LandingPage