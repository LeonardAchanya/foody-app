import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner} from "reactstrap";

import RecipeCards from "../../component/RecipeCards/RecipeCards";
import { getRecipe } from "../../store/actions/recipe";

import "./Recipes.css"
class Recipes extends Component {
	componentDidMount() {
		this.props.onGetRecipe();
	}
            render() {
                // const divStyle = {display: "flex", width: "100%",
                //          background_color: "danger"}
		                    return (
                                <div className="recipes">
                                     <h2>Recipes List</h2>
                                        {/* <Row>
                                            <Col > */}
                                    {this.props.isLoading ? (
                                        <Spinner /> ) : ( 
                                        <RecipeCards recipes={this.props.recipes} />)}
                                      {/* </Col>  </Row> */}
                                    </div>
                                    );
                                }
                            }
                
                                       

const mapStateToProps = state => ({
	recipes: state.recipe.recipes,
	isLoading: state.recipe.isLoading
});

const mapDispatchToProps = dispatch => ({
	onGetRecipe: () => dispatch(getRecipe())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Recipes);
