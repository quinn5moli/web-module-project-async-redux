import axios from 'axios';

export const GET_NEW_FACT = "GET_NEW_FACT"
export const FETCHING_FACT_START = "FETCHING_FACT_START"
export const FETCHING_FACT_SUCCESS = "FETCHING FACT_SUCCESS"
export const FETCHING_FACT_FAILURE = "FETCHING_FACT_FAILURE"

export const getNewFact = () => (dispatch) => {
    dispatch({type: FETCHING_FACT_START})

    axios.get("https://catfact.ninja/fact")
    .then(res => {
        dispatch({type: FETCHING_FACT_SUCCESS, payload: res.data.fact})
    })
    .catch(err => {
        dispatch({type: FETCHING_FACT_FAILURE, payload: err})
    })

}