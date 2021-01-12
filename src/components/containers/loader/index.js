import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const loader = ({ loader: { loader } }) => <>{ loader && <p>Loading...</p> }</>;

export default connect(state => state)(loader);

loader.propTypes = {
    loader: PropTypes.shape({
        loader: PropTypes.bool.isRequired,
    }),
};
