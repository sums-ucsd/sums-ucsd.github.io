
import { Link } from 'react-router-dom';
import React from 'react';

function Board() {
    return (
        <React.Fragment>

            <h2>If you have any general inquiries, please email us at sums (at) ucsd (dot) edu.</h2>

            <div className="row">
                {/* Example of a board member card */}
                <div className="column">
                    <div className="card">
                        <img src="board-members/profile-images/JulieHunter.jpeg" alt="Julie" style={{ height: '200px' }} />
                        <div className="container">
                            <h2>Julie Hunter</h2>
                            <p className="title">President</p>
                            <p>Julie is a fourth year applied math student.</p>
                            <p>
                                <button className="button">
                                    <a href="board-members/profiles/julie-hunter.html">View More</a>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="board-members/profile-images/HarryLonsdale.png" alt="Harry" style={{height:'200px'}} />
                        <div class="container">
                            <h2>Harry Lonsdale</h2>
                            <p class="title">VP External</p>
                            <p>Harry is a third year math-cs student.</p>
                            <p><button class="button"><a href="board-members/profiles/harry-lonsdale.html">view more</a></button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="board-members/profile-images/MicaLi.jpg" alt="Mica" style={{height:'200px'}} />
                        <div class="container">
                            <h2>Mica Li</h2>
                            <p class="title">VP Internal</p>
                            <p>Mica is a fourth year pure math student.</p>
                            <p><button class="button"><a href="board-members/profiles/mica-li.html">view more</a></button></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="board-members/profile-images/EmilyHawksworth.jpeg" alt="Emily" style={{height:'200px'}} />
                        <div class="container">
                            <h2>Emily Hawksworth</h2>
                            <p class="title">Secretary</p>
                            <p>Emily is a third year probability and statistics student.</p>
                            <p><button class="button"><a href="board-members/profiles/emily-hawksworth.html">view more</a></button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="board-members/profile-images/IsaiahFang.jpeg" alt="Isaiah" style={{height:'200px'}} />
                        <div class="container">
                            <h2>Isaiah Fang</h2>
                            <p class="title">Treasurer</p>
                            <p>Isaiah is a third year math-econ student.</p>
                            <p><button class="button"><a href="board-members/profiles/isaiah-fang.html"> view more </a></button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="board-members/profile-images/RyanBatubara.jpeg" alt="Ryan" style={{height:'200px'}} />
                        <div class="container">
                            <h2>Ryan Batubara</h2>
                            <p class="title">Workshops Chair</p>
                            <p>Ryan is a third year math and data science student.</p>
                            <p><button class="button"><a href="board-members/profiles/ryan-batubara.html">view more</a></button></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="board-members/profile-images/HaileyThai.jpeg" alt="Hailey" style={{height:'200px'}} />
                        <div class="container">
                            <h2>Hailey Thai</h2>
                            <p class="title">Publicity Chair</p>
                            <p>Hailey is a third year probability and statistics student.</p>
                            <p><button class="button"><a href="board-members/profiles/hailey-thai.html">view more</a></button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="board-members/profile-images/ThomasMadden.jpeg" alt="Thomas" style={{height:'200px'}} />
                        <div class="container">
                            <h2>Thomas Madden</h2>
                            <p class="title">Events Chair</p>
                            <p>Thomas is a second year pure math student. </p>
                            <p><button class="button"><a href="board-members/profiles/thomas-madden.html"> view more </a></button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="board-members/profile-images/Matt Tokunaga.jpeg" alt="Matt" style={{height:'200px'}} />
                        <div class="container">
                            <h2>Matt Tokunaga</h2>
                            <p class="title">Historian</p>
                            <p>Matt is a second year pure math and data science student.</p>
                            <p><button class="button"><a href="board-members/profiles/matt-tokunaga.html">view more</a></button></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="board-members/profile-images/MohitDutta.jpg" alt="Mohit" style={{height:'200px'}} />
                        <div class="container">
                            <h2>Mohit Dutta</h2>
                            <p class="title">Media Chair</p>
                            <p>Mohit is a second year math-cs and economics student.</p>
                            <p><button class="button"><a href="board-members/profiles/mohit-dutta.html">view more</a></button></p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Board;