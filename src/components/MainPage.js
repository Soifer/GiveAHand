import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';
import GetArticles from '../services/ArticleService';
import ArticlePage from './ArticlePage';

class MainPage extends React.Component {
    constructor(props,context) {
        super(props, context);
        this.state = {
            data: []
        };
        this.redirect = this.redirect.bind(this);
    }

    componentDidMount() {
        this.get();
    }

    get() {
        return setTimeout(() => {
            let promise = GetArticles();
            promise.then((articles) => {
                this.setState({ data: articles });
            });
        }, 2000);

    }
    
    redirect(id){
        this.context.router.push("/article/" + id);
    }

    render() {
        return (
            <div>
                <h1>MainPage</h1>
                <div>
                    {this.state.data.length > 0
                        ? this.state.data.map((article, index) => <ArticlePage key={article.Content + index} article={article} />)
                        : "loading..."}
                </div>
                <ButtonToolbar>
                    <Button  bsStyle="primary" bsSize="small">Prev</Button>
                    <Button className="pull-right" bsStyle="primary" bsSize="small">Next</Button>
                </ButtonToolbar>
            </div>
        );
    }
}

MainPage.contextTypes ={
    router: PropTypes.object
};
export default MainPage;