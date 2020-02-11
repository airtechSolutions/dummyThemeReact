import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="section footer-classic context-dark bg-image" style={{background: '#2d3246', marginTop: '25px'}}>
                    <div className="container" style={{paddingTop: '25px'}}>
                    <div className="row row-30">
                        <div className="col-md-4 col-xl-5">
                        <div className="pr-xl-4"><a className="brand" href="#"><img className="brand-logo-light" src="images/agency/logo-inverse-140x37.png" alt="" width="140" height="37" srcSet="images/agency/logo-retina-inverse-280x74.png 2x"/></a>
                            <p style={{color: 'white'}}>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
                            <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <h5 style={{color: 'white'}}>Contacts</h5>
                        <dl className="contact-list">
                            <dt style={{color: 'white', fontWeight: 100}}>Address:</dt>
                            <dd style={{color: 'white', fontWeight: 100}}>798 South Park Avenue, Jaipur, Raj</dd>
                        </dl>
                        <dl className="contact-list">
                            <dt style={{color: 'white', fontWeight: 100}}>email:</dt>
                            <dd><a href="mailto:#" style={{color: 'white', fontWeight: 100}}>dkstudioin@gmail.com</a></dd>
                        </dl>
                        <dl className="contact-list">
                            <dt style={{color: 'white', fontWeight: 100}}>phones:</dt>
                            <dd><a href="#" style={{color: 'white', fontWeight: 100}}>https://google.com</a> <span>or</span> <a href="#" style={{color: 'white', fontWeight: 100}}>https://google.com</a>
                            </dd>
                        </dl>
                        </div>
                        <div className="col-md-4 col-xl-3">
                        <h5 style={{color: 'white'}}>Links</h5>
                        <ul className="nav-list">
                            <li><a href="#" style={{color: 'white', fontWeight: 100}}>About</a></li>
                            <li><a href="#" style={{color: 'white', fontWeight: 100}}>Projects</a></li>
                            <li><a href="#" style={{color: 'white', fontWeight: 100}}>Blog</a></li>
                            <li><a href="#" style={{color: 'white', fontWeight: 100}}>Contacts</a></li>
                            <li><a href="#" style={{color: 'white', fontWeight: 100}}>Pricing</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        )
    }
}
