import { useEffect } from "react";

function Events() {
    let slideIndex = 1;

    useEffect(() => {
        showSlides(slideIndex);
    }, []);

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    };

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    };

    const showSlides = (n) => {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
        }
        if (dots[slideIndex - 1]) {
            dots[slideIndex - 1].className += " active";
        }
    };

    return (
        <>
            <div className="slideshow-container">

                <div className="mySlides fade">
                    <div className="numbertext">1 / 8</div>
                    <img src="images/board-game-night.jpg" style={{ height: "450px" }} />
                    <div className="text">board game night</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 8</div>
                    <img src="images/chess.jpg" style={{ height: "450px" }} />
                    <div className="text">chess algorithms</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 8</div>
                    <img src="images/integration-bee-crowd.jpg" style={{ height: "450px" }} />
                    <div className="text">integration bee</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">4 / 8</div>
                    <img src="images/integration-bee.jpg" style={{ height: "450px" }} />
                    <div className="text">integration bee</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">5 / 8</div>
                    <img src="images/latex-workshop.jpg" style={{ height: "450px" }} />
                    <div className="text">LaTeX workshop</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">6 / 8</div>
                    <img src="images/pi-day.jpg" style={{ height: "450px" }} />
                    <div className="text">pi day jeopardy</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">7 / 8</div>
                    <img src="images/puzzles.jpg" style={{ height: "450px", width: "50%" }} />
                    <div className="text">puzzle lightning talk</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">8 / 8</div>
                    <img src="images/research-workshop.jpg" style={{ height: "450px" }} />
                    <div className="text">research opportunities workshop</div>
                </div>

                <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
                <a className="next" onClick={() => plusSlides(1)}>❯</a>

            </div>

            <br />

            <div className="events-content">
                <h2>What We Do</h2>
                <p>SUMS, a UC San Diego student organization, provides resources, workshops, talks, and social events for UCSD’s mathematics community with the goal of promoting mathematics and related fields.</p>

                <h3>Academic Workshops</h3>
                <p>We host many academic workshops throughout the year. These include upper-division workshops aimed at underclassmen so that they may get a feel for upper-division coursework and what courses to take. Furthermore, based on board member discretion we host workshops for specific courses. Past courses have included the MATH 31H series and MATH 20E. We also host workshops on research opportunities and math software such as LaTeX.</p>

                <h3>Social Events</h3>
                <p>We host social events such as board game nights, movie nights, study jams, and de-stress events. These help to promote connection in the mathematics community here at UCSD! Additionally, we also host our annual Pi Day Jeopardy and Integration Bees. Most events will come with snacks and food.</p>

                <h3>Lightning Talks</h3>
                <p>Any UCSD affiliate is free to give a lightning talk on any math-related topic that they find interesting. We will take care of the publicity and securing a room, you just need to show up! If you would like to give a talk, please fill out the form <a href="https://docs.google.com/forms/d/1zM4OpeyKMClutnLVL3X9uJoxLxIkLf_o0szbLuSXdOk/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
        </>
    );
}

export default Events;
