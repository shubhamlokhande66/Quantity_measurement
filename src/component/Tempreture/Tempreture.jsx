import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import './Tempreture.css';
import { Card } from '@material-ui/core';
import scale from "../../Images&Logo/scale.svg"
import hot from "../../Images&Logo/hot.svg"
import beaker from "../../Images&Logo/beaker.svg"
import { TextField, MenuItem, Select } from '@material-ui/core';
import TemperatureConvertor from '../../Stores/Stores';
import * as TempretureAction from "../../Action/ActionTempreture"


const temperature = [
    {
        value: "Celsius",
        label: "Celsius",
    },
    {
        value: "Fahrenheit",
        label: "Fahrenheit",
    },
    {
        value: "Kelvin",
        label: "Kelvin",
    },
];


export default class Temprature extends Component {
    constructor(props) {
        super(props);
        //this.state = TemperatureConvertor.getAll();
        this.state = { setFromTemperatureText: TemperatureConvertor.getAllData() ,
                       setFromTemperature :TemperatureConvertor.getAllFrom() ,
                       setToTemperature :TemperatureConvertor.getAllTo() ,
                       finalResult: ""
        };
        this.onListChange = this.onListChange.bind(this);
    }


    componentDidMount() {
        TemperatureConvertor.addListener('Temp', this.onListChange);
        TemperatureConvertor.addListener('TempFrom', this.onListChange);
        TemperatureConvertor.addListener('TempTo', this.onListChange);
      }
    
      componentWillUnmount() {
        TemperatureConvertor.removeListener('Temp', this.onListChange);
        TemperatureConvertor.removeListener('TempFrom', this.onListChange);
        TemperatureConvertor.removeListener('TempTo', this.onListChange);
      }
    
      onListChange() {
        this.setState({
            setFromTemperatureText: TemperatureConvertor.getAllData(),
            setFromTemperature: TemperatureConvertor.getAllFrom(),
            setToTemperature:TemperatureConvertor.getAllTo(),

        });
      }


    handleChangeFroms = (event) => {

        TempretureAction.UpdateFromTempType(event.target.value);
        this.state.setFromTemperature = event.target.value;
        this.result = TemperatureConvertor.quantityConversion(this.state.setFromTemperatureText, (this.state.setFromTemperature + this.state.setToTemperature))
        this.setState({
            finalResult: this.result
        })
        // this.setState({
        //     setFromTemperature: event.target.value
        // })
        //  this.state.setFromTemperature=event.target.value;
    };

    handleChangeToo = (event) => {

        TempretureAction.UpdateToTempType(event.target.value);
        this.state.setToTemperature = event.target.value;
        this.result = TemperatureConvertor.quantityConversion(this.state.setFromTemperatureText,( this.state.setFromTemperature + this.state.setToTemperature))
        this.setState({
            finalResult: this.result
        })
        // this.setState({
        //     setToTemperature: event.target.value
        // })
        // this.state.setToTemperature = event.target.value;
        console.log("final Result : ", this.state.finalResult)
    };



    textChanges = (event) => {

        TempretureAction.UpdateTemp(event.target.value)
        this.state.setFromTemperatureText = event.target.value;
        this.result = TemperatureConvertor.quantityConversion(this.state.setFromTemperatureText,( this.state.setFromTemperature + this.state.setToTemperature))
        this.setState({
            finalResult: this.result
        })
        // this.setState({
        //     setFromTemperatureText: event.target.value
        // })
    };

    handleLength = () => {
        this.props.history.push('/length');
    }
    handleTemperature = () => {
        this.props.history.push('/temperature');
    }
    handleVolume = () => {
        this.props.history.push('/volume');
    }



    render() {
        console.log("shubham", this.state);
        return (
            // <div className="helloTemperature">Hello Temperatures</div>
            <div className="homeContainer">
                <AppBar id="appBar">
                    <h2> Welcome To Quantity Measurement</h2>
                </AppBar>
                <div id="chooseType">
                    <h4>CHOOSETYPE</h4>
                </div>
                <div className="cardContainer">

                    <Card id="lengths" onClick={this.handleLength}>
                        <div>
                            <img src={scale} />
                        </div>
                        <div>
                            Length
                            </div>
                    </Card>
                    <Card id="temperature" onClick={this.handleTemperature}>
                        <div>
                            <img src={hot} />
                        </div>
                        <div>
                            Temperature
                            </div>
                    </Card>
                    <Card id="volumes" onClick={this.handleVolume}>
                        <div>
                            <img src={beaker} />
                        </div>
                        <div>
                            Volume
                            </div>
                    </Card>
                </div>
                <div id="containerForData">
                    <div>
                        <div id="text">
                            <br /><lable>FROM</lable><br /></div>
                        <div>
                            <TextField className="TextField" type="number" variant="outlined" size="small" onChange={this.textChanges} defaultValue="0"  ></TextField>
                        </div>
                        <div>
                            <Select id="Select" onChange={this.handleChangeFroms} defaultValue="shubham"  >
                                {temperature.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </Select>
                        </div>
                    </div>

                    <div>
                        <div id="text">
                            <br /><lable>To</lable><br /></div>
                        <div>
                            <TextField className="TextField" type="number" variant="outlined" size="small" value={this.state.finalResult} ></TextField></div>
                        <div>

                            <Select id="Select" onChange={this.handleChangeToo}  > 
                                {temperature.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}

                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}