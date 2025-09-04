import React from 'react';
import julieImg from '../../assets/images/JulieHunter.jpeg';
import '../../Profile.css';

function JulieHunter() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-image">
          <img src={julieImg} className="profile" alt="Julie Hunter" />
        </div>

        <div className="profile-content">
          <h2>Julie Hunter</h2>
          <p><strong>Year:</strong> 4th year, Revelle</p>
          <p><strong>Major:</strong> Applied Math</p>
          <p>I joined SUMS because I wanted to meet more math students and get more involved in the math community at UCSD.</p>
          <p><strong>Hobbies:</strong> soccer, hot yoga, reading</p>
          <p><strong>Favorite Fields of Math:</strong> statistics, differential equations</p>
          <p><strong>Favorite Math Classes:</strong> Math 181A, Math 130, Math 112</p>
        </div>
      </div>
    </div>
  );
}

export default JulieHunter;