

import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    ADD_SMURF,
    ADD_SUCCESS
  } from "../actions/action";
  
  const initialState = {
    isLoading: false,
    smurfData: [],
    error: ""

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
          smurfData: action.payload
          
        };
      case FETCH_SMURF_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
        case ADD_SMURF:
            return {
                ...state, 
                isLoading:false,
                smurfData:  action.payload
            }
case ADD_SUCCESS:
    return {
        ...state, 
        isLoading: false,
        smurfs: action.payload
    }

      default:
        return state;
    }
    
  };
  