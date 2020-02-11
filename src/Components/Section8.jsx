import React, { Component } from 'react';
import Background1 from '../img/navbarimg/home_mockup_image_1.jpg';
import Background2 from '../img/navbarimg/home_mockup_image_3.jpg';
import Background3 from '../img/navbarimg/home_mockup_image_2.jpg';


export default class Section8 extends Component {
    render() {
        return (
            <div>
                <section style={{overflowX: 'hidden'}}>
                    <div>
                        <div className="row">
                            <div id="container" className="col-12 col-md-4 col-lg-4" style={{backgroundImage: `url(${Background1})`, backgroundSize: 'cover'}}>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="container" style={{padding: '45px', paddingTop: '50px', textAlign: 'center'}}>
                                    <h6 style={{color: "#a0ce4e"}}>ENSURING YOUR SYSTEMS ARE OPTIMAL</h6>
                                    <h3>Our Software is quick, lean, and market-focused.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a lorem velit. Etiam nec nulla a erat hendrerit varius sit amet et enim. Cras id tincidunt erat. Suspendisse facilisis condimentum urna. Aenean a blandit nulla. Donec et felis et ipsum gravida finibus eget ut ante. Nunc nec tellus id ipsum euismod efficitur ac quis elit.</p>    
                                </div>
                            </div>
                            <div id="container" className="col-12 col-md-4 col-lg-4" style={{backgroundImage: `url(${Background3})`, backgroundSize: 'cover'}}>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="container" style={{padding: '45px', paddingTop: '50px', textAlign: 'center'}}>
                                    <h6 style={{color: "#a0ce4e"}}>ENSURING YOUR SYSTEMS ARE OPTIMAL</h6>
                                    <h3>Our Software is quick, lean, and market-focused.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a lorem velit. Etiam nec nulla a erat hendrerit varius sit amet et enim. Cras id tincidunt erat. Suspendisse facilisis condimentum urna. Aenean a blandit nulla. Donec et felis et ipsum gravida finibus eget ut ante. Nunc nec tellus id ipsum euismod efficitur ac quis elit.</p>    
                                </div>
                            </div>
                            <div id="container" className="col-12 col-md-4 col-lg-4" style={{backgroundImage: `url(${Background2})`, backgroundSize: 'cover'}}>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="container" style={{padding: '45px', paddingTop: '50px', textAlign: 'center'}}>
                                    <h6 style={{color: "#a0ce4e"}}>ENSURING YOUR SYSTEMS ARE OPTIMAL</h6>
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
