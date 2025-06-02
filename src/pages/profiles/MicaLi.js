import React from 'react';
import micaImg from '../../assets/images/MicaLi.jpg';
import '../../Profile.css';

function MicaLi() {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={micaImg} className="profile" alt="Mica Li" />
      </div>

      <div className="profile-content">
        <h2>Mica Li</h2>
        <p><strong>Year:</strong> 4th Year, ERC</p>
        <p><strong>Major:</strong> Pure Math</p>
        <p>I wanted to find and join a community of people who love math!</p>
        <p><strong>Hobbies:</strong> knitting, weight-lifting, reading</p>
        <p><strong>Favorite Fields of Math:</strong> algebra, geometry</p>
        <p><strong>Favorite Math Classes:</strong> Math 100C, Math 250A</p>
        <p><strong>Website:</strong> <a href="https://li-michelle.github.io" target="_blank" rel="noopener noreferrer">li-michelle.github.io</a></p>
      </div>
    </div>
  );
}

export default MicaLi;