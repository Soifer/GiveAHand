import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/App';
import MainPage from './components/pages/MainPage';
import ArticlePage from './components/pages/ArticlePage';
import SectionPage from './components/pages/SectionPage';
import CategoryPage from './components/pages/CategoryPage';
import TalkbackPage from './components/pages/TalkbackPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={MainPage}/>
        <Route path="article/:id" component={ArticlePage}/>
        <Route path="section" component={SectionPage}/>
        <Route path="category" component={CategoryPage}/>
        {/*<Route path="talkback" component={TalkbackPage}/>*/}
    </Route>
);