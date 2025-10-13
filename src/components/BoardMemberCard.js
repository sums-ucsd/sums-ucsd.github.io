import React from 'react';
import { Link } from 'react-router-dom';

export default function BoardMemberCard({ memberId, img, name, title, bio }) {
  return (
    <article className="card">
      <img src={img} alt={name} className="card-img" loading="lazy" />
      <div className="card-body">
        <h3>{name}</h3>
        {title && <p className="title">{title}</p>}
        {bio && <p className="bio">{bio}</p>}
        <Link to={`/board-members/profiles/${memberId}`} className="button">
          view more
        </Link>
      </div>
    </article>
  );
}
