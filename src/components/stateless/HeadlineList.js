import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import HeadlineMain from '../stateless/headlines/HeadlineMain'; import
// HeadlineBig from '../stateless/headlines/HeadlineBig'; import HeadlineSmall
// from '../stateless/headlines/HeadlineSmall';
const headlines = require('./headlines');
const HeadlineList = ({headlineList}) => {

    return (
        <div>
            {headlineList.map((item, index) => {
                const arr = {
                    headline: item,
                    key: item.DestArticleID + index
                };
                if (item.DisplaySigns === 0) {
                    return React.createElement(headlines[item.DisplaySigns], arr);
                }
            })
}
        </div>
    );
};

HeadlineList.propTypes = {
    headlineList: PropTypes.array.isRequired
};

export default HeadlineList;