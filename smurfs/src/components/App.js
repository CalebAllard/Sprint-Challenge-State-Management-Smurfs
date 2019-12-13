import React, { Component } from "react";
import "./App.css";
//components
import Smurfs from './Smurfs';
import SmurfAdd from './SmurfAdd';
//action imports
import {getData,postData,deleteData,togleEdit} from '../actions'
//react redux imports
import {connect} from 'react-redux';


class App extends Component {
  
  componentDidMount(){
    
    this.props.getData();
  
  };
  
  
  render() {
    return (
      <div className="App">
        <h1>My Smurf Village</h1>
        <SmurfAdd state={this.props.post} postData={this.props.postData}/>
        <Smurfs state={this.props.smurfs} edit={this.props.edit} deleteData={this.props.deleteData} togleEdit={this.props.togleEdit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
      smurfs: state.smurfs,
      post: state.post,
      edit: state.edit
      
  }
}

export default connect(
  mapStateToProps,
  {getData,postData,deleteData,togleEdit}
  )(App);
