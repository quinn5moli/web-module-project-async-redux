import React from 'react';
import { connect } from 'react-redux';

const Title = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        title: state.title
    })
}

export default connect(mapStateToProps)(Title);