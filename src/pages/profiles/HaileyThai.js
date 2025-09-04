import React from 'react';
import haileyImg from '../../assets/images/HaileyThai.jpeg';
import '../../Profile.css';

function HaileyThai() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-image">
          <img src={haileyImg} className="profile" alt="Hailey Thai" />
        </div>

        <div className="profile-content">
          <h2>Hailey Thai</h2>
          <p><strong>Year:</strong> 3rd Year, ERC</p>
          <p><strong>Major:</strong> Math - Probability and Statistics</p>
          <p>I joined SUMS because when I attended my first event, it seemed really fun and I wanted to be a part of a math-loving community.</p>
          <p><strong>Hobbies:</strong> juggling, rubik’s cubes, speed stacking, jigsaw puzzles, duotrigordle</p>
          <p><strong>Favorite Fields of Math:</strong> probability, statistics</p>
          <p><strong>Favorite Math Classes:</strong> Math 180ABC, Math 109, Math 154</p>
        </div>
      </div>
    </div>
  );
}

export default HaileyThai;