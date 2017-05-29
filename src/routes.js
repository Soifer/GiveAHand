import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/App';
import MainPage from './components/MainPage';
import ArticlePage from './components/ArticlePage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={MainPage}/>
        <Route path="about" component={ArticlePage}/>
    </Route>
);