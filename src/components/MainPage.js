import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import GetArticles from '../services/ArticleService';
import ArticlePage from './ArticlePage';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.get();
    }
    get() {
        let promise = GetArticles();
        promise.then((articles) => {
            this.setState({data: articles});
        });
    }
    render() {

        return (
            <div>
                <h1>MainPage</h1>
                <div>
                    {this.state.data.map((article, index) =>
                          <ArticlePage key={article.Content + index} article={article} />
                    )}
                   </div>
                    <Button bsStyle="primary" bsSize="large">Large button</Button>
            </div>

        );
    }
}
export default MainPage;