import React, { Component } from 'react'
import Image from '../img/navbarimg/home_video_large_cards.jpg';
export default class Section4 extends Component {
    render() {
        return (
            <div>
                <div style={{marginTop: '50px', marginBottom: '50px'}} className="container">
                    <img src={Image} className="img-fluid" alt="Responsive image"/>
                </div>

            </div>
        )
    }
}
