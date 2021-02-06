
import {Dispatcher} from 'flux';
 import ConstantTemp  from "../Constant/ConstantTempreture";
 import Store from "../Stores/Stores";
 const AppDispatcher = new Dispatcher();




AppDispatcher.register(payload=>{
  switch (payload.amt){
    case ConstantTemp.ADD_TEMP:
      Store.UpdateTemp(payload.amt);
      break;
      default:
  }
});

AppDispatcher.register(payload=>{
  switch (payload.fromType){
    case ConstantTemp.ADD_From_TEMP_TYPE:
      Store.UpdateFromTempType(payload.fromType);
      break;
      default:
  }
});
AppDispatcher.register(payload=>{ 
  switch (payload.toType){
    case ConstantTemp.ADD_To_TEMP_TYPE:
      Store.UpdateToTempType(payload.toType);
      break;
      default:
  }
});

export default AppDispatcher;
// Store.dispatchToken = AppDispatcher.register(payload=>{
//   switch (payload.actionType){
//     case ConstantLength.MILIMETRE:
//       Store.kilometreToMilimetre(payload.LENGTHTYPES,payload.LENGTHFROM,payload.LENGTHTO);
//       break;
//       default:
//   }
// });

// Store.dispatchToken = AppDispatcher.register(payload=>{
//   switch (payload.actionType){
//     case ConstantLength.MICROMETRE:
//       Store.kilometreToMicrometre(payload.LENGTHTYPES,payload.LENGTHFROM,payload.LENGTHTO);
//       break;
//       default:
//   }
// });

// Store.dispatchToken = AppDispatcher.register(payload=>{
//   switch (payload.actionType){
//     case ConstantLength.MILE:
//       Store.kilometreToMile(payload.LENGTHTYPES,payload.LENGTHFROM,payload.LENGTHTO);
//       break;
//       default:
//   }
// });
// Store.dispatchToken = AppDispatcher.register(payload=>{
//   switch (payload.actionType){
//     case ConstantLength.FOOT:
//       Store.kilometreToFoot(payload.LENGTHTYPES,payload.LENGTHFROM,payload.LENGTHTO);
//       break;
//       default:
//   }
// });
// Store.dispatchToken = AppDispatcher.register(payload=>{
//   switch (payload.actionType){
//     case ConstantLength.INCH:
//       Store.kilometreToInch(payload.LENGTHTYPES,payload.LENGTHFROM,payload.LENGTHTO);
//       break;
//       default:
//   }
// });



