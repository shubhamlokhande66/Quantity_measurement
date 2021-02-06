
import AppDispatcher from "../Dispatcher/Dispatcher"
 import AppConstants from "../Constant/ConstantLength"




export const UpdateLength=(amt)=> {
  AppDispatcher.dispatch({ 
    type: AppConstants.ADD_LENGTH,
    amt  });
    console.log("Value",amt)
};



export const UpdateFromLengthType=(fromType )=> {
  AppDispatcher.dispatch({
    type: AppConstants.ADD_From_LENGTH_TYPE,
    fromType
  });
  console.log("FromType",fromType)
};

export const UpdateToLengthType=(toType )=> {
  AppDispatcher.dispatch({
    type: AppConstants.ADD_To_LENGTH_TYPE,
    toType
  });
  console.log("TooType",toType)
};










// class Action {
//   kilometreToKiloMetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.dispatch({
//     actionType:AppConstants.LENGTH,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }




// kilometreToMeter(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.KILOMETER,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// kilometreToCentimetres(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.KILOMETER,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// kilometreToMilimetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.KILOMETER,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// kilometreToMicrometre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.KILOMETER,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// kilometreToMile(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.KILOMETER,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// kilometreToFoot(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.KILOMETER,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// kilometreToInch(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.KILOMETER,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// ////////////////////////////

// MetresToKiloMetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.METERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// MetresToMeter(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.METERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// MetresToCentimetres(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.METERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MetresToMilimetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.METERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MetresToMicrometre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.METERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MetresToMile(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.METERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MetresToFoot(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.METERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MetresToInch(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.METERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// /////////////////////////////////////


// CentimetresToKiloMetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.CENTIMETERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// CentimetresToMeter(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.CENTIMETERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// CentimetresToCentimetres(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.CENTIMETERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// CentimetresToMilimetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.CENTIMETERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// CentimetresToMicrometre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.CENTIMETERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// CentimetresToMile(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.CENTIMETERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// CentimetresToFoot(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.CENTIMETERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// CentimetresToInch(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.CENTIMETERS,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// ///////////////////////////

// MilimetreToKiloMetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILIMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// MilimetreToMeter(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILIMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// MilimetreToCentimetres(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILIMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MilimetreToMilimetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILIMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MilimetreToMicrometre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILIMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MilimetreToMile(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILIMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MilimetreToFoot(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILIMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MilimetreToInch(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILIMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// //////////////////////////

// MicrometreToKiloMetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MICROMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// MicrometreToMeter(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MICROMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// MicrometreToCentimetres(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MICROMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MicrometreToMilimetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MICROMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MicrometreToMicrometre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MICROMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MicrometreToMile(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MICROMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MicrometreToFoot(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MICROMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MicrometreToInch(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MICROMETRE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// ///////////////////////////////
// MileToKiloMetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// MileToMeter(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// MileToCentimetres(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MileToMilimetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MileToMicrometre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MileToMile(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MileToFoot(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// MileToInch(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.MILE,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// ///////////////////////////



// FootToKiloMetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.FOOT,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// FootToMeter(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.FOOT,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// FootToCentimetres(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.FOOT,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// FootToMilimetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.FOOT,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// FootToMicrometre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.FOOT,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// FootToMile(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.FOOT,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// FootToFoot(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.FOOT,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// FootToInch(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.FOOT,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// ///////////////////////////////////
// InchToKiloMetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.INCH,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// InchToMeter(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.INCH,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }

// InchToCentimetres(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.INCH,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// InchToMilimetre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.INCH,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// InchToMicrometre(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.INCH,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// InchToMile(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.INCH,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// InchToFoot(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.INCH,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }
// InchToInch(LENGTHTYPES ,LENGTHFROM, LENGTHTO){
//   AppDispatcher.handleViewAction({
//     actionType:AppConstants.INCH,
//     LENGTHTYPES ,LENGTHFROM, LENGTHTO
//   });
// }


// }
// export default new Action();


