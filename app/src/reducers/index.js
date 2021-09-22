import { GET_NEW_FACT, FETCHING_FACT_START, FETCHING_FACT_SUCCESS, FETCHING_FACT_FAILURE } from "../actions";

const initialState = {

    title: 'Cat Facts',
    fact: '',
    loading: false,
    error: "",

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(GET_NEW_FACT): 
            return(
                {
                    ...state,
                    fact: action.payload
                }
            )
        case(FETCHING_FACT_START):
            return(
                {
                    ...state,
                    loading: true,
                }
            )
        case(FETCHING_FACT_SUCCESS):
            return(
                {
                    ...state,
                    loading: false,
                    fact: action.payload
                }
            )
        case(FETCHING_FACT_FAILURE):
                return(
                    {
                        ...state,
                        loading: false,
                        error: action.payload
                    }
                )
        default: 
                    return state;
    }
}