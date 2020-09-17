import React from 'react';
import { connect } from 'react-redux';

const loader = ({ loader }) => {
    return (
        <>
            { loader.loader && <p>Loading...</p> }
        </>
    );
};

export default connect(state => state)(loader);
