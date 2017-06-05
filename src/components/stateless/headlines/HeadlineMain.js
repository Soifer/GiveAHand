import React, {Component} from 'react';
import PropTypes from 'prop-types';

const HeadlineMain = ({headline}) => {
    return (
        <div>
            <h1>{headline.Title}</h1>
            {/*<div style="clear:both;"></div>
<div class="rsvp_main_article" style="{'margin-bottom': '12px'}">
    <a [routerLink]="['/article', item?.DestArticleID]">
        <div class="mainHeadlineClass"></div>
        <img [src]="loadingUrl" [alt]="item?.MediaStockImageAlt" (load)="imageLoaded()"/>
        <div class="rsvp_main_article_content">
            <div class="oedooprob rsvp_main_article_cat">{{item?.PrimeTag}}</div>
            <div style="clear:both;"></div>
            <h2 class="oedooprom">{{item?.Title}}</h2>
        </div>
    </a>
    <div style="clear:both;"></div>
</div>
<div style="clear:both;"></div>*/}
        </div>
    );
};

HeadlineMain.propTypes = {
    headline: PropTypes.object.isRequired
};

export default HeadlineMain;