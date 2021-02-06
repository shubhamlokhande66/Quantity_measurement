import AppDispatcher from "../Dispatcher/Dispatcher"
import AppConstants from "../Constant/ConstantTempreture"


export const UpdateTemp=(amt)=> { 
  AppDispatcher.dispatch({ 
    type: AppConstants.ADD_TEMP,
    amt  
  });
};


export const UpdateFromTempType=(fromType )=> {
  AppDispatcher.dispatch({
    type: AppConstants.ADD_From_TEMP_TYPE,
    fromType
  });
};

export const UpdateToTempType=(toType )=> {
  AppDispatcher.dispatch({
    type: AppConstants.ADD_To_TEMP_TYPE,
    toType
  });
};

// class Action {

    // CelciusToCelcius(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
    //     AppDispatcher.handleViewAction({
    //       actionType:AppConstants.CELSIUS,
    //       TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
    //     });
    //   }
    
    //   CelciusToFahrenheit(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
    //     AppDispatcher.handleViewAction({
    //       actionType:AppConstants.CELSIUS,
    //       TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
    //     });
    //   }
    //   CelciusToKelvin(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
    //     AppDispatcher.handleViewAction({
    //       actionType:AppConstants.CELSIUS,
    //       TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
    //     });
    //   }

    //   ///////////////////////
    //   FahrenheitToCelcius(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
    //     AppDispatcher.handleViewAction({
    //       actionType:AppConstants.FAHRENHEIT,
    //       TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
    //     });
    //   }
    //   FahrenheitToFahrenheit(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
    //     AppDispatcher.handleViewAction({
    //       actionType:AppConstants.FAHRENHEIT,
    //       TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
    //     });
    //   }
    //   FahrenheitToKelvin(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
    //     AppDispatcher.handleViewAction({
    //       actionType:AppConstants.FAHRENHEIT,
    //       TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
    //     });
    //   }
    //   //////////////////////

    //   KelvinToCelcius(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
    //     AppDispatcher.handleViewAction({
    //       actionType:AppConstants.KELVIN,
    //       TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
    //     });
    //   }
    //   KelvinToFahrenheit(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
    //     AppDispatcher.handleViewAction({
    //       actionType:AppConstants.KELVIN,
    //       TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
    //     });
    //   }
    //   KelvinToKelvin(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
    //     AppDispatcher.handleViewAction({
    //       actionType:AppConstants.KELVIN,
    //       TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
    //     });
    //   }
    // }
   