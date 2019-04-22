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
	

    
export const addRecipe = recipedata => {
	return (dispatch) => {
		dispatch(loading());
		
		//Headers
		const config = {
			headers: {}
			}

		// const{title} = recipedata;
		let formData = null;
		// if (){
			config.headers["Content-Type"] = "multipart/form-data";
			formData = new FormData();
			formData.append('title', recipedata.title);
			formData.append('ingredients', recipedata.ingredients);
			formData.append('steps', recipedata.steps);
			formData.append('images', recipedata.images);
			// }
			console.log(recipedata)
		
		    axios
		        .post("recipe/add", recipedata, formData, config )
		            .then(res =>{
			              dispatch(addRecipeSuccess(res.data))
							 })
							 .then( ()=> {
								dispatch(addRecipeStart())
							})
							.catch(err => dispatch(errorOccured(err)))
								}
							}


export const getRecipe = () => {
    return (dispatch) => {
        dispatch(loading())
            axios.get("recipe/get")
                .then(res => {
                     console.log(res.data)
						 dispatch(getRecipeSuccess(res.data));
							}) 
							.catch(err => dispatch(errorOccured(err)));
							}};

export const getRecipeById = recipeId => {
	return (dispatch) => {
		dispatch(loading())
			axios.get(`recipe/${recipeId}`)
				.then(res => {
					dispatch({type: types.GET_RECIPES_BY_ID_SUCCESS, recipe: res.data })
					})
					.catch(err => dispatch(errorOccured(err)))
					}}
