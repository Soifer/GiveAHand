import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import GetArticles from '../services/ArticleService';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             data:[]
        };
        this.get();
    }
    get() {
        let promise = GetArticles();
        promise.then((articles) => {
            this.setState({data:articles});
        });
    }
    render() {

        return (
            <div>
                <h1>
                    MainPage</h1>
                    <div>{this.state.data.length > 0 && this.state.data[0].Content}</div>
                <Button bsStyle="primary" bsSize="large">Large button</Button>
            </div>

        );
    }
}
export default MainPage;