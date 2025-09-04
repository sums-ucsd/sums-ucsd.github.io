import React from 'react';
import mattImg from '../../assets/images/MattTokunaga.jpeg';
import '../../Profile.css';

function MattTokunaga() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-image">
          <img src={mattImg} className="profile" alt="Matt Tokunaga" />
        </div>

        <div className="profile-content">
          <h2>Matt Tokunaga</h2>
          <p><strong>Year:</strong> 3rd Year, Revelle</p>
          <p><strong>Major:</strong> Pure Math and Data Science</p>
          <p>I joined SUMS to make lifelong friends that share my interests 😊</p>
          <p><strong>Hobbies:</strong> sports, video games, painting</p>
          <p><strong>Favorite Fields of Math:</strong> real analysis</p>
          <p><strong>Favorite Math Classes:</strong> Math 140B</p>
        </div>
      </div>
    </div>
  );
}

export default MattTokunaga
