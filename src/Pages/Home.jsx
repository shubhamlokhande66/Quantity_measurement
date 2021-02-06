// import React from "react";
// import Toolbar from "../component/Toolbar/Toolbar";
// import Unit from "../component/UnitsMaterial/Unit";
// import Conveter from "../component/Conveter/Conveter";
// export default function Home() {
//   return (
//     <div className="Home"> 
//     <Toolbar/>
//     <Unit/>
//     <Conveter/>
//                     </div>
//   );
// }

import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import './Home.css';
import { Card } from '@material-ui/core';
import scale from "../Images&Logo/scale.svg"
import hot from "../Images&Logo/hot.svg"
import beaker from "../Images&Logo/beaker.svg"


class Home extends Component {
    handleLength = () => {
        this.props.history.push('/length')
    }
    handleTemperature = () => {
        this.props.history.push('/temperature');
    }
    handleVolume = () => {
        this.props.history.push('/volume')
    }

    render() {
        return (
            <div >
                <div className="homeContainer">
                    <AppBar id="appBar">
                    <div className="homeContainer">
                        <h2> Welcome To Quantity Measurement</h2>
                        </div>
                    </AppBar>

                    <div id="chooseType">
                        <h4>CHOOSETYPE</h4>
                    </div>
                    <div className="cardContainer">

                        <Card id="card1" onClick={this.handleLength}>
                            <div>
                                <img src={scale} />
                            </div>
                            <div>
                                Length
                            </div>
                        </Card>
                        <Card className="card2" onClick={this.handleTemperature}>
                            <div>
                                <img src={hot} />
                            </div>
                            <div>
                                Temperature
                            </div>
                        </Card>
                        <Card id="card3" onClick={this.handleVolume}>
                            <div>
                                <img src={beaker} />
                            </div>
                            <div>
                                Volume
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;