import React from 'react';
import PropTypes from 'prop-types';
import Article from './../dynamic/Article';

const ArticlePage = (props) => (
  <div>
    <Article id={props.params.id}/>
  </div>
);

ArticlePage.propTypes = {
    params: PropTypes.object
};

export default ArticlePage;