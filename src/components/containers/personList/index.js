import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { PersonItemBlock } from '../../presentations';

const personList = ({ personList: { list } }) => {
    return (
        <>
            {
                list.map((item, index) => {
                    const { email, gender, name: { first: name, last: surname }, picture: { thumbnail: photo } } = item;

                    return (
                        <React.Fragment key={ index }>
                            <PersonItemBlock person = {{ email, name, surname, gender, photo }} />
                        </React.Fragment>
                    )
                })
            }
        </>
    );
};

export default connect(state => state)(personList);

personList.propTypes = {
    personList: PropTypes.shape({
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
};
