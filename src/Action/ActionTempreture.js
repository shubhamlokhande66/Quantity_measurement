import AppDispatcher from "../Dispatcher/Dispatcher"
import AppConstants from "../Constant/ConstantTempreture"
class Action {
    CelciusToCelcius(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
        AppDispatcher.handleViewAction({
          actionType:AppConstants.CELSIUS,
          TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
        });
      }
    
      CelciusToFahrenheit(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
        AppDispatcher.handleViewAction({
          actionType:AppConstants.CELSIUS,
          TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
        });
      }
      CelciusToKelvin(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
        AppDispatcher.handleViewAction({
          actionType:AppConstants.CELSIUS,
          TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
        });
      }

      ///////////////////////
      FahrenheitToCelcius(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
        AppDispatcher.handleViewAction({
          actionType:AppConstants.FAHRENHEIT,
          TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
        });
      }
      FahrenheitToFahrenheit(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
        AppDispatcher.handleViewAction({
          actionType:AppConstants.FAHRENHEIT,
          TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
        });
      }
      FahrenheitToKelvin(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
        AppDispatcher.handleViewAction({
          actionType:AppConstants.FAHRENHEIT,
          TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
        });
      }
      //////////////////////

      KelvinToCelcius(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
        AppDispatcher.handleViewAction({
          actionType:AppConstants.KELVIN,
          TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
        });
      }
      KelvinToFahrenheit(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
        AppDispatcher.handleViewAction({
          actionType:AppConstants.KELVIN,
          TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
        });
      }
      KelvinToKelvin(TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO){
        AppDispatcher.handleViewAction({
          actionType:AppConstants.KELVIN,
          TEMPRETURETYPES ,TEMPRETUREFROM, TEMPRETURETO
        });
      }
    }
    export default new Action();