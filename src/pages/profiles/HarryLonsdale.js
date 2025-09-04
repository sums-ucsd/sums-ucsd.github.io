import React from 'react';
import harryImg from '../../assets/images/HarryLonsdale.png';
import '../../Profile.css';

function HarryLonsdale() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-image">
          <img src={harryImg} className="profile" alt="Harry Lonsdale" />
        </div>

        <div className="profile-content">
          <h2>Harry Lonsdale</h2>
          <p><strong>Year:</strong> 3rd Year, Seventh</p>
          <p><strong>Major:</strong> Math-CS</p>
          <p>Free food. Just kidding, I wanted to connect with other math students and build a stronger community among undergrads in the department (while eating free food).</p>
          <p><strong>Hobbies:</strong> running, triathlon, watching English soccer, coding</p>
          <p><strong>Favorite Fields of Math:</strong> algebra, graph theory</p>
          <p><strong>Favorite Math Classes:</strong> Math 154</p>
          <p><strong>Website:</strong> <a href="https://harrylons.com" target="_blank" rel="noopener noreferrer">harrylons.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default HarryLonsdale;