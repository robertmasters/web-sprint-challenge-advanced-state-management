import React, { Component, useEffect } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import {newSmurfForm} from './addSmurf/Form'
import { connect } from 'react-redux'
import {fetchSmurfs} from '../store/actions/action'

function App (props) {

  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className="App">
    
      <SmurfList />
      <newSmurfForm />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
