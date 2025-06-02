import React from 'react';
import thomasImg from '../../assets/images/ThomasMadden.jpeg';
import '../../Profile.css';

function ThomasMadden() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-image">
          <img src={thomasImg} className="profile" alt="Thomas Madden" />
        </div>

        <div className="profile-content">
          <h2>Thomas Madden</h2>
          <p><strong>Year:</strong> 2nd Year, Marshall</p>
          <p><strong>Major:</strong> Pure Math</p>
          <p>I joined SUMS to be apart of a community of students interested in advanced mathematics, and to have the opportunity to contribute to the creation/planning of math-related competitions and workshops.</p>
          <p><strong>Hobbies:</strong> basketball, drawing, reading</p>
          <p><strong>Favorite Fields of Math:</strong> analysis, probability, analytic number theory</p>
          <p><strong>Favorite Math Classes:</strong> Math 140A, Math 105, Math 180A</p>
        </div>
      </div>
    </div>
  );
}

export default ThomasMadden;