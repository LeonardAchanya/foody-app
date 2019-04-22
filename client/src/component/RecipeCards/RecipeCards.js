
import React from "react";
// import { NavLink } from "react-router-dom";
import {
	Col,
	Row,
	Card,
	CardTitle,
	Container,
	CardBody

} from "reactstrap";

import "./RecipeCards.css"
const RecipeCards = ({recipes}) => {
	
	// const divStyle = {display: "flex", width: "100%", background_color: "danger"}
	return (
		
        	    <Container>
					<Row>
				        {recipes.map(recipe => (
							<Col key={recipe.id} sm="4"  className="cards">
				            {/* <NavLink key={recipe.id} to={`/recipe/${recipe.id}`} className="nav-link"> */}
								<Card>
									<CardTitle>
										{recipe.title}
										</CardTitle>
										<div className="card-image">
											{recipe.images}
										</div>
										<div className= "card-footer">
											favorite
										</div>
									

									{/* <small className="text-muted">
										Last updated <Moment fromNow>{job.updatedAt}</Moment>
									</small> */}
						{/* </NavLink> */}
						</Card>
					</Col>
						))}
					</Row>
					</Container>
			
			)};
	

						
export default RecipeCards;
