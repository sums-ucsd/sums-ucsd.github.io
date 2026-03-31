import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/card.css';

export default function BoardMemberCard({ memberId, img, name, title}) {
  return (
    <article className="card">
      <img src={img} alt={name} className="card-img" loading="lazy" />
      <div className="card-body">
        <h3>{name}</h3>
        {title && <p className="title">{title}</p>}
        <Link to={`/board-members/profiles/${memberId}`} className="button">
          view more
        </Link>
      </div>
    </article>
  );
}
