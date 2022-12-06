import React, { Component } from "react";
import "./TherapistPage.css"

class TherapistPage extends Component {
  constructor() { 
    super()
    this.state = {

    }
  }

  // function to populate the provider information

  render() {
    return (
      <div className="provider-box">
        <div className="provider-background">
          <p>This will be an image of the provider</p>
          <p>This will be the provider's background information paragraph.</p>
        </div>
        <div className="provider-information">
          <h3>Practice Information: </h3>
          <h3>Name: </h3>
          <h3>Contact: </h3>
          <h3>Address: </h3>
          <h3>Website: </h3>
        </div>
        <div className="provider-tags">
          <p>The tags will be centered here</p>
        </div>
      </div>
    )
  }
}

export default TherapistPage