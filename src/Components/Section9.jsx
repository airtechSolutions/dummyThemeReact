import React, { Component } from 'react';
import Background from '../img/navbarimg/home_next_level_bg.jpg'
import Picture from '../img/navbarimg/next-level-feat.png'
export default class Section9 extends Component {
    render() {
        return (
            <div>
                <section style={{overflowX: 'hidden'}}>
                    <div>
                        <div className="row">
                            <div className="col-12" style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
                                <div className="container" style={{padding: '70px'}}>
                                    <h1 style={{textAlign: 'center'}} >Take Your Business To The Next Level</h1>
                                    <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a lorem velit. Etiam nec nulla a erat hendrerit varius sit amet et enim. Cras id tincidunt erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a lorem velit. Etiam nec nulla a erat hendrerit varius sit amet et enim.</p>
                                    <img style={{padding: '50px'}} src={Picture} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
