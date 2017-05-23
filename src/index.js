import React from "react";
import ReactDOM, {render} from "react-dom";
import {Router, Route, browserHistory} from 'react-router';
import routes from './routes';

render(
  <Router history={browserHistory} routes={routes}/>, document.getElementById("content")
  );