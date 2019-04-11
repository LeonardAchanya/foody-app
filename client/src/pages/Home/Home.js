import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {  Jumbotron, Container } from "reactstrap";

import RecipeCards from "../../component/RecipeCards/RecipeCards";
import { getRecipe } from "../../store/actions/recipe";

class Home extends Component {
	// A component life cycle method that executes immediately
	// the component mounts. Here, we get all jobs.
	// componentDidMount = () => {
	// 	this.props.OnGetRecipe();
	// 	};
		

    render() {
		return (
			<div style={{ marginTop: "-3rem" }}>
				<Jumbotron fluid>
					<Container>
					<h1 className="display-3">FOODY APP</h1>
						<p className="lead">
							Get access to recipes of different kind of meals.
						</p>
						<RecipeCards recipes={this.props.recipes} />
					</Container>
				</Jumbotron>
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
)(Home);

// export default Home;