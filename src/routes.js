import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
import MainPage from './components/pages/MainPage';
import ArticlePage from './components/pages/ArticlePage';
import SectionPage from './components/pages/SectionPage';
import CategoryPage from './components/pages/CategoryPage';
import LoginPage from './components/pages/LoginPage';
import {Extensions} from './tools/Extensions';

function requireAuth(nextState, replace) {
    if (!Extensions.isAdmin()) {
        replace({
            pathname: '/login'
        });
    }
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={MainPage} />
        <Route path="article/:id" component={ArticlePage} />
        <Route path="section" component={SectionPage} />
        <Route path="category" component={CategoryPage} />
        <Route path="login" component={LoginPage} />
        <Route path="/edit/" component={App} onEnter={requireAuth} >
            <IndexRoute component={MainPage} />
            <Route path="article/:id" component={ArticlePage} />
            <Route path="section" component={SectionPage} />
        </Route>
    </Route>
);