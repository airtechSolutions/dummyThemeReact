import React, { Component } from 'react';
import Logo from '../img/navbarimg/logo.png'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <header className="header-area" style={{position:'fixed',backgroundColor:'white', paddingTop:'25px'}}>        
                    <div className="newsbox-main-menu">
                        <div className="classy-nav-container breakpoint-off">
                            <div className="container" style={{backgroundColor: 'white'}}>
                                
                                <nav className="classy-navbar justify-content-between" id="newsboxNav">

                                    
                                    <a href="index.html" className="nav-brand"><img src={Logo} alt=""/></a>

                                    
                                    <div className="classy-navbar-toggler">
                                        <span className="navbarToggler"><span></span><span></span><span></span></span>
                                    </div>

                                    
                                    <div className="classy-menu">

                                        
                                        <div className="classycloseIcon">
                                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                        </div>

                                        
                                        <div className="classynav">
                                            <ul>
                                                <li><a className="activatedLink" href="#">Home</a></li>
                                                <li><a className="hoverLink" href="#">About</a>
                                                    <div className="megamenu">
                                                        <div className="single-mega cn-col-4 boxxxa">
                                                            <div style={{display: 'flex'}}><i style={{margin: '5px'}} className="fas fa-users"></i><h5>Our Team &nbsp;<span  style={{backgroundColor: '#a0ce4e !important', fontWeight: 100, padding: '10px'}} className="badge badge-secondary">Vacancies</span></h5></div>
                                                            <p className="megamenuText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum ultrices arcu ac vestibulum. Nam nec tempus quam.</p>
                                                            <button  style={{backgroundColor: '#a0ce4e !important', border:'#a0ce4e'}} type="button" className="btn btn-success">OUR TEAM</button>
                                                        </div>
                                                        <div className="single-mega cn-col-4 boxxxb">
                                                            <div style={{display: 'flex'}}><i style={{margin: '5px'}} className="far fa-calendar-alt"></i><h5>Our Team</h5></div>
                                                            <p className="megamenuText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum ultrices arcu ac vestibulum. Nam nec tempus quam.</p>
                                                            <button  style={{backgroundColor: '#a0ce4e !important', border:'#a0ce4e'}} type="button" className="btn btn-success">OUR HISTORY</button>
                                                        </div>
                                                        <div className="single-mega cn-col-4 boxxxc">
                                                            <div style={{display: 'flex'}}><i style={{margin: '5px'}} className="fas fa-book"></i><h5>Our Team</h5></div>
                                                            <p className="megamenuText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum ultrices arcu ac vestibulum. Nam nec tempus quam.</p>
                                                            <button  style={{backgroundColor: '#a0ce4e !important', border:'#a0ce4e'}} type="button" className="btn btn-success">OUR CULTURE</button>
                                                        </div>
                                                        <div className="single-mega cn-col-4 boxxxd">
                                                            <div style={{display: 'flex'}}><i style={{margin: '5px'}} className="fas fa-question"></i><h5>Our Team</h5></div>
                                                            <p className="megamenuText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum ultrices arcu ac vestibulum. Nam nec tempus quam.</p>
                                                            <button  style={{backgroundColor: '#a0ce4e !important', border:'#a0ce4e'}} type="button" className="btn btn-success">CORPORATE FAQ</button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li><a className="hoverLink" href="#">Shop Online</a></li>
                                                <li><a className="hoverLink" href="#">Investors</a>
                                                    <div className="megamenu">
                                                        <div className="single-mega cn-col-4">
                                                            <div style={{display: 'flex'}}><i style={{margin: '5px'}} className="fas fa-file-invoice-dollar"></i><h5>People Who Trust Us</h5></div>
                                                            <p style={{lineHeight: 1.6}} className="megamenuText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum ultrices arcu ac vestibulum. Nam nec tempus quam.</p>
                                                            <button  style={{backgroundColor: '#a0ce4e !important', border:'#a0ce4e'}} type="button" className="btn btn-success">OUR TEAM</button>
                                                        </div>
                                                        <div className="single-mega cn-col-4 boxxxe">
                                                        </div>
                                                        <div className="single-mega cn-col-4">
                                                            <img style={{borderRadius: '5px'}} src="./img/navbarimg/stock-performance.png" />
                                                            <h5 style={{textAlign: 'center', marginTop: '20px'}}>Stock Performance</h5>
                                                            <img style={{borderRadius: '5px', marginTop: '5px'}} src="./img/navbarimg/shareholder-faq-item.jpg" />
                                                            <h5 style={{textAlign: 'center', marginTop: '20px'}}>Shareholder FAQ</h5>
                                                        </div>
                                                        <div className="single-mega cn-col-4">
                                                            <img style={{borderRadius: '5px'}} src="./img/navbarimg/corporate-governance.png" />
                                                            <h5 style={{textAlign: 'center', marginTop: '20px'}}>Corporate Governance</h5>
                                                            <img style={{borderRadius: '5px', marginTop: '5px'}} src="./img/navbarimg/earnings.png" />
                                                            <h5 style={{textAlign: 'center', marginTop: '20px'}}>Earnings</h5>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li><a className="hoverLink" href="#">Contact Us</a></li>
                                                <li><a className="hoverLink" href="#">News</a>
                                                </li>
                                                <li><a className="hoverLink" href="#"><i className="fas fa-cart-plus"></i></a></li>
                                            </ul>

                                            
                                        </div>
                                        

                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        )
    }
}
