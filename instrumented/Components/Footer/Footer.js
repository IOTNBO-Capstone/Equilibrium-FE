import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="resources" data-cy='resources'>
        <div className="links general" data-cy='general-resources'>
          <h3>General Mental Health Links</h3>
          <a href="https://www.mhanational.org/find-support-groups" className="webLink">Support Groups</a>
        </div>
        <div className="links coping" data-cy='coping-resources'>
          <h3>Coping Skills Links</h3>
          <div className="coping-links">
            <a href="https://success.oregonstate.edu/sites/success.oregonstate.edu/files/LearningCorner/Tools/stress_management_strategies.pdf" className="webLink">Stress Management</a>
            <a href="https://www.health.harvard.edu/blog/strategies-to-promote-better-sleep-in-these-uncertain-times-2020032719333" className="webLink">Better Sleep</a>
            <a href="https://www.restorecenterla.com/10-coping-skills-for-addiction-recovery/" className="webLink">Addiction Recovery</a>
            <a href="https://www.threeoakshospice.com/blog/bereavement-strategies-coping-with-grief-loss/" className="webLink">Bereavement Strategies</a>
            <a href="https://ccofmooresville.com/101-ways-to-cope-with-anxiety-and-depression/" className="webLink">Anxiety and Depression</a>
          </div>
        </div>
        <div className="links help-lines" data-cy='help-lines-resources'>
          <h3>Help Line Links</h3>
          <a href="https://www.helpguide.org/articles/therapy-medication/directory-of-international-mental-health-helplines.htm" className="webLink">Help Lines</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;