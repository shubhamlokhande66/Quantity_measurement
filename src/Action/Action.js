
import AppDispatcher from "../Dispatcher/Dispatcher"
//import { LENGTH, TEMPRATURE ,VOLUME ,FIRSTFUNCTION,SECONDFUNCTION} from "../Constant/Constant";
import AppConstants from "../Constant/Constant"


class Action {
addItem(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
  AppDispatcher.handleViewAction({
    actionType:AppConstants.LengthConvertor,
    LENGTHTYPES ,LENGTHFROM, LENGTHTO
  });
}
addItem(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
  AppDispatcher.handleViewAction({
    actionType:AppConstants.ADD_ITEM,
    TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
  });
}
addItem(VOLUMETYPES ,VOLUMEFROM, VOLUMETO){
  AppDispatcher.handleViewAction({
    actionType:AppConstants.ADD_ITEM,
    VOLUMETYPES ,VOLUMEFROM, VOLUMETO
  });
}
}
export default new Action();





// export const tempretureConversion = {
//   tempreture: function(data){
//     AppDispatcher.handleViewAction({
//       actionType:AppConstants.ADD_ITEM,
//       data: data
//     })
//   }
//   }

//   export const volumeConversion = {
//     volume: function(data){
//       AppDispatcher.handleViewAction({
//         actionType:AppConstants.ADD_ITEM,
//         data: data
//       })
//     }
//     }

//     export const lengthConversion1= {
//       length: function(data){
//         AppDispatcher.handleViewAction({
//           actionType:AppConstants.REMOVE_ITEM,
//           data: data
//         })
//       }
//       }
      
//       export const tempretureConversion1 = {
//         tempreture: function(data){
//           AppDispatcher.handleViewAction({
//             actionType:AppConstants.REMOVE_ITEM,
//             data: data
//           })
//         }
//         }
      
//         export const volumeConversion1 = {
//           volume: function(data){
//             AppDispatcher.handleViewAction({
//               actionType:AppConstants.REMOVE_ITEM,
//               data: data
//             })
//           }
//           }