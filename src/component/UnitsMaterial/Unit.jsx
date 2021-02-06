import React from "react";
import "./Unit.css";
import Scale  from "../../Images&Logo/scale.svg";
import  Hot  from "../../Images&Logo/hot.svg";
import  Beaker  from "../../Images&Logo/beaker.svg";
import Card from 'react-bootstrap/Card'
import LengthAction from "../../Action/Actionlength"
import TempretureAction from "../../Action/ActionTempreture"
import VolumeAction from "../../Action/ActionVolume"

  
export default class Unit extends React.Component {
    constructor(props){
        super(props);
        

    }

    handleLength(LENGTHTYPES ,LENGTHFROM, LENGTHTO) {
        LengthAction.kilometreToKiloMetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.kilometreToMeter( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.kilometreToCentimetres( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.kilometreToMilimetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.kilometreToMicrometre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.kilometreToMile( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.kilometreToFoot( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.kilometreToInch( LENGTHTYPES ,LENGTHFROM, LENGTHTO);

        LengthAction.MetresToKiloMetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MetresToMeter( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MetresToCentimetres( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MetresToMilimetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MetresToMicrometre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MetresToMile( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MetresToFoot( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MetresToInch( LENGTHTYPES ,LENGTHFROM, LENGTHTO);

        LengthAction.CentimetresToKiloMetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.CentimetresToMeter( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.CentimetresToCentimetres( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.CentimetresToMilimetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.CentimetresToMicrometre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.CentimetresToMile( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.CentimetresToFoot( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.CentimetresToInch( LENGTHTYPES ,LENGTHFROM, LENGTHTO);

        LengthAction.MilimetreToKiloMetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MilimetreToMeter( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MilimetreToCentimetres( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MilimetreToMilimetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MilimetreToMicrometre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MilimetreToMile( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MilimetreToFoot( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MilimetreToInch( LENGTHTYPES ,LENGTHFROM, LENGTHTO);

        LengthAction.MicrometreToKiloMetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MicrometreToMeter( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MicrometreToCentimetres( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MicrometreToMilimetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MicrometreToMicrometre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MicrometreToMile( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MicrometreToFoot( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MicrometreToInch( LENGTHTYPES ,LENGTHFROM, LENGTHTO);

        LengthAction.MileToKiloMetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MileToMeter( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MileToCentimetres( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MileToMilimetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MileToMicrometre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MileToMile( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MileToFoot( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.MileToInch( LENGTHTYPES ,LENGTHFROM, LENGTHTO);

        LengthAction.FootToKiloMetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.FootToMeter( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.FootToCentimetres( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.FootToMilimetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.FootToMicrometre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.FootToMile( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.FootToFoot( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.FootToInch( LENGTHTYPES ,LENGTHFROM, LENGTHTO);

        LengthAction.InchToKiloMetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.InchToMeter( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.InchToCentimetres( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.InchToMilimetre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.InchToMicrometre( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.InchToMile( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.InchToFoot( LENGTHTYPES ,LENGTHFROM, LENGTHTO);
        LengthAction.InchToInch( LENGTHTYPES ,LENGTHFROM, LENGTHTO);


     }
     handleTempreture(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO) {
        TempretureAction.CelciusToCelcius( TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO);
        TempretureAction.CelciusToFahrenheit( TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO);
        TempretureAction.CelciusToKelvin( TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO);
  
        TempretureAction.FahrenheitToCelcius( TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO);
        TempretureAction.FahrenheitToFahrenheit( TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO);
        TempretureAction.FahrenheitToKelvin( TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO);
  
        TempretureAction.KelvinToCelcius( TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO);
        TempretureAction.KelvinToFahrenheit( TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO);
        TempretureAction.KelvinToKelvin( TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO);
       }
  
     
       handleVolume(VOLUMETYPES ,VOLUMEFROM, VOLUMETO) {
        VolumeAction.LitresToLitres( VOLUMETYPES ,VOLUMEFROM, VOLUMETO);
        VolumeAction.LitresToMililiters( VOLUMETYPES ,VOLUMEFROM, VOLUMETO);
        VolumeAction.LitresToGallons( VOLUMETYPES ,VOLUMEFROM, VOLUMETO);
  
        VolumeAction.MililitersToLitres( VOLUMETYPES ,VOLUMEFROM, VOLUMETO);
        VolumeAction.MililitersToMililiters( VOLUMETYPES ,VOLUMEFROM, VOLUMETO);
        VolumeAction.MililitersToGallons( VOLUMETYPES ,VOLUMEFROM, VOLUMETO);
  
        VolumeAction.GallonsToLitres( VOLUMETYPES ,VOLUMEFROM, VOLUMETO);
        VolumeAction.GallonsToMililiters( VOLUMETYPES ,VOLUMEFROM, VOLUMETO);
        VolumeAction.GallonsToGallons( VOLUMETYPES ,VOLUMEFROM, VOLUMETO);
       }
    

render(){
  return (
    <div className="homeContainer"> 
    <div className="chooseType">
                        <lable>CHOOSE TYPE</lable>
                    </div> 
                    <div className="converterCard">
                        <Card className="length" onChange={this.handleLength}>
                        <div  >
                    
                            <img src={Scale} />
                        </div>
                     
                        <div>
                            <lable>Length</lable>
                        </div>
                        </Card>
                        <Card id="temperature" onChange={this.handleTempreture}>
                        <div>
                            <img src={Hot}/>
                        </div>
                        <div>
                            <lable>Temperature</lable>
                        </div>
                        </Card>
                        <Card id="volumn" onChange={this.handleVolume}>
                        <div>
                            <img src={Beaker}/>
                        </div>
                        <div>
                            <lable>Volumn</lable>
                        </div>
                        </Card>
                    </div>
                    </div>
  );
}
}