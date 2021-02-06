import EventEmitter from 'events';
import  Dispatcherss from "../Dispatcher/Dispatcher"


class Store extends EventEmitter  { 

  constructor(){ 
    super();

    this.VolumeFrom=[];
    this.VolumeData=[];
    this.VolumeTo=[]
    // this.data={ 
    //     setFromVolume: '',
    //     setToVolume: '',
    //     setFromVolumeText:'',

    
    //  result: ""
    // }


    
  }

  getAllData() {
    return this.VolumeData

    
  } 
  getAllFrom() {
    return this.VolumeFrom
    
  } 
  getAllTo() {
    return this.VolumeTo
    
  } 
    

//   updateData(obj) {
//     this.data = obj;

//     console.log(obj);

//     this.emit("change");
//   }

 
//   handleActions = action => {
//     console.log(action);

//     switch (action.type) { 
//       case "ADD_VOLUME":
//         this.updateData({
//           ...this.data,
//           setFromVolumeText: action.amtV,
        
//         });
//         break;
//         case "ADD_From_VOLUME_TYPE":
//         this.updateData({
//           ...this.data,
//           setFromVolume: action.fromTypeV,
        
//         });
//         break;
      
//         case "ADD_To_VOLUME_TYPE":
//             this.updateData({
//               ...this.data,
//               setToVolume: action.toTypeV,
            
//             });
//             break;
//   };
// }

UpdateVolume(amtV) {
  this.VolumeData.push(amtV);
  console.log(amtV)
  this.change();
}

UpdateFromVolumeType(fromTypeV) {
  this.VolumeFrom.push(fromTypeV);
  console.log(fromTypeV)
  this.change();
}

UpdateToVolumeType(toTypeV) {
  this.VolumeTo.push(toTypeV);
  console.log(toTypeV)
  this.change();
}

change() {
  this.emit('VolumeTo');
  this.emit('VolumeFrom');
  this.emit('VolumeTo');
  

}
addListener(Volume, callback) {
  this.on(Volume, callback);
}

removeListener(Volume, callback) {
  this.removeListener(Volume, callback);
}


    quantityConversion(input, options) { 
      console.log("input", input);
      console.log("options", options);
      switch (options) {
    case "LitersLiters":
      return input;

    case "LitersMililitres":
      return input * 1000;

    case "LitersGallons":
      return input / 4.546;

    case "MililitresMililitres":
      return input;

    case "MililitresLiters":
      return input / 1000;

    case "MililitresGallons":
      return input / 4546;

    case "GallonsGallons":
      return input;

    case "GallonsLiters":
      return input * 4.546;

    case "GallonsMililitres":
      return input * 4546;
  }
}


 }


export default new Store(); 