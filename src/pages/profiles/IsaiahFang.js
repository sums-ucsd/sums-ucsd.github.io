import React from 'react';
import isaiahImg from '../../assets/images/IsaiahFang.jpeg';
import '../../Profile.css';

function IsaiahFang() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-image">
          <img src={isaiahImg} className="profile" alt="Isaiah Fang" />
        </div>

        <div className="profile-content">
          <h2>Isaiah Fang</h2>
          <p><strong>Year:</strong> 3rd Year, Revelle</p>
          <p><strong>Major:</strong> Mathematics and Economics</p>
          <p>I joined SUMS to create a comfortable environment for Mathematics students to connect with each other. I felt encouraged to manage the club's finances and help execute our initiatives at fun and social events.</p>
          <p><strong>Hobbies:</strong> running, eating, exploring nature</p>
          <p><strong>Favorite Fields of Math:</strong> calculus</p>
          <p><strong>Favorite Math Classes:</strong> Math 20C</p>
        </div>
      </div>
    </div>
  );
}

export default IsaiahFang;