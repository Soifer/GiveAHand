import React from "react";
import ReactDOM, {render} from "react-dom";
import {Router, Route, browserHistory} from 'react-router';
import routes from './routes';
import {Extensions} from './tools/Extensions';

render(
  <Router history={browserHistory} routes={routes}/>, document.getElementById("content"),Extensions.init()
  );