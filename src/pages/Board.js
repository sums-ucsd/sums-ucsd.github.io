import React from 'react';
import '../Board.css';
import BoardMemberCard from '../components/BoardMemberCard';
import { profiles } from '../data/profiles';

function Board() {
  // convert object -> array with memberId
  const members = Object.entries(profiles).map(([memberId, info]) => ({
    memberId,
    ...info,
  }));

  return (
    <div>
      <h2>
        If you have any general inquiries, please email us at sums (at) ucsd (dot) edu.
      </h2>

      <div className="row" aria-label="SUMS board members">
        {members.map((m) => (
          <div className="column" key={m.memberId}>
            <BoardMemberCard
              memberId={m.memberId}
              img={m.img}
              name={m.name}
              title={m.title}
              bio={m.bio}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;