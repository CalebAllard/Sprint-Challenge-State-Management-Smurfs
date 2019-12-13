import React, { Component } from "react";
import "./App.css";
//components
import Smurfs from './Smurfs';
import SmurfAdd from './SmurfAdd';
//action imports
import {getData,postData,deleteData} from '../actions'
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
        <Smurfs state={this.props.smurfs} deleteData={this.props.deleteData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
      smurfs: state.smurfs,
      post: state.post
      
  }
}

export default connect(
  mapStateToProps,
  {getData,postData,deleteData}
  )(App);
