import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import './Volume.css';
import { Card } from '@material-ui/core';
import scale from "../../Images&Logo/scale.svg"
import hot from "../../Images&Logo/hot.svg"
import beaker from "../../Images&Logo/beaker.svg"
import { TextField, MenuItem, Select } from '@material-ui/core';
import VolumeConvertor from '../../Stores/VolumeStore';
import * as VolumeAction from "../../Action/ActionVolume"

const volume = [
    {
      value: "Liters",
      label: "Liters",
    },
    {
      value: "Mililitres",
      label: "Mililitres",
    },
    {
      value: "Gallons",
      label: "Gallons",
    },
  ];


export default class Volume extends Component {
    constructor(props) {
        super(props);

        this.state = { setFromVolumeText: VolumeConvertor.getAllData() ,
            setFromVolume :VolumeConvertor.getAllFrom() ,
            setToVolume :VolumeConvertor.getAllTo() ,
            finalResult: ""
    };
    this.onListChange = this.onListChange.bind(this);
    }
        
        // this.state = VolumeConvertor.getAll();
        // this.state = {
        //     // setFromVolume: '',
        //     // setToVolume: '',
        //     // setFromVolumeText:'',
        //     // defaultValue1:"0",
        //     // result:""
        //     finalResult: ""
        // }
    


    componentDidMount() {
        VolumeConvertor.addListener('Volume', this.onListChange);
        VolumeConvertor.addListener('VolumeFrom', this.onListChange);
        VolumeConvertor.addListener('VolumeTo', this.onListChange);
      }
    
      componentWillUnmount() {
        VolumeConvertor.removeListener('Volume', this.onListChange);
        VolumeConvertor.removeListener('VolumeFrom', this.onListChange);
        VolumeConvertor.removeListener('VolumeTo', this.onListChange);
      }
    
      onListChange() {
        this.setState({
            setFromVolumeText: VolumeConvertor.getAllData(),
            setFromVolume: VolumeConvertor.getAllFrom(),
            setToVolume:VolumeConvertor.getAllTo(),

        });
      }


    handleChangesFrom = (event) => {
       
        VolumeAction.UpdateFromVolumeType(event.target.value);
        this.state.setFromVolume=event.target.value;
        this.result=VolumeConvertor.quantityConversion(this.state.setFromVolumeText,this.state.setFromVolume+this.state.setToVolume)
        this.setState({ 
            finalResult: this.result
        })
         // this.setState({
        //     setFromVolume: event.target.value
        // })
        // this.state.setFromVolume=event.target.value;
    };
    handleChangesToo = (event) => { 
    
        VolumeAction.UpdateToVolumeType(event.target.value);
        this.state.setToVolume=event.target.value;
        this.result=VolumeConvertor.quantityConversion(this.state.setFromVolumeText,this.state.setFromVolume+this.state.setToVolume)
        this.setState({ 
            finalResult: this.result
        })
            // this.setState({
        //     setToVolume: event.target.value
        // })
        // this.state.setToVolume=event.target.value;
    };
    textsChanges= (event) => { 
        
        VolumeAction.UpdateVolume(event.target.value);
        this.state.setFromVolumeText=event.target.value;
        this.result=VolumeConvertor.quantityConversion(this.state.setFromVolumeText,this.state.setFromVolume+this.state.setToVolume)
        this.setState({ 
            finalResult: this.result
        })
        // this.setState({
        //     setFromVolumeText: event.target.value
        // })
        // this.state.setFromVolumeText=event.target.value;
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
        console.log(this.state.finalResult)
        return (
            <div className="homeContainer">
                <AppBar id="appBar">
                    <h2> Welcome To Quantity Measurement</h2>
                </AppBar>
                <div id="chooseType">
                    <h4>CHOOSETYPE</h4>
                </div>
                <div className="cardContainer">

                    <Card id="lengths"onClick={this.handleLength}>
                        <div>
                            <img src={scale} />
                        </div>
                        <div>
                            Length
                            </div>
                    </Card>
                    <Card id="temperatures"onClick={this.handleTemperature}>
                        <div>
                            <img src={hot} />
                        </div>
                        <div>
                            Temperature
                            </div>
                    </Card>
                    <Card id="volume"onClick={this.handleVolume}>
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
                            <TextField className="TextField" type="number" variant="outlined" size="small" onChange={this.textsChanges} value={this.state.defaultValue1} ></TextField>
                        </div>
                        <div>
                            <Select id="Select" value={this.state.setFromVolume} onChange={this.handleChangesFrom}>
                            {volume.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                              
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div id="text">
                            <br /><lable>To</lable><br /></div>
                        <div>
                            <TextField className="TextField" type="number" variant="outlined" size="small" value={this.state.finalResult} ></TextField>  </div>
                        <div>
                            <Select id="Select" value={this.state.setToVolume} onChange={this.handleChangesToo}>
                              
                            {volume.map((option) => (
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