import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PersonItemBlock from '../person-item';

const personList = ({ list }) => {
    return (
        <>
            {
                list.map((item, index) => {
                    const { 
                        email, 
                        gender, 
                        name: { 
                            first: name, 
                            last: surname 
                        }, 
                        picture: { 
                            thumbnail: photo 
                        },
                    } = item;

                    const person = { email, name, surname, gender, photo };

                    return (
                        <React.Fragment key={ index }>
                            <PersonItemBlock person={ person } />
                        </React.Fragment>
                    )
                })
            }
        </>
    );
};

const mapStateToProps = state => {
    const { personList: { list } } = state;
    return { list };
};

export default connect(mapStateToProps)(personList);

personList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
