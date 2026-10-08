import React from "react";

function Home() {
  return (
    <>
      <div>
        <img src="/assets/images/main_logo.png" alt="SUMS logo" className="main-image" />
      </div>

      <div className="button-container">
        <a
          href="https://forms.gle/9vU5qyGchCKLmSjt8"
          className="button-main"
          target="_blank"
          rel="noopener noreferrer"
        >
          meeting sign-in
        </a>
        <a
          href="https://forms.gle/thaqKh8B7HkZRyRv9"
          className="button-main"
          target="_blank"
          rel="noopener noreferrer"
        >
          event sign-in
        </a>
        <a
          href="https://forms.gle/miUYRyBEG5omHgA56"
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
