import axios from "axios";

// action types
export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SUCCESS = "ADD_SUCCESS";


// action creators (async)
export const fetchSmurfs = () => {
  return (dispatch) => {
    // do async actions here
    dispatch({ type: FETCH_SMURF_START });
    // console.log("dispatch: ", dispatch)
    // fetch data
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log("good : ", res.data)
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        // console.log(err.message);
        dispatch({ type: FETCH_SMURF_FAILURE, payload: err.message });
      });
  };
};

export const submitNewSmurf = (addSmurf) =>(dispatch) => {
    dispatch({ type: ADD_SMURF });
    axios
    .post('http://localhost:3333/smurfs', addSmurf)
    .then((res) => {
        dispatch({ type: ADD_SUCCESS, payload: res.data})
    })
    .catch((error) => {
console.log("error: ", error)
    })
}
