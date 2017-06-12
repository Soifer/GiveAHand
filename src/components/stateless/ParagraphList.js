import React, {Component} from 'react';
import PropTypes from 'prop-types';
const paragraphs = require('./paragraphs');

const ParagraphList = ({paragraphList}) => {

    return (
        <div>
            {paragraphList.map((item, index) => {
                const arr = {
                    paragraph: item,
                    key: item.ParagrphID + index
                };

                return React.createElement(paragraphs.default, arr);
            })
}
        </div>
    );
};

ParagraphList.propTypes = {
    paragraphList: PropTypes.array.isRequired
};

export default ParagraphList;