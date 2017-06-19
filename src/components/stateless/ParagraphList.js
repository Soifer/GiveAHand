import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {HtmlContentParser} from '../../tools/HtmlParser';

const paragraphs = require('./paragraphs');

const ParagraphList = ({ paragraphList }) => {
    let start = true;
    let parserTs = HtmlContentParser.getInstance();
   
    parserTs.reset();
    parserTs.setLength(paragraphList.length);
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