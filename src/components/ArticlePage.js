import React from 'react';
import PropTypes from 'prop-types';

class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <span>{this.props.article.Content}</span>
            </div>
        );
    }
}

ArticlePage.PropTypes = {
    article: PropTypes.object.isRequired
};

export default ArticlePage;