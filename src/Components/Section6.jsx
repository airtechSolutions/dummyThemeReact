import React, { Component } from 'react';
import Pic1 from '../img/navbarimg/home_flexible_layout.jpg';
import Pic2 from '../img/navbarimg/home_create_something_beautiful.jpg';

export default class Section6 extends Component {
    render() {
        return (
            <div>
                <section style={{overflowX: 'hidden'}}>
                    <div>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6" style={{padding: '70px'}}>
                                <div className="container" style={{paddingTop: '45px', paddingTop: '50px'}}>
                                    <h6 style={{color: '#a0ce4e'}}>ENSURING YOUR SYSTEMS ARE OPTIMAL</h6>
                                    <h3>Our Software is quick, lean, and market-focused.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a lorem velit. Etiam nec nulla a erat hendrerit varius sit amet et enim. Cras id tincidunt erat. Suspendisse facilisis condimentum urna. Aenean a blandit nulla. Donec et felis et ipsum gravida finibus eget ut ante. Nunc nec tellus id ipsum euismod efficitur ac quis elit.</p>    
                                </div>
                            </div>
                            <div id="container" className="col-12 col-md-6 col-lg-6" style={{backgroundColor: '#252527'}}>
                                <img id="image" className="img-fluid" src={Pic1} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div id="container" className="col-12 col-md-6 col-lg-6" style={{backgroundColor: '#1D1D1D'}}>
                                <img id="image" className="img-fluid" src={Pic2} alt=""/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6" style={{padding: '70px'}}>
                                <div className="container" style={{paddingTop: '45px', paddingTop: '50px'}}>
                                    <h6 style={{color: '#a0ce4e'}}>ENSURING YOUR SYSTEMS ARE OPTIMAL</h6>
                                    <h3>Our Software is quick, lean, and market-focused.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a lorem velit. Etiam nec nulla a erat hendrerit varius sit amet et enim. Cras id tincidunt erat. Suspendisse facilisis condimentum urna. Aenean a blandit nulla. Donec et felis et ipsum gravida finibus eget ut ante. Nunc nec tellus id ipsum euismod efficitur ac quis elit.</p>    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
