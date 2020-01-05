import React from 'react';
import './App.scss';
import pages from './pages/index';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';

const links = Object.keys(pages).reduce((previous, current) => {
  const directory = (
    <Link className="directory" to={`/${current}`} key={Math.random()} draggable={false}>
      {current}
    </Link>
  );
  previous.push(directory);
  return previous;
}, [] as React.ReactNode[]);

const routes = Object.entries(pages).reduce((previous, current) => {
  const [name, component] = current;
  const route = <Route path={`/${name}`} component={component} key={Math.random()}/>;
  return [...previous, route];
}, []);

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <div id="app">
        <aside className="directories">
          <ul>{links}</ul>
        </aside>

        <main className="component-container">
          <Switch>{routes}</Switch>
        </main>
      </div>
    </Router>
  );
};

export {App};
