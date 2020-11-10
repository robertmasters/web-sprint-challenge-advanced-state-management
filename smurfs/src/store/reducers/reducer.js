

import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    ADD_SMURF,
    ADD_SUCCESS 
  } from "../actions/action";
  
  const initialState = {
    smurfData: [],
    isLoading: false,
    error: "",

  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SMURF_START:
        return {
          ...state,
          isLoading: true,
          error: ""
        };
      case FETCH_SMURF_SUCCESS:
        console.log("action.payload: ",action.payload)
        
        return {
          ...state,
          isLoading: false,
          smurfData: [...action.payload]
          
        };
      case FETCH_SMURF_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
        case ADD_SMURF:
            console.log("ADD_SMURF - state: ",state)
            console.log("ADD_SMURF - payload: ", action.payload)
            return {
                ...state, 
                isLoading:true,
                // smurfData:  action.payload
            }
case ADD_SUCCESS:
    console.log("ADD_SUCCESS: - state: ",state)
    console.log("ADD_SUCCESS - payload: ", action.payload)
    return {
        ...state, 
        isLoading: false,
        smurfData:[ ...state.smurfData, action.payload]
    }

      default:
        return state;
    }
    
  };
  