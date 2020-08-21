import React from 'react';
import {HashRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import './App.scss';
import pages from './pages/index';
import {Layout, Content, Aside, Header, Footer} from './lib/Layout/Layout';
import GuardedRoute from './pages/components/GuardedRoute/GuardedRoute';
// import {Button, Icon} from '../dist/lib';

const navLinks = Object.keys(pages).reduce((previous, current) => {
  const directory = (
    <NavLink
      className="directory"
      to={`/${current}`}
      key={current}
      draggable={false}
    >
      {current}
    </NavLink>
  );
  return previous.concat(directory);
}, [] as Array<React.ReactNode>);

const routes = Object.entries(pages).reduce((previous, current) => {
  const [name, component] = current;
  const route = <Route path={`/${name}`} component={component} key={name}/>;
  return [...previous, route];
}, []);

const App: React.FunctionComponent = () => {
  const aside = (
    <Aside className="directories">
      {/*<Button>測試</Button>*/}
      {/*<Icon name={'alipay'}/>*/}
      <Layout>
        <Header className="aside-header">
          <h1 className="framework-name">Animal Crossing</h1>
          <div className="introduction">React UI Framework</div>
        </Header>
        <Content>
          <ul>{navLinks}</ul>
        </Content>
        <Footer className={'aside-footer'}>Developed By CYT</Footer>
      </Layout>
    </Aside>
  );

  return (
    <Router>
      <GuardedRoute>
        <Layout className="page-container">
          {window.innerWidth >= 600 && aside}

          <Content className="global-main">
            <Switch>
              {routes}
              <Route path="/" component={pages.icon}/>
            </Switch>
          </Content>
        </Layout>
      </GuardedRoute>
    </Router>
  );
};

export {App};
