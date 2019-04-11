import axios from "../../utiles/axios-base";
import * as types from "./types";


export const loading = () => {
	return {
		type: types.LOADING
	};
};

export const getRecipeSuccess = recipes => {
	return {
		type: types.GET_RECIPES_SUCCESS,
		recipes
	}};

export const errorOccured = error => {
	return {
		type: types.ERROR_OCCURED,
		error
	}};
export const addRecipeSuccess = () => {
    return{
        
    type: types.ADD_RECIPES_SUCCESS
    }};

    
export const addRecipeStart = () => {
	return{
	type: types.ADD_RECIPES_START
    }};
    
export const addRecipe = data => {
	return (dispatch) => {
		dispatch(loading());
		    axios
		        .post("/add", data )
		            .then(res =>{
			             return dispatch(addRecipeSuccess(res.data))
		                     })
		                        .then (() => {
			                         dispatch(addRecipeStart());
		                                })
		                                    .catch(err => dispatch(errorOccured(err)))
                                                }
                                                }


export const getRecipe = () => {
    return (dispatch) => {
        dispatch(loading())
            axios.get("/get")
                .then(res => {
                     console.log(res.data)
                         dispatch(getRecipeSuccess(res.data));
                             }) 
                             .catch(err => dispatch(errorOccured(err)));
                             }};
