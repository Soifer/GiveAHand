import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { HtmlContentParser } from '../../../tools/HtmlParser';

const ParagraphDefault = ({ paragraph }) => {
    
    let parserTs = HtmlContentParser.getInstance();
    let decodedText = paragraph.ParagraphContent.decodeHtmlCustom();
    let safeHtml = parserTs.contentHref(decodedText); // paragraph's HTML content parser
    parserTs.contentScript(decodedText); // paragraph's SCRIPTS parser

    return (
        <div className="paragraphContainer">
            <Card>
                {!paragraph.ImagePathParagraph.isEmpty() &&
                    <CardMedia overlay={<CardTitle title={paragraph.PicMediaStockImageAlt} subtitle={"צילום:" + paragraph.PicMediaStockImageCredit} />} >
                        <img src={paragraph.ImagePathParagraph} alt={paragraph.PicMediaStockImageAlt} />
                    </CardMedia>
                }
                <CardTitle title={paragraph.ParagraphTitle} />
                <CardText>

                    <div
                        dangerouslySetInnerHTML={{
                            __html: safeHtml
                        }}
                    />
                </CardText>
            </Card>
        </div>
    );
};

ParagraphDefault.propTypes = {
    paragraph: PropTypes.object.isRequired
};

export default ParagraphDefault;