import React, { Component } from 'react'

export default class Section3 extends Component {
    render() {
        return (
            <div>
                <div className="container cardComponentContainer">
                    <div className="row justify-content-center">
                        <div className="col-sm cardComponentCards">
                            <div className="card" id="card1">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-5"></div>
                                        <div className="col-2 cardIconDiv" style={{width: '40px', height: '55px'}}>
                                            <div>
                                                <h5 className="card-title"><i style={{position: 'absolute', top: '16px', left: '17px'}} className="fas fa-home cardIcon"></i></h5>
                                            </div>            
                                        </div>
                                        <div className="col-5"></div>
                                    </div>
                                    <h4 style={{textAlign: 'center', marginTop: '5px'}}>Real State</h4>
                                <p className="card-text centerPara" style={{padding:'40px', paddingTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ornare ante. Proin aliquam odio id lorem finibus, a ullamcorper arcu posuere.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm cardComponentCards">
                            <div className="card" id="card2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-5"></div>
                                        <div className="col-2 cardIconDiv" style={{width: '40px', height: '55px'}}>
                                            <div>
                                                <h5 className="card-title"><i style={{position: 'absolute', top: '16px', left: '17px'}} className="fas fa-capsules cardIcon"></i></h5>
                                            </div>            
                                        </div>
                                        <div className="col-5"></div>
                                    </div>
                                    <h4 style={{textAlign: 'center', marginTop: '5px'}}>Pharmaceutical</h4>
                                <p className="card-text centerPara" style={{padding:'40px', paddingTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ornare ante. Proin aliquam odio id lorem finibus, a ullamcorper arcu posuere.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm cardComponentCards">
                            <div className="card" id="card3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-5"></div>
                                        <div className="col-2 cardIconDiv" style={{width: '40px', height: '55px'}}>
                                            <div>
                                                <h5 className="card-title"><i style={{position: 'absolute', top: '16px', left: '17px'}} className="fas fa-power-off cardIcon"></i></h5>
                                            </div>            
                                        </div>
                                        <div className="col-5"></div>
                                    </div>
                                    <h4 style={{textAlign: 'center', marginTop: '5px'}}>Tech & Startups</h4>
                                <p className="card-text centerPara" style={{padding:'40px', paddingTop: '0px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ornare ante. Proin aliquam odio id lorem finibus, a ullamcorper arcu posuere.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
