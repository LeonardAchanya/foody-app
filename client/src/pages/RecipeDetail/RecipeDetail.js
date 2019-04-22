import React, {Component} from "react";
import {connect} from "react-redux";
import {spinner, container} from "reactstrap";
import { getRecipeById } from "../../store/actions/recipe";

class RecipeDetail extends Component{
    componentDidMount = () => {
        const recipeId = +this.props.match.params.id;
        this.props.getRecipeById(recipeId)
    }
    render(){
        const {recipe} = this.props;
        return(
            <Container>
                <h1>Recipe Detail</h1>
                    {this.props.isLoading ? (
                        <div>
                            <Spinner color= "dark" />
                        </div>
                ) :(
                    <div>
                        <div className="title"> 
                        <h2>{recipe &&  recipe.title}</h2>
                        </div>
                        <div className="ingredients">
                        <h2>{recipe &&  recipe.steps }</h2>
                        </div>
                        <div className="steps">
                        <h2>{ recipe && recipe.description}</h2>
                        </div>
                    </div>
                    )}
            </Container>
        )}
            }



const mapStateToProps = state => ({
    recipes : state.recipe.recipe,
    isLoading: state.recipe.isLoading
});

const mapDispatchToProps = dispatch => ({
    onGetRecipeId: recipeId => dispatch(getRecipeById(recipeId))
})

export default connect (
    mapDispatchToProps,
    mapStateToProps
) (RecipeDetail);



