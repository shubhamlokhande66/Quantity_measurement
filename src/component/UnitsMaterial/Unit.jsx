import React from "react";
import "./Unit.css";
import Scale  from "../../Images&Logo/scale.svg";
import  Hot  from "../../Images&Logo/hot.svg";
import  Beaker  from "../../Images&Logo/beaker.svg";
import Card from 'react-bootstrap/Card'

export default function Unit() {
  return (
    <div className="homeContainer"> 
    <div className="chooseType">
                        <lable>CHOOSE TYPE</lable>
                    </div> 
                    <div className="converterCard">
                        <Card className="length">
                        <div>
                            <img src={Scale}/>
                        </div>
                        <div>
                            <lable>Length</lable>
                        </div>
                        </Card>
                       
                       
                    </div>
                    </div>
  );
}