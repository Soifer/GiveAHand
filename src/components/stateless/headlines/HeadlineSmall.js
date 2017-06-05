import React, {Component} from 'react';
import PropTypes from 'prop-types';

const HeadlineSmall = ({headline}) => {
    let stripeColor = {
        background:headline.StripeColor
    };
    let clear = {
        clear: 'both'
    };
    return (
        <div>
            <h1>{headline.Title}</h1>
            <ul className="rsvp_secondary_lisiting">
                <li className="rsvp_money_article">
                    <a >
                        <div className="rsvp_play_wrapper">
                            <img src="/src/assets/Images/preload_640-360.png" alt={headline.MediaStockImageAlt} />
                            <div className="rsvp_icon_play_outer" >
                                <div className="rsvp_icon_play"/>
                            </div>
                        </div>
                        <div className="rsvp_money_article_content">
                            <div className="rsvp_feed_cat_color rsvp_cat2" style={stripeColor}/>
                            <div style={clear} />
                            <div className="rsvp_money_article_title oedooprom">{headline.Title}</div>
                        </div>
                        <div style={clear}/>
                    </a>
                    <div style={clear}/>
                </li>
            </ul>
        </div>
    );
};

HeadlineSmall.propTypes = {
    headline: PropTypes.object.isRequired
};

export default HeadlineSmall;