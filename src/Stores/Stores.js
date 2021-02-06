import EventEmitter from 'events';
import  Dispatcher from "../Dispatcher/Dispatcher"


class Store extends EventEmitter  { 

  constructor(){ 
    super();

    
    this.TempFrom=[];
    this.TempData=[];
    this.TempTo=[]
    // this.data={ 
    //   setFromTemperature: '',
    //   setToTemperature: '',
    //  setFromTemperatureText:'',
     
    
    //  result: ""
    // }


    
  }
  

    getAllData() {
    return this.TempData

    
  } 
  getAllFrom() {
    return this.TempFrom
    
  } 
  getAllTo() {
    return this.TempTo
    
  } 

  // updateData(obj) {
  //   this.data = obj;

  //   console.log(obj);

  //   this.emit("change");
  // }

 
//   handleActions = action => { 
//     console.log(action);

//     switch (action.type) { 
//       case "ADD_TEMP":
//         this.updateData({
//           // ...this.data,
//           setFromTemperatureText: action.amt,
        
//         });
//         break;
//         case "ADD_From_TEMP_TYPE":
//         this.updateData({
//           // ...this.data,
//           setFromTemperature: action.fromType,
        
//         });
//         break;
      
//         case "ADD_To_TEMP_TYPE":
//             this.updateData({
//               // ...this.data,
//               setToTemperature: action.toType,
            
//             });
//             break;
//   };
// }


UpdateTemp(amt) {
  this.TempData.push(amt);
  console.log(amt)
  this.change();
}

UpdateFromTempType(fromType) {
  this.TempFrom.push(fromType);
  console.log(fromType)
  this.change();
}

UpdateToTempType(toType) {
  this.TempData.push(toType);
  console.log(toType)
  this.change();
}

change() {
  this.emit('TempTo');
  this.emit('TempFrom');
  this.emit('TempTo');
  

}
addListener(TempTo, callback) {
  this.on(TempTo, callback);
}

removeListener(TempTo, callback) {
  this.removeListener(TempTo, callback);
}





  quantityConversion(input, options) {
    console.log("input", input);
    console.log("options", options);
    switch (options) {
    
      case "FahrenheitFahrenheit":
        return input;

      case "FahrenheitCelsius":
        return ((input - 32) * 5) / 9;

      case "FahrenheitKelvin":
        return ((input - 32) * 5) / 9 + 273.15;

      case "CelsiusCelsius":
        return input;

      case "CelsiusFahrenheit":
        return (input * 9) / 5 + 32;

      case "CelsiusKelvin":
        return input + 273.15;

      case "KelvinKelvin":
        return input;

      case "KelvinFahrenheit":
        return ((input - 273) * 9) / 5 + 32;

      case "KelvinCelcius":
        return input - 273;

  
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
// Dispatcher.register(fluxStore.handleActions.bind(fluxStore));
// window.fluxStore = fluxStore;
// window.Dispatcher = Dispatcher;

export default new Store(); 