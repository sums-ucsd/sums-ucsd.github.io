import React from "react";
import "../styles/pages/get_involved.css";

function About() {
  return (
    <div className="get-involved">
      <img src="/assets/images/apm.jpg" alt="SUMS at APM building" className="get-involved-image" />

      <div className="get-involved-content">
        <h2>About Us</h2>
        <p>
          SUMS stands for the Society of Undergraduate Mathematics Students and we are the largest undergrad math organization here at UCSD. We aim to provide helpful workshops for all types of math majors as well as a way for the math community to come together. Our board meetings are at 4PM in APM 6402 on Mondays. Our events are mainly held in AP&M.
        </p>

        <h2>Membership Check</h2>
        <p>
          If you would like to check your membership status and if you are eligible for SUMS membership, you can fill out the form below. Please remember to delete your information after.
        </p>

        <iframe 
          src="https://docs.google.com/spreadsheets/d/19-j42XJFwiYh4QqfMx8L-qHsXiUzeaa6eCvdzW-0MAE/edit?usp=sharing" 
          title="SUMS Membership Check"
          scrolling="no" 
          frameBorder="1" 
          marginHeight="0px" 
          marginWidth="0px" 
          height="500px" 
          width="100%" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;
