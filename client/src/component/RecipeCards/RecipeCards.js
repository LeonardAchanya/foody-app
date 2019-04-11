
import React from "react";
import { NavLink } from "react-router-dom";
import {
	Col,
	Card,
	Row,
	CardBody,
	CardTitle
} from "reactstrap";

import "./RecipeCards.css"
const RecipeCards = ({recipes}) => {
	
	// const divStyle = {display: "flex", width: "100%", background_color: "danger"}
	return (
		<div className="cardlist">
        	
					<Row>
				        {recipes.map(recipe => (
							<Col key={recipe.id} sm="3"  className="cards">
				            {/* <NavLink key={recipe.id} to={`/recipe/${recipe.id}`} className="nav-link"> */}
								<div className="card-image">
									<h2>{recipe.images}</h2>
										</div>
											<ul className="card-text">
												<li>{recipe.title}</li>
												<li>{recipe.steps}</li>
											</ul>
										<div className="card-footer">
									{/* <small className="text-muted">
										Last updated <Moment fromNow>{job.updatedAt}</Moment>
									</small> */}
								</div>
						{/* </NavLink> */}
					</Col>
						))}
					</Row>
				</div>
			
			)};
	

						
export default RecipeCards;
