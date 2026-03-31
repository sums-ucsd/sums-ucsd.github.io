import React, { useState } from "react";
import "../styles/pages/events.css";

function Events() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { src: "/assets/images/events/chess.jpg", text: "chess algorithms" },
    { src: "/assets/images/events/board-game-night.jpg", text: "board game night" },
    { src: "/assets/images/events/integration-bee-crowd.jpg", text: "integration bee" },
    { src: "/assets/images/events/integration-bee.jpg", text: "integration bee" },
    { src: "/assets/images/events/latex-workshop.jpg", text: "LaTeX workshop" },
    { src: "/assets/images/events/pi-day.jpg", text: "pi day jeopardy" },
    { src: "/assets/images/events/puzzles.jpg", text: "puzzle lightning talk" },
    { src: "/assets/images/events/research-workshop.jpg", text: "research opportunities workshop" },
  ];

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="slideshow-container">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`mySlides fade ${i === slideIndex ? "active" : ""}`}
            style={{ display: i === slideIndex ? "block" : "none" }}
          >
            <div className="numbertext">{`${i + 1} / ${slides.length}`}</div>
            <img src={slide.src} alt={slide.text} style={{ height: "450px" }} />
            <div className="text">{slide.text}</div>
          </div>
        ))}

        <a className="prev" onClick={prevSlide}>
          ❮
        </a>
        <a className="next" onClick={nextSlide}>
          ❯
        </a>
      </div>

      <br />

      <div className="events-content">
        <h2>What We Do</h2>
        <p>
          SUMS, a UC San Diego student organization, provides resources,
          workshops, talks, and social events for UCSD’s mathematics community
          with the goal of promoting mathematics and related fields.
        </p>

        <h3>Academic Workshops</h3>
        <p>
          We host many academic workshops throughout the year. These include
          upper-division workshops aimed at underclassmen so that they may get a
          feel for upper-division coursework and what courses to take.
          Furthermore, based on board member discretion we host workshops for
          specific courses. Past courses have included the MATH 31H series and
          MATH 20E. We also host workshops on research opportunities and math
          software such as LaTeX.
        </p>

        <h3>Social Events</h3>
        <p>
          We host social events such as board game nights, movie nights, study
          jams, and de-stress events. These help to promote connection in the
          mathematics community here at UCSD! Additionally, we also host our
          annual Pi Day Jeopardy and Integration Bees. Most events will come
          with snacks and food.
        </p>

        <h3>Lightning Talks</h3>
        <p>
          Any UCSD affiliate is free to give a lightning talk on any
          math-related topic that they find interesting. We will take care of
          the publicity and securing a room, you just need to show up! If you
          would like to give a talk, please fill out the form{" "}
          <a
            href="https://docs.google.com/forms/d/1zM4OpeyKMClutnLVL3X9uJoxLxIkLf_o0szbLuSXdOk/viewform?edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>
    </>
  );
}

export default Events;