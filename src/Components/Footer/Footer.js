import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <h2>Additional Resources:</h2>
      <section className="resources">
        <div className="general">
          <h3>General Mental Health</h3>
          <a href="https://www.mhanational.org/find-support-groups" className="webLink">Support Groups</a>
        </div>
        <div className="coping">
          <h3>Coping Skills</h3>
          <a href="https://success.oregonstate.edu/sites/success.oregonstate.edu/files/LearningCorner/Tools/stress_management_strategies.pdf" className="webLink">Stress Management</a>
          <a href="https://www.health.harvard.edu/blog/strategies-to-promote-better-sleep-in-these-uncertain-times-2020032719333" className="webLink">Better Sleep</a>
          <a href="https://www.restorecenterla.com/10-coping-skills-for-addiction-recovery/" className="webLink">Addiction Recovery</a>
          <a href="https://www.threeoakshospice.com/blog/bereavement-strategies-coping-with-grief-loss/" className="webLink">Bereavement Strategies</a>
          <a href="https://ccofmooresville.com/101-ways-to-cope-with-anxiety-and-depression/" className="webLink">Anxiety and Depression</a>
        </div>
        <div className="help-lines">
          <h3>Help Lines</h3>
          <a href="https://www.helpguide.org/articles/therapy-medication/directory-of-international-mental-health-helplines.htm" className="webLink">Help Lines</a>
        </div>
      </section>
    </div>
  )
}

export default Footer