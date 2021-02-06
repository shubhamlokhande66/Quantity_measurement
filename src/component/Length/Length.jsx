import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import './Length.css';
import { Card } from '@material-ui/core';
import scale from "../../Images&Logo/scale.svg"
import hot from "../../Images&Logo/hot.svg"
import beaker from "../../Images&Logo/beaker.svg"
import { TextField, MenuItem, Select } from '@material-ui/core';
import LengthConvertor from '../../Stores/lengthStore';
import * as LengthAction from "../../Action/Actionlength"

//let objLength=new LengthConvertor();
const length = [
    {
      value: "Metres",
      label: "Metres",
    },
    {
      value: "Kilometre",
      label: "Kilometre",
    },
    {
      value: "Centimetre",
      label: "Centimetre",
    },
    {
      value: "Milimetre",
      label: "Milimetre",
    },
    {
      value: "Micrometre",
      label: "Micrometre",
    },
    {
      value: "Mile",
      label: "Mile",
    },
    {
      value: "Foot",
      label: "Foot",
    },
    {
      value: "Inch",
      label: "Inch",
    },
  ];

export default class Length extends Component {
    constructor(props) {
        super(props);
       // this.state = LengthConvertor.getAll();
       this.state = { setFromLengthText: LengthConvertor.getAllData() ,
        setFromLength :LengthConvertor.getAllFrom() ,
        setToLength :LengthConvertor.getAllTo() ,
        finalResult: ""
};
this.onListChange = this.onListChange.bind(this);
}
        // this.state = {
        //     finalResult: "",
        //     defaultvalue:"CM"
        //     // setFromLength: '',
        //     // setToLength: '',
        //     // setFromLengthText:'',
        //     // result:"",
        //     // defaultValue1:"0",
        //     // defaultValue2:"0",
        //     // defaultName1:"CM",
        //     // defaultName2:"KM",
        //     // items: LengthConvertor.getAll()
        // }



        componentDidMount() {
            LengthConvertor.addListener('length', this.onListChange);
            LengthConvertor.addListener('lengthFrom', this.onListChange);
            LengthConvertor.addListener('lengthTo', this.onListChange);
          }
        
          componentWillUnmount() {
            LengthConvertor.removeListener('length', this.onListChange);
            LengthConvertor.removeListener('lengthFrom', this.onListChange);
            LengthConvertor.removeListener('lengthTo', this.onListChange);
          }
        
          onListChange() {
            this.setState({
                setFromLengthText: LengthConvertor.getAllData(),
                setFromLength: LengthConvertor.getAllFrom(),
                setToLength:LengthConvertor.getAllTo(),
    
            });
          }
      
    handleChangeFrom = (event) => {
        
     LengthAction.UpdateFromLengthType(event.target.value);
     this.state.setFromLength=event.target.value
     this.result = LengthConvertor.quantityConversion(this.state.setFromLengthText,this.state.setFromLength+this.state.setToLength)
     this.setState({
        finalResult: this.result
    })
    // this.setState({
        //     setFromLength: event.target.value
        // })
        
        //this.state.setFromLength=event.target.value;
        // this.result=LengthConvertor.calculatelength(this.state.setFromLengthText,this.state.setFromLength,this.state.setToLength)
    };
    

    
    handleChangeTo = (event) => { 
        
        LengthAction.UpdateToLengthType(event.target.value);
        this.state.setToLength=event.target.value;
        this.result = LengthConvertor.quantityConversion(this.state.setFromLengthText,this.state.setFromLength+this.state.setToLength)
        this.setState({ 
            finalResult: this.result
        })
        // this.setState({
        //     setToLength: event.target.value
        // })
       // this.state.setToLength=event.target.value;
        // this.result=LengthConvertor.calculatelength(this.state.setFromLengthText,this.state.setFromLength,this.state.setToLength)
    };
    textChange=(event)=>{ 
        
        LengthAction.UpdateLength(event.target.value);
        this.state.setFromLengthText=event.target.value;
        this.result = LengthConvertor.quantityConversion(this.state.setFromLengthText,this.state.setFromLength+this.state.setToLength)
        this.setState({
            finalResult: this.result
        })
        // this.setState({
        //     setFromLengthText: event.target.value
        // })
        // this.state.setFromLengthText=event.target.value;
        // this.result=LengthConvertor.calculatelength(this.state.setFromLengthText,this.state.setFromLength,this.state.setToLength)
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
        console.log("Length Data",this.state);
        console.log("Length Result",this.state.finalResul);
        return (
            <div className="homeContainer">
                <AppBar id="appBar">
                    <h2> Welcome To Quantity Measurement</h2>
                </AppBar>
                <div id="chooseType">
                    <h4>CHOOSETYPE</h4>
                </div>
                <div className="cardContainer">

                    <Card id="length"onClick={this.handleLength}>
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
                    <Card id="volumes"onClick={this.handleVolume}>
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
                            <TextField className="TextField" type="number" variant="outlined" size="small"  onChange={this.textChange}  defaultValue="0"></TextField>
                        </div>
                        <div>
                            <Select id="Select" name='defaultValue1'  onChange={this.handleChangeFrom} defaultValue="KM" >
                            
                            {length.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div id="text">
                            <br /><lable>To</lable><br /></div>
                        <div>
                            <TextField className="TextField" type="number" variant="outlined" size="small"  defaultValue="0" value={this.state.finalResult} onChange={this.textChange} ></TextField>  </div>
                        <div>
                            <Select id="Select"  onChange={this.handleChangeTo}  value={this.defaultvalue}>

                            {length.map((option) => (
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