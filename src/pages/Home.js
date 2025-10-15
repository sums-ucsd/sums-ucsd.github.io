import React from "react";
import mainLogo from "../assets/images/main_logo.png";

function Home() {
  return (
    <>
      <div>
        <img src={mainLogo} alt="SUMS logo" className="main-image" />
      </div>

      <div className="button-container">
        <a
          href="https://forms.gle/NTt7DFMNYkBJQx4y5"
          className="button-main"
          target="_blank"
          rel="noopener noreferrer"
        >
          meeting sign-in
        </a>
        <a
          href="https://forms.gle/zRqwfVnr4QXME5Xk6"
          className="button-main"
          target="_blank"
          rel="noopener noreferrer"
        >
          event sign-in
        </a>
        <a
          href="https://forms.gle/A1n3Bi3x1rN3pCHc7"
          className="button-main"
          target="_blank"
          rel="noopener noreferrer"
        >
          membership application
        </a>
      </div>
    </>
  );
}

export default Home;
