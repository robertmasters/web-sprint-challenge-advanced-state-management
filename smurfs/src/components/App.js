import React, { Component, useEffect } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import NewSmurfForm from './addSmurf/Form'
import { connect } from 'react-redux'
import {fetchSmurfs} from '../store/actions/action'

function App (props) {

  // useEffect(() => {
  //   props.fetchSmurfs();
  // }, []);

  return (
    <div className="App">
    
      <SmurfList />
      
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     smurfs: state.smurfData
//   }
// }

// export default connect(mapStateToProps, { fetchSmurfs })(App);

export default App;

