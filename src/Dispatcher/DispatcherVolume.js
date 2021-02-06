import {Dispatcher} from 'flux';
 import AppConstants  from "../Constant/ConstantVolume";
 import Store from "../Stores/VolumeStore";
 const AppDispatcher = new Dispatcher();




AppDispatcher.register(payload=>{
  switch (payload.amtV){
    case AppConstants.ADD_VOLUME:
      Store.UpdateVolume(payload.amtV);
      break;
      default:
  }
});

AppDispatcher.register(payload=>{ 
  switch (payload.fromTypeV){
    case AppConstants.ADD_From_VOLUME_TYPE:
      Store.UpdateFromVolumeType(payload.fromTypeV);
      break;
      default:
  }
});
AppDispatcher.register(payload=>{ 
  switch (payload.toTypeV){
    case AppConstants.ADD_To_VOLUME_TYPE:
      Store.UpdateToVolumeType(payload.toTypeV);
      
      break;
      default:
  }
});

export default AppDispatcher;