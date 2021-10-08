import React from 'react';
import { connect } from 'react-redux';
import { getNewFact } from '../actions';

const Title = (props) => {

    const {title} = props;

    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        title: state.title
    })
}

const mapDispatchToProps = (dispatch) => {
    return {

        getNewFact: () => dispatch(getNewFact())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);