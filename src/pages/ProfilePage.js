import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { profiles } from '../data/profiles';
import '../styles/pages/profile.css';

function ProfilePage() {
  const { memberId } = useParams();
  const profile = profiles[memberId];

  if (!profile) {
    return <div>Profile not found.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={profile.img} className="profile" alt={profile.name} />
      </div>

      <div className="profile-content">
        <h2>{profile.name}</h2>
        {profile.title && <p><strong>Role:</strong> {profile.title}</p>}
        {profile.year && <p><strong>Year:</strong> {profile.year}</p>}
        {profile.major && <p><strong>Major:</strong> {profile.major}</p>}
        {profile.bio && <p>{profile.bio}</p>}
        {profile.hobbies && <p><strong>Hobbies:</strong> {profile.hobbies}</p>}
        {profile.favoriteFields && (
          <p><strong>Favorite Fields of Math:</strong> {profile.favoriteFields}</p>
        )}
        {profile.favoriteClasses && (
          <p><strong>Favorite Math Classes:</strong> {profile.favoriteClasses}</p>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;