import React from "react";
import "../styles/pages/get_involved.css";
import board_img from "../assets/images/sums_board.jpg";

function GetInvolved() {
  return (
    <div className="get-involved">
      {/* image: self-closing tag with src prop and alt text */}
      <img src={board_img} alt="SUMS board members" className="get-involved-image" />

      <div className="get-involved-content">
        <h2>Volunteering</h2>
        <p>
          If you would like to help run our events, or do anything else such as
          content creation, reach out to us on{" "}
          <a
            href="https://discord.gg/XVVeGHXGTt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>{" "}
          and inquire about a staff member position.
        </p>

        <h2>Becoming a Member</h2>
        <p>
          Anyone can attend our events, but an eligible student may become a SUMS
          member for additional benefits.
        </p>

        <h2>Requirements</h2>
        <p>
          To become a member, you need to attend three meetings and three events
          in one quarter.
        </p>

        <h2>Perks</h2>
        <p>
          Once a member, you get a free pin, can vote in elections, attend
          members-only events, and get discounts on merchandise.
        </p>
      </div>
    </div>
  );
}

export default GetInvolved;