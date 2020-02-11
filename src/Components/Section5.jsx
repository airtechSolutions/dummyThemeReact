import React, { Component } from 'react'
import Background from '../img/navbarimg/investment-team-home.jpg';
import Logo1 from '../img/navbarimg/dentist-logo-300x202.png'
import Logo2 from '../img/navbarimg/health-logo-300x202.png'
import Logo3 from '../img/navbarimg/university-logo-300x202.png'
import Logo4 from '../img/navbarimg/agency-logo-300x202.png'
import Logo5 from '../img/navbarimg/avadalaw-logo-300x202.png'

export default class Section5 extends Component {
    render() {
        return (
            <div>
                <section className="video-area bg-img bg-overlay bg-fixed" style={{backgroundImage: `url(${Background})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="featured-video-area d-flex align-items-center justify-content-center">
                                    <div className="video-content text-center">
                                        <div style={{color:'white'}}>
                                            <h1  style={{color:'white'}}>Our Investment Team</h1>
                                            <p style={{color:'white'}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ornare ante. Proin aliquam odio id lorem finibus, a ullamcorper arcu posuere.</p>
                                        </div>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col">
                                                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                                        <div className="carousel-inner" style={{display: 'flex'}}>
                                                        <div className="carousel-item active">
                                                            <img className="d-block w-100" src={Logo1} alt="First slide"/>
                                                        </div>
                                                        <div className="carousel-item active">
                                                            <img className="d-block w-100" src={Logo2} alt="First slide"/>
                                                        </div>
                                                        <div className="carousel-item active">
                                                            <img className="d-block w-100" src={Logo3} alt="First slide"/>
                                                        </div>
                                                        <div className="carousel-item active">
                                                            <img className="d-block w-100" src={Logo4} alt="Second slide"/>
                                                        </div>
                                                        <div className="carousel-item active">
                                                            <img className="d-block w-100" src={Logo5} alt="Third slide"/>
                                                        </div>
                                                        </div>
                                                    </div>
                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
