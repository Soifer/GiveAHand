import React from 'react';
import PropTypes from 'prop-types';
import GetData from '../../services/articleService';
import ParagraphList from './../stateless/ParagraphList';
import constants from '../../constants';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        let data = GetData(this.props.id);
        data.then((articleData)=>{
            this.setState({
                list: articleData,
                article: articleData[0]
            });
        });
    }

    render() {
        return (
            <div className="articleContent">
                <ParagraphList paragraphList={this.state.list}/>
                 {/*{this.state.article.StripImagePathShow.isEmpty() || }*/}
            </div>
           
//             <div class="rsvp_fullwidth">
//                 {article.StripeColor}
//     <div *ngIf='item?.StripImagePathShow' class="rsvp_image_with_caption">
        
//         <img src={} />
//     </div>
//     <videocasttime [article]='item'></videocasttime>
//     <!-- image with caption start -->
//     <div style="clear:both;"></div>
//     <div *ngIf='item?.Paragraphs[0]?.PicMediaStockImageID  && !item?.IsVideo' class="rsvp_image_with_caption">
//         <!--<a href="article_gallery.html" class="rsvp_imag_expand"></a>-->
//         <img [src]="_loadingUrl" [alt]="item?.Paragraphs[0]?.PicMediaStockImageAlt" />
//         <p class="oedoopror">{{item?.Paragraphs[0]?.PicMediaStockImageAlt}} צילום {{item?.Paragraphs[0]?.PicMediaStockImageCredit}}</p>
//     </div>
//     <div style="clear:both;"></div>
//     <!-- image with caption end -->
//     <!-- article body start here  -->
//     <div class="rsvp_article_body">
//         <h1 class="rsvp_article_body_h1 oedooprom">{{item?.Title}}</h1>
//         <h2 class="rsvp_article_body_h2 oedooprob">
//             {{item?.SubTitle}}
//         </h2>
//         <div class="rsvp_flc"></div>
//         <div class="rsvp_post_details">
//             <small class="rsvp_post_color rsvp_flr" [style.background-color]='item?.StripeColor'></small>
//             <div class="rsvp_flc"></div>
//             <span class="rsvp_author">{{item?.AuthorName}}</span>
//             <span class="rsvp_date">עודכן {{item?.ModifyDateFormatted}}</span>
//         </div>
//         <div class="rsvp_flc"></div>
//         <br>
//         <paragraph [item]='paragraph' [index]='i' *ngFor="let paragraph of item?.Paragraphs; let i = index"></paragraph>
//     </div>
//      <dynamic-dfp-component [componentData]="inArticleData"></dynamic-dfp-component>
//     <taboola [isInitialized]='isInitialized' [url]='currentUrl'></taboola>
//     <main [showTwitter]='false' [isInArticle]='true'></main>
//     <tag-manager></tag-manager>
// </div>
        );
    }
}



export default Article;
