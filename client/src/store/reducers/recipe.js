import * as types from "../actions/types";

const initialState = {
	recipes: [],
	recipe: null,
	isLoading: false,
	error: null,
	recipeCreated: false

};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOADING:
		  return {
				...state,
				isLoading: true,
				error : null
			};
		case types.GET_RECIPES_SUCCESS:
			return {
				...state,
				recipes: action.recipes,
				isLoading: false
				};
		
		case types.ERROR_OCCURED:
			return {
				...state,
				isLoading: false,
				error: action.error,
				recipes: []
			};
			case types.ADD_RECIPES:
			return 	 state.concat([action.data]);
			default:
			//always have a default case in a reducer
			return state;
				}
				
    };

  export default reducer; 
