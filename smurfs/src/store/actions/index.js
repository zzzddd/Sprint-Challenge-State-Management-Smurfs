import axios from "axios";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

export const POST_DATA_START = "POST_DATA_START";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAILURE = "POST_DATA_FAILURE";


export const getData = () => dispatch => {
  dispatch({ type: FETCHING_DATA_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: FETCHING_DATA_FAILURE,
        payload: err.response.message
      })
    );
};

export const postData = data => dispatch => {
  dispatch({ type: POST_DATA_START });
  axios
    .post(`http://localhost:3333/smurfs`, data)
    .then(res => dispatch({ type: POST_DATA_SUCCESS }))
    .catch(err =>
      dispatch({ type: POST_DATA_FAILURE, payload: err.response.message })
    );
};

