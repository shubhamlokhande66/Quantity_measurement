import React from "react";
import "./Conveter.css";
import {AppBar, TextField, Select, MenuItem, FormLabel} from '@material-ui/core';
import Card from 'react-bootstrap/Card'

export default function Conveter() {


  return (
    <div className="calculationContainer">
                    <Card className="FromCardContainer">                        
                        <div id="fromLable">
                            <FormLabel>From</FormLabel>
                        </div>
                        <div id="From">
                            <div id="inputFrom">
                                <TextField id="TextFieldFrom" type="number" variant="outlined" ></TextField>
                            </div>
                            <div id="selectFrom">
                                <Select id="FromDropdown" >
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={10}>Kilometre</MenuItem>
                                
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
                            <Select id="ToDropdown">
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={100}>Kilometre</MenuItem>
                                
                                </Select>   
                            </div>    
                        </div>
                        </Card>
                    </div>                     
                
  );
}