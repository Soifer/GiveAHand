import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const ParagraphDefault = ({paragraph}) => {
    return (
        <div>
            Paragraph: {paragraph.ParagrphID}
        </div>
    );
};

ParagraphDefault.propTypes = {
    paragraph: PropTypes.object.isRequired
};

export default ParagraphDefault;