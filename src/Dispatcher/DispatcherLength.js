import {Dispatcher} from 'flux';
 import AppConstants  from "../Constant/ConstantLength";
 import Store from "../Stores/lengthStore";
 const AppDispatcher = new Dispatcher();




AppDispatcher.register(payload=>{
  switch (payload.amt){
    case AppConstants.ADD_LENGTH:
      Store.UpdateLength(payload.amt);
      break;
      default:
  }
});

AppDispatcher.register(payload=>{ 
  switch (payload.fromType){
    case AppConstants.ADD_From_LENGTH_TYPE:
      Store.UpdateFromLengthType(payload.fromType);
      break;
      default:
  }
});
AppDispatcher.register(payload=>{ 
  switch (payload.toType){
    case AppConstants.ADD_To_LENGTH_TYPE:
      Store.UpdateToLengthType(payload.toType);
      
      break;
      default:
  }
});

export default AppDispatcher;