import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const loader = ({ loader}) => <>{ loader && <p>Loading...</p> }</>;

const mapStateToProps = state => {
    const { loader: { loader } } = state;
    return { loader };
};

export default connect(mapStateToProps)(loader);

loader.propTypes = {
    loader: PropTypes.bool.isRequired,
};
