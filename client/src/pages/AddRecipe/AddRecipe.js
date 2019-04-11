import React, {Component} from "react";
import {addRecipe, addRecipeStart} from "../../store/actions/recipe"
import { connect } from "react-redux";
// import tinymce from 'tinymce/tinymce';
import { Editor } from '@tinymce/tinymce-react';
// A theme is also required
// import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import {
    Col,
    Row,
    Container,
  } from "reactstrap";

class AddRecipe extends Component {
    state ={
        title: "",
        ingredients: "",
        steps: "",
        images: ""
    }

    //onchange function
    handleInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    //onSubmit
    onSubmit = (e) => {
        e.preventDefault();
        const formData = {
        title: this.state.title, 
        ingredients: this.state.ingredients,
        steps: this.state.steps,
        images: this.state.images
     }
        
        console.log(formData);
		this.props.onAddRecipe(JSON.stringify(formData));
};

render(){
const inputStyle = {width: "100%", height: "90px", border_radius: "25px"}
const selectStyle = {width: "100%"}
    return(
        <div >
        <Container>
            <Row>
            <Col md={{ size: 6, offset: 3 }}>   
                <form onSubmit={this.onSubmit} action="/add" method="POST" entype="multipart/form-data">
                    <div >
                        <label for="title"><h3>Title:</h3></label>
                        <input type="text" name="title" placeholder="Recipe Name"
                         onChange={this.handleInputChange} style={inputStyle}/>
                    </div>
                    <div >
                        <label for="select"><h3>Category:</h3> </label>
                        <select name="select" style={selectStyle}>
                            <option>African Dishes</option>
                            <option>Breakfast Recipes</option>
                            <option>Continental Dishes</option> 
                        </select>
                    </div>
                    <div>
                        <label for="instructions"><h3>Ingredients:</h3></label>
                        <Editor apiKey="3mmvy5shfsswmkepnsxfoq44wpy01u3m1wkei2cq2rxnhn09" 
                            init={{ plugins: 'link table', textarea : "instructions"}} 
                            name="ingredients" placeholder="Recipe Name"
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label for="steps"><h3>Instructions:</h3></label>
                        <Editor apiKey="3mmvy5shfsswmkepnsxfoq44wpy01u3m1wkei2cq2rxnhn09" 
                            init={{ plugins: 'link table', textarea : "steps"}} name="steps" 
                            initialValue="<p>Instructions on how to prepare the meal</p>"
                            onChange={this.handleInputChange} 
                            />
                    </div>
                    <div>
                        <label for="images"><h3>Image Upload</h3></label>
                        <input type="file" name="images" style={inputStyle}/>
                    </div>
                        <button type="submit" color="danger">Add Recipe</button>    
                    </form>
             </Col>
            </Row>
        </Container>
    </div>
        )
    }
}


const mapStateToProps = state => ({
	recipes : state
});

const mapDispatchToProps = dispatch => ({
	onAddRecipeStart: () => dispatch(addRecipeStart()),
	onAddRecipe: data => dispatch(addRecipe(data))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddRecipe);