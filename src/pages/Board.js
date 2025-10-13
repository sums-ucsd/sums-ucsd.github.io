import React from 'react';
import '../styles/pages/board.css';
import BoardMemberCard from '../components/BoardMemberCard';
import { profiles } from '../data/profiles';

function Board() {
  const members = Object.entries(profiles).map(([memberId, info]) => ({
    memberId,
    ...info,
  }));

  return (
    <div className="board-section">
      <h2 className="board-header">
        If you have any general inquiries, please email us at sums (at) ucsd (dot) edu.
      </h2>

      <section className="board-grid" aria-label="SUMS board members">
        {members.map((m) => (
          <BoardMemberCard
            key={m.memberId}
            memberId={m.memberId}
            img={m.img}
            name={m.name}
            title={m.title}
            bio={m.bio}
          />
        ))}
      </section>
    </div>
  );
}

export default Board;
