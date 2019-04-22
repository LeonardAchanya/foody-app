import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
// import { connect } from "react-redux";
// import { Container } from "reactstrap";
// import { Editor } from '@tinymce/tinymce-react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import tinymce from 'tinymce/tinymce';
// import { Editor } from '@tinymce/tinymce-react';
// A theme is also required
// import 'tinymce/themes/modern/theme';
// import 'tinymce/plugins/paste';
// import 'tinymce/plugins/link';

import NavbarApp from "./component/NavbarApp/NavbarApp";
import { Home, AddRecipe, Recipes } from "./pages/index";


class App extends Component {

  // handleEditorChange = (e) => {
  //   console.log('Content was updated:', e.target.getContent());
  // }
  render() {
    return (
      <div className="App">
        <NavbarApp />
          <Switch>
              <Route path="/recipe" component={Recipes} /> 
              <Route path="/addRecipe" component={AddRecipe}/> 
              <Route path="/" exact component={Home} />
              <Route render={() => <h2>Not Found</h2>} />
          </Switch>
        
      </div>
    );
  }
}

export default App;
