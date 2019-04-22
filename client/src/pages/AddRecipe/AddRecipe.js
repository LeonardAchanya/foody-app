import React, {Component} from "react";
import {addRecipe, addRecipeStart} from "../../store/actions/recipe"
import { connect } from "react-redux";
// import tinymce from 'tinymce/tinymce';
// import { Editor } from '@tinymce/tinymce-react';
// A theme is also required
// import 'tinymce/themes/modern/theme';
// import 'tinymce/plugins/paste';
// import 'tinymce/plugins/link';
import {
    Col,
    Row,
    Container,
    Form,
    FormGroup,
    Input,
    Label
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

    onImgChanged = e => {
        this.setState({
            [e.target.name] : e.target.files[0]
        })
    };

   
    onSubmit = (e) => {
        e.preventDefault();
        console.log("love")
        const formData = {
                        title: this.state.title, 
                        ingredients: this.state.ingredients,
                        steps: this.state.steps,
                        images: this.state.images
                        }
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
            
                <Form  onSubmit={this.onSubmit} method="POST" entype="multipart/form-data">
                    <FormGroup>
                        <Label for="title"><h3>Title:</h3></Label>
                        <Input type="text" name="title" placeholder="Recipe Name"
                         onChange={this.handleInputChange} style={inputStyle} />
                         
                    </FormGroup>
                    <FormGroup>
                        <Label for="select"><h3>Category:</h3> </Label>
                        <Input type="select" name="select" style={selectStyle}>
                            <option>African Dishes</option>
                            <option>Breakfast Recipes</option>
                            <option>Continental Dishes</option> 
                        </Input>
                    </FormGroup>
                    {/* <FormGroup>
                        <Card>
                        <Label for="instructions"><h3>Ingredients:</h3></Label>
                        <Editor apiKey="3mmvy5shfsswmkepnsxfoq44wpy01u3m1wkei2cq2rxnhn09" 
                            init={{ plugins: 'link table', textarea : "instructions"}} 
                            name="ingredients" placeholder="Ingredients needed"
                            onChange={this.handleInputChange} />
                        </Card>
                    </FormGroup> */}
                    {/* <FormGroup>
                        <Card>
                        <label for="steps"><h3>Instructions:</h3></label>
                        <Editor apiKey="3mmvy5shfsswmkepnsxfoq44wpy01u3m1wkei2cq2rxnhn09" 
                            init={{ plugins: 'link table', textarea : "steps"}} name="steps" 
                            initialValue="<p>Instructions on how to prepare the meal</p>"
                            onChange={this.handleInputChange} 
                            />
                            </Card>
                    </FormGroup> */}
                    <FormGroup>
                        {/* <Label for="recipe description">Description</Label> */}
                        <Input
                            type="textarea"
                            rows="7"
                            name="steps"
                            id="steps"
                            placeholder="Recipe Description"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        {/* <Label for="ingredients">ingredients</Label> */}
                        <Input
                            type="textarea"
                            rows="7"
                            name="ingredients"
                            id="ingredients"
                            placeholder="Recipe Ingredients"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="images"><h3>Image Upload</h3></Label>
                        <Input type="file" name="images" style={inputStyle} accept=".jpg, .jpeg, .png"
                          onChange={this.onImgChanged} />
                 </FormGroup>
                    <FormGroup>
                        <button type="submit" onSubmit={this.onSubmit} color="danger">Add Recipe</button>    
                    </FormGroup>
                    </Form>
                
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
	onAddRecipe: (data) => dispatch(addRecipe(data))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddRecipe);