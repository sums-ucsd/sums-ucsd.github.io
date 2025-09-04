import React from 'react';
import mohitImg from '../../assets/images/MohitDutta.jpg';
import '../../Profile.css';

function MohitDutta() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-image">
          <img src={mohitImg} className="profile" alt="Mohit Dutta" />
        </div>

        <div className="profile-content">
          <h2>Mohit Dutta</h2>
          <p><strong>Year:</strong> 2nd Year, Seventh</p>
          <p><strong>Major:</strong> Math-CS and Economics</p>
          <p>I joined SUMS to meet other math majors and make friends :)</p>
          <p><strong>Hobbies:</strong> rock climbing, singing, eating, reading, being chronically online</p>
          <p><strong>Favorite Fields of Math:</strong> graph theory</p>
          <p><strong>Favorite Math Classes:</strong> Math 170A</p>
        </div>
      </div>
    </div>
  );
}

export default MohitDutta;