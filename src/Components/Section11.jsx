import React, { Component } from 'react'
import Pic1 from '../img/navbarimg/blog_posts_img_12.jpg';
import Pic2 from '../img/navbarimg/blog_posts_img_11.jpg';
import Pic3 from '../img/navbarimg/blog_posts_img_10.jpg';

export default class Section11 extends Component {
    render() {
        return (
            <div>
                <section >
                    <div className="row">
                        <div className="col-12">
                            <div className="container" style={{padding: '70px'}}>
                                <h1 style={{textAlign: 'center'}}>Latest News</h1>
                                <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a lorem velit. Etiam nec nulla a erat hendrerit varius sit amet et enim. Cras id tincidunt erat. Suspendisse facilisis condimentum urna.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container cardComponentContainer">
                        <div className="row justify-content-center">
                            <div className="col-sm cardComponentCards">
                                <div className="card">
                                    <img src={Pic1} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 style={{marginTop: '5px'}}>Nullam neque sapien pharetra</h5>
                                        <p style={{borderBottom: 'double 4px', paddingBottom: '20px'}}>January 19th, 2016|Design, Technology</p>
                                        <p className="card-text centerPara">Fusce nec erat sed nisl lobortis eleifend. In eu fringilla leo. Curabitur dignissim efficitur lorem nec fermentum. Etiam</p>
                                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
                                            <p className="readMoreBtn">Read More <i className="fas fa-angle-right"></i></p>
                                            <i className="readMoreBtn fas fa-comments"></i>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm cardComponentCards">
                                <div className="card">
                                    <img src={Pic2} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 style={{marginTop: '5px'}}>Cras suscipit ante erat eleifend</h5>
                                        <p style={{borderBottom: 'double 4px', paddingBottom: '20px'}}>January 19th, 2016|Design, Technology</p>
                                        <p className="card-text centerPara">Fusce nec erat sed nisl lobortis eleifend. In eu fringilla leo. Curabitur dignissim efficitur lorem nec fermentum. Etiam</p>
                                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
                                            <p className="readMoreBtn">Read More <i className="fas fa-angle-right"></i></p>
                                            <i className="readMoreBtn fas fa-comments"></i>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm cardComponentCards">
                                <div className="card">
                                    <img src={Pic3} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 style={{marginTop: '5px'}}>Cras suscipit ante erat eleifend</h5>
                                        <p style={{borderBottom: 'double 4px', paddingBottom: '20px'}}>January 19th, 2016|Design, Technology</p>
                                        <p className="card-text centerPara">Fusce nec erat sed nisl lobortis eleifend. In eu fringilla leo. Curabitur dignissim efficitur lorem nec fermentum. Etiam</p>
                                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
                                            <p className="readMoreBtn">Read More <i className="fas fa-angle-right"></i></p>
                                            <i className="readMoreBtn fas fa-comments"></i>
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
