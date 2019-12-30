import React from 'react';
import './App.scss';
import * as pages from './pages/index';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

const App: React.FunctionComponent = () => {
  return <Router>
    <div id="app">
      <aside className="directories">
        <ul>
          <li className="directory">aside</li>
          <li className="directory">aside</li>
          <li className="directory">aside</li>
          <li className="directory">aside</li>
        </ul>
      </aside>

      <main className="component-container">
        <Switch>
          <Route path={'/'} component={pages.PageIcon}/>
        </Switch>
      </main>
    </div>
  </Router>;
};

export {App};
