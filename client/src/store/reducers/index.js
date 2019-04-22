import { combineReducers } from "redux";

import recipeReducer from "./recipe";
// import authReducer from "./auth";


const rootReducer = combineReducers({
  recipe: recipeReducer,
  
});

export default rootReducer;