import React from 'react';
import { connect } from 'react-redux';

const personList = ({ personList: { list } }) => {
    return (
        <>
            {
                list.map((item, index) => {
                    const { email, gender, name: { title, first: name, last: surname }, picture: { thumbnail: photo } } = item;

                    return (
                        <div key={ index }>
                            <p>{ email }</p>
                            <p>{ gender }</p>
                            <p>{ title }</p>
                            <p>{ name }</p>
                            <p>{ surname }</p>
                            <p>{ photo }</p>
                        </div>
                    )
                })
            }
        </>
    );
};

export default connect(state => state)(personList);
