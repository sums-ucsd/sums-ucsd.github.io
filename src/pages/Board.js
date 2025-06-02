import { Link } from 'react-router-dom';
import React from 'react';
import '../Board.css';
import julieImg from '../assets/images/JulieHunter.jpeg';
import harryImg from '../assets/images/HarryLonsdale.png';
import micaImg from '../assets/images/MicaLi.jpg';
import emilyImg from '../assets/images/EmilyHawksworth.jpeg';
import isaiahImg from '../assets/images/IsaiahFang.jpeg';
import ryanImg from '../assets/images/RyanBatubara.jpeg';
import haileyImg from '../assets/images/HaileyThai.jpeg';
import thomasImg from '../assets/images/ThomasMadden.jpeg';
import mattImg from '../assets/images/MattTokunaga.jpeg';
import mohitImg from '../assets/images/MohitDutta.jpg';


function Board() {
    return (
        <React.Fragment>
            
            <h2>If you have any general inquiries, please email us at sums (at) ucsd (dot) edu.</h2>

            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={julieImg} alt="Julie" style={{ height: '200px' }} />
                        <div className="card-body">
                            <h2>Julie Hunter</h2>
                            <p className="title">President</p>
                            <p>Julie is a fourth year applied math student.</p>
                            <p><Link to="/board-members/profiles/julie-hunter" className="button">view more</Link></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={harryImg} alt="Harry" style={{ height: '200px' }} />
                        <div className="card-body">
                            <h2>Harry Lonsdale</h2>
                            <p className="title">VP External</p>
                            <p>Harry is a third year math-cs student.</p>
                            <p><Link to="/board-members/profiles/harry-lonsdale" className="button">view more</Link></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={micaImg} alt="Mica" style={{ height: '200px' }} />
                        <div className="card-body">
                            <h2>Mica Li</h2>
                            <p className="title">VP Internal</p>
                            <p>Mica is a fourth year pure math student.</p>
                            <p><Link to="/board-members/profiles/mica-li" className="button">view more</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={emilyImg} alt="Emily" style={{ height: '200px' }} />
                        <div className="card-body">
                            <h2>Emily Hawksworth</h2>
                            <p className="title">Secretary</p>
                            <p>Emily is a third year probability and statistics student.</p>
                            <p><Link to="/board-members/profiles/emily-hawksworth" className="button">view more</Link></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={isaiahImg} alt="Isaiah" style={{ height: '200px' }} />
                        <div className="card-body">
                            <h2>Isaiah Fang</h2>
                            <p className="title">Treasurer</p>
                            <p>Isaiah is a third year math-econ student.</p>
                            <p><Link to="/board-members/profiles/isaiah-fang" className="button">view more</Link></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={ryanImg} alt="Ryan" style={{ height: '200px' }} />
                        <div className="card-body">
                            <h2>Ryan Batubara</h2>
                            <p className="title">Workshops Chair</p>
                            <p>Ryan is a third year math and data science student.</p>
                            <p><Link to="/board-members/profiles/ryan-batubara" className="button">view more</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={haileyImg} alt="Hailey" style={{ height: '200px' }} />
                        <div className="card-body">
                            <h2>Hailey Thai</h2>
                            <p className="title">Publicity Chair</p>
                            <p>Hailey is a third year probability and statistics student.</p>
                            <p><Link to="/board-members/profiles/hailey-thai" className="button">view more</Link></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={thomasImg} alt="Thomas" style={{ height: '200px' }} />
                        <div className="card-body">
                            <h2>Thomas Madden</h2>
                            <p className="title">Events Chair</p>
                            <p>Thomas is a second year pure math student. </p>
                            <p><Link to="/board-members/profiles/thomas-madden" className="button">view more</Link></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={mattImg} alt="Matt" style={{ height: '200px' }} />
                        <div className="card-body">
                            <h2>Matt Tokunaga</h2>
                            <p className="title">Historian</p>
                            <p>Matt is a second year pure math and data science student.</p>
                            <p><Link to="/board-members/profiles/matt-tokunaga" className="button">view more</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={mohitImg} alt="Mohit" style={{ height: '200px' }} />
                        <div className="card-body">
                            <h2>Mohit Dutta</h2>
                            <p className="title">Media Chair</p>
                            <p>Mohit is a second year math-cs and economics student.</p>
                            <p><Link to="/board-members/profiles/mohit-dutta" className="button">view more</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Board;
