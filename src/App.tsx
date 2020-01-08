import React from 'react';
import './App.scss';
import pages from './pages/index';
import Aside from './lib/Layout/Aside';
import Content from './lib/Layout/Content';
import Layout from './lib/Layout/Layout';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';

const links = Object.keys(pages).reduce((previous, current) => {
  const directory = (
    <Link className="directory" to={`/${current}`} key={Math.random()} draggable={false}>
      {current}
    </Link>
  );
  return previous.concat(directory);
}, [] as Array<React.ReactNode>);

const routes = Object.entries(pages).reduce((previous, current) => {
  const [name, component] = current;
  const route = <Route path={`/${name}`} component={component} key={name}/>;
  return [...previous, route];
}, []);

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Layout>
        <Aside className="directories">
          <ul>{links}</ul>
        </Aside>

        <Content className="component-container">
          <Switch>
            {routes}
            <Route path={'/'} component={pages.icon}/>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};

export {App};
