import React, {Component} from "react";
import "./TherapistCard.css"

class TherapistCard extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="therapist-card">
        <h2>Picture will go here </h2>
        <p>Practice Name: </p>
        <p>Address: </p>
        <p>Contact: </p>
        <p>Tags: </p>
      </div>
    )
  }
}

export default TherapistCard