import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HeadlineMain from '../stateless/headlines/HeadlineMain';
import HeadlineBig from '../stateless/headlines/HeadlineBig';
import HeadlineSmall from '../stateless/headlines/HeadlineSmall';

const HeadlineList = ({headlineList}) => {
    
    return (       
        <div>
            {headlineList.map((item) => {
                switch (item.DisplaySigns) {
                    case 10: return <HeadlineBig key={item.DestArticleID} headline={item}/>;                        
                    case 2:  return <HeadlineMain key={item.DestArticleID} headline={item}/>;                        
                    default: return <HeadlineSmall key={item.DestArticleID} headline={item}/>;                        
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