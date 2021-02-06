import EventEmitter from 'events';
import  Dispatchers from "../Dispatcher/DispatcherLength"


class Store extends EventEmitter  { 

  constructor(){ 
    super();

    this.lengthFrom=[];
    this.lengthData=[];
    this.TempTo=[]

    // this.data={ 
    //     setFromLength: '',
    //     setToLength: '',
    //     setFromLengthText:'',
     
    
    //  result: ""
    // }


    
  }

  getAllData() {
    return this.lengthData

    
  } 
  getAllFrom() {
    return this.lengthFrom
    
  } 
  getAllTo() {
    return this.lengthTo
    
  } 
    
    

  // updateData(obj) {
  //   this.data = obj;


  //   this.emit("change");
  // }

 
//   handleActions = action => {
//     console.log("Action Data",action);

//     switch (action.type) { 
//       case "ADD_LENGTH":
//         this.updateData({
//           ...this.data,
//           setFromLengthText: action.amt,
        
//         });
//         break;
//         case "ADD_From_LENGTH_TYPE":
//         this.updateData({
//           ...this.data,
//           setFromLength: action.fromType,
        
//         });
//         break;
      
//         case "ADD_To_LENGTH_TYPE":
//             this.updateData({
//               ...this.data,
//               setToLength: action.toType,
            
//             });
//             break;
//   };
// }

//   kilometreToMetres(LENGTHTYPE,LENGTHFROM, LENGTHTO){
//     this.length=LENGTHFROM*1000;
//     this.length
//     this.Change();
// }
 
UpdateLength(amt) {
  this.lengthData.push(amt);
  console.log(amt)
  this.change();
}

UpdateFromLengthType(fromType) {
this.lengthFrom.push(fromType);
  console.log(fromType)
  this.change();
}

UpdateToLengthType(toType) { debugger
  this.lengthTo.push(toType);
  console.log(toType)
  this.change();
}

change() {
  this.emit('lengthTo');
  this.emit('lengthFrom');
  this.emit('lengthTo');
  

}
addListener(TempTo, callback) {
  this.on(TempTo, callback);
}

removeListener(TempTo, callback) {
  this.removeListener(TempTo, callback);
}



quantityConversion(input, options) { debugger
  console.log("input", input);
  console.log("options", options);
  switch (options) {
    case "MetresMetres":
      return input;

    case "MetresKilometre":
      return input / 1000;

    case "MetresMilimetre":
      return input / 0.001;

    case "MetresInch":
      return input * 39.3701;

    case "MetresCentimeter":
      return input * 100;

    case "MetresFoot":
      return input * 3.2808;

    case "MetresMile":
      return input * 1609;

    case "MetresMicrometre":
      return input * 100;




    case "kilometreToKiloMetre":
      return input;

    case "kilometreToMeter":
      return input * 1000;

    case "KilometreFoot":
      return input * 3281;

    case "KilometreMilimetre":
      return input / 0.000001;

    case "KilometreMile":
      return input / 1.609;

    case "KilometreInch":
      return input * 39370.1;

    case "KilometreCentimetre":
      return input * 100000;



    case "CentimetreCentimetre":
      return input;

    case "CentimetreInch":
      return input / 2.54;

    case "CentimetreFoot":
      return input / 30.48;

    case "CentimetreMilimetre":
      return input / 10;

    case "CentimetreMile":
      return input / 160934;

    case "CentimetreMetres":
      return input / 100;

    case "CentimetreKilometre":
      return input / 100000;

    case "CentimetreMicrometre":
      return input / 10000;

    case "MileMile":
      return input;

    case "MileFoot":
      return input * 5280;

    case "MileMilimetre":
      return input * 1609344;

    case "MileKilometre":
      return input * 1.60934;

    case "MileMetres":
      return input * 1609.34;

    case "MileInch":
      return input * 63360;

    case "MileCentimetre":
      return input * 160934;

    case "FootFoot":
      return input;

    case "FootMetres":
      return input / 3.2808;

    case "FootMilimetre":
      return input * 304.8;

    case "FootInch":
      return input * 12;

    case "FootMile":
      return input / 5280;

    case "FootKilometre":
      return input / 3280.84;

    case "FootCentimetre":
      return input * 30.48;

    case "InchInch":
      return input;

    case "InchCentimetre":
      return input * 2.54;

    case "InchFoot":
      return input / 12;

    case "InchMilimetre":
      return input * 25.4;

    case "InchMile":
      return input / 63360;

    case "InchMetres":
      return input / 39.3701;

    case "InchKilometre":
      return input / 39370.1;
  }
}

//   Change() {
//     this.emit('change');
//   }

//   addChangeListener(callback) {
//     this.on('change', callback);
//   }

//   removeChangeListener(callback) {
//     this.removeListener('change', callback);
//   }
}

// const fluxStore = new Store();
// Dispatchers.register(fluxStore.handleActions.bind(fluxStore));
// window.fluxStore = fluxStore;
// window.Dispatchers = Dispatchers;

export default new Store(); 