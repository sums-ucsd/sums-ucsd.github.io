import React from 'react';
import ryanImg from '../../assets/images/RyanBatubara.jpeg';
import '../../Profile.css';

function RyanBatubara() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-image">
          <img src={ryanImg} className="profile" alt="Ryan Batubara" />
        </div>

        <div className="profile-content">
          <h2>Ryan Batubara</h2>
          <p><strong>Year:</strong> 3rd Year, Revelle</p>
          <p><strong>Major:</strong> Math-CS and Data Science</p>
          <p>I joined SUMS to meet other math majors.</p>
          <p><strong>Hobbies:</strong> classical guitar</p>
          <p><strong>Favorite Fields of Math:</strong> algebraic topology, recreational math</p>
          <p><strong>Favorite Math Classes:</strong> Math 100B, Math 87</p>
        </div>
      </div>
    </div>
  );
}

export default RyanBatubara;