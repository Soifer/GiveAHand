import React, {Component} from 'react';
import PropTypes from 'prop-types';


const HeadlineMain = ({headline}) => {
    return (
        <div>
            <h1>{headline.Title}</h1>
        </div>
    );
};

HeadlineMain.propTypes = {
    headline: PropTypes.object.isRequired
};

export default HeadlineMain;