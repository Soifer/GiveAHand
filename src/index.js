import React from "react";
import ReactDOM, {render} from "react-dom";
import {Router, Route, browserHistory} from 'react-router';
import routes from './routes';
import {Extensions} from './tools/Extensions';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <Router history={browserHistory} routes={routes}/>, document.getElementById("content"),Extensions.init()
  );