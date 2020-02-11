import React, { Component } from 'react';
import Background from '../img/navbarimg/home-hero-bg.jpg'

export default class Section1 extends Component {
    render() {
        return (
            <div>
                <section className="video-area bg-img bg-overlay" style={{paddingTop: '100px', backgroundImage: `url(${Background})`,backgroundAttachment:'fixed'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="featured-video-area d-flex align-items-center justify-content-center">
                                    <div className="video-content text-center">
                                        <div style={{color: 'white'}}>
                                            <h1  style={{color: 'white'}}>Global Software</h1>
                                            <h2  style={{color: 'white'}}>FOR CORPORATE MARKET</h2>
                                            <h2><span  style={{backgroundColor: '#a0ce4e', padding: '15px', marginTop: '50px', fontWeight: 100}} className="badge badge-secondary">Vacancies</span></h2>    
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
