import AppDispatcher from "../Dispatcher/Dispatcher"
import AppConstants from "../Constant/ConstantVolume"








export const UpdateVolume=(amtV)=> { 
  AppDispatcher.dispatch({ 
    type: AppConstants.ADD_VOLUME,
    amtV
    });
};


export const UpdateFromVolumeType=(fromTypeV )=> {
  AppDispatcher.dispatch({
    type: AppConstants.ADD_From_VOLUME_TYPE,
    fromTypeV
  });
};

export const UpdateToVolumeType=
(toTypeV )=> {
  AppDispatcher.dispatch({
    type: AppConstants.ADD_To_VOLUME_TYPE,
    toTypeV
  });
};








// class Action {
//     LitresToLitres(VOLUMETYPES ,VOLUMEFROM, VOLUMETO){
//         AppDispatcher.handleViewAction({
//           actionType:AppConstants.LITRES,
//           VOLUMETYPES ,VOLUMEFROM, VOLUMETO
//         });
//       }
//       LitresToMililiters(VOLUMETYPES ,VOLUMEFROM, VOLUMETO){
//         AppDispatcher.handleViewAction({
//           actionType:AppConstants.LITRES,
//           VOLUMETYPES ,VOLUMEFROM, VOLUMETO
//         });
//       }
//       LitresToGallons(VOLUMETYPES ,VOLUMEFROM, VOLUMETO){
//         AppDispatcher.handleViewAction({
//           actionType:AppConstants.LITRES,
//           VOLUMETYPES ,VOLUMEFROM, VOLUMETO
//         });
//       }
// ///////////////////////////////////////////////////////////////////
// MililitersToLitres(VOLUMETYPES ,VOLUMEFROM, VOLUMETO){
//         AppDispatcher.handleViewAction({
//           actionType:AppConstants.MILILITRES,
//           VOLUMETYPES ,VOLUMEFROM, VOLUMETO
//         });
//       }
//       MililitersToMililiters(VOLUMETYPES ,VOLUMEFROM, VOLUMETO){
//         AppDispatcher.handleViewAction({
//           actionType:AppConstants.MILILITRES,
//           VOLUMETYPES ,VOLUMEFROM, VOLUMETO
//         });
//       }
//       MililitersToGallons(VOLUMETYPES ,VOLUMEFROM, VOLUMETO){
//         AppDispatcher.handleViewAction({
//           actionType:AppConstants.MILILITRES,
//           VOLUMETYPES ,VOLUMEFROM, VOLUMETO
//         });
//       }
// ///////////////////////////////////

// GallonsToLitres(VOLUMETYPES ,VOLUMEFROM, VOLUMETO){
//         AppDispatcher.handleViewAction({
//           actionType:AppConstants.GALLONS,
//           VOLUMETYPES ,VOLUMEFROM, VOLUMETO
//         });
//       }
//       GallonsToMililiters(VOLUMETYPES ,VOLUMEFROM, VOLUMETO){
//         AppDispatcher.handleViewAction({
//           actionType:AppConstants.GALLONS,
//           VOLUMETYPES ,VOLUMEFROM, VOLUMETO
//         });
//       }
//       GallonsToGallons(VOLUMETYPES ,VOLUMEFROM, VOLUMETO){
//         AppDispatcher.handleViewAction({
//           actionType:AppConstants.GALLONS,
//           VOLUMETYPES ,VOLUMEFROM, VOLUMETO
//         });
//       }

    
//     }
//     export default new Action();