import React from 'react';
import PropTypes from 'prop-types';
import GetData from '../../services/articleService';
import ParagraphList from './../stateless/ParagraphList';
import constants from '../../constants';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        let data = GetData(this.props.id);
        data.then((articleData) => {
            this.setState({
                list: articleData,
                article: articleData[0]
            });
        });
    }

    render() {
        let articleData = this.state.article;
        let list = this.state.list;
        return (
            list.length > 0 &&
            <div className="articleContent">
                <Card>
                    <CardMedia overlay={<CardTitle title={"צילום:" + articleData.MediaStockImageCredit} subtitle={articleData.MediaStockImageAlt} />} >
                        <img src={articleData.ImagePathArticle} alt={articleData.MediaStockImageAlt} />
                    </CardMedia>
                    <CardTitle title={articleData.Title} subtitle={articleData.SubTitle} />
                    <CardText>
                        <ParagraphList paragraphList={this.state.list} />
                    </CardText>
                    {/*<CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>*/}
                </Card>
            </div>
        );
    }
}

export default Article;