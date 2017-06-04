import React, {Component} from 'react';
import PropTypes from 'prop-types';


const HeadlineBig = ({headline}) => {
    return (
        <div>
            <h1>{headline.Title}</h1>
        </div>
    );
};

HeadlineBig.propTypes = {
    headline: PropTypes.object.isRequired
};

export default HeadlineBig;