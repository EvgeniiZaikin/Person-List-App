import React from 'react';
import { connect } from 'react-redux';

import { PersonItemBlock } from '../../presentations';

const personList = ({ personList: { list } }) => {
    return (
        <>
            {
                list.map((item, index) => {
                    const { email, gender, name: { first: name, last: surname }, picture: { thumbnail: photo } } = item;

                    return (
                        <React.Fragment key={ index }>
                            <PersonItemBlock
                                email={ email }
                                name = { name }
                                surname={ surname }
                                gender={ gender }
                                photo={ photo } />
                        </React.Fragment>
                    )
                })
            }
        </>
    );
};

export default connect(state => state)(personList);
