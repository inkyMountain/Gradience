import React from 'react';
import './App.scss';
import pages from './pages/index';
import {Layout, Content, Aside, Header} from './lib/Layout/Layout';
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
      <Layout className={'page-container'}>
        <Header className={'global-header'}>
          Gradience UI
        </Header>

        <Content className={'global-main'}>
          <Layout>
            <Aside className="directories">
              <ul>{links}</ul>
            </Aside>
            <Content>
              <Switch>
                {routes}
                <Route path={'/'} component={pages.icon}/>
              </Switch>
            </Content>
          </Layout>
        </Content>

      </Layout>
    </Router>
  );
};

export {App};
