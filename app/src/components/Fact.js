import React, {useEffect} from "react";
import { getNewFact } from "../actions";
import { connect } from "react-redux";

const Fact = (props) => {

    useEffect(() => {
        props.getNewFact();
    }, [props.getNewFact]);


    if (props.loading) {
        return (
            <>
                <h1>Loading..</h1>
            </>
        )
    }

    return (
        <>
            <h3>{props.fact}</h3>
            <button onClick={()=> props.getNewFact()}>Get New Fact</button>    
        </>
    )

}

const mapStateToProps = (state) => {
    return ({
        fact: state.fact,
        error: state.error,
        loading: state.loading,
    })
}

const mapDispatchToProps = { getNewFact}

export default connect(mapStateToProps, mapDispatchToProps)(Fact);