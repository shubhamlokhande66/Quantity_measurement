import React from "react";
import "./Conveter.css";
import { AppBar, TextField, Select, MenuItem, FormLabel } from '@material-ui/core';
import Card from 'react-bootstrap/Card'

import AppStore from "../../Stores/Stores"
import Unit from "../UnitsMaterial/Unit"
// import Action from "../../Action/Actionlength"



export default class Conveter extends React.Component {
    constructor(props){
        super(props);
        

    }
     getState() {
        this.setState({
             length:AppStore.kilometreToCentimeters()
         })
        
    }
    changelength(event){
        let length=event.target.value
console.log("length" ,length)



    }

    handlelengthSelect(event){
        let lengthSelect=event.target.value
        console.log("select",lengthSelect)

}

SelectTo(event){
let to=event.target.value
console.log("to",to)


}
     
     render() {
    return (
        <div className="calculationContainer">
            <Card className="FromCardContainer">
                <div id="fromLable">
                    <FormLabel>From </FormLabel>
                </div>

             

                <div id="From">
                    <div id="inputFrom">
                        <TextField id="TextFieldFrom" type="number" variant="outlined"  onChange={this.changelength} ></TextField>
                    </div>
                    <div id="selectFrom">
                        <Select id="FromDropdown"  onChange={this.handlelengthSelect}>
                        <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="Kilometer"> Kilometre</MenuItem>

                        </Select>
                    </div>
                </div>

            </Card>
            <Card>
                <div id="toLable">
                    <FormLabel>To</FormLabel>
                </div>



              
          
                <div id="To">
                    <div id="inputTo">
                        <TextField id="TextFieldTo" type="number" variant="outlined" ></TextField>
                    </div>
                    <div id="selectTo">
                        <Select id="ToDropdown" onChange={this.SelectTo}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={100}>Kilometre</MenuItem>

                        </Select>
                    </div>
                </div>
            </Card>
        </div>

    );
        }
            }
        

