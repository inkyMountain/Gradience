import React from 'react';
import './App.scss';
import pages from './pages/index';
import {Layout, Content, Aside, Header, Footer} from './lib/Layout/Layout';
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
        <Header className={'header'}>
          Gradience UI
        </Header>

        <Content className={'main-content'}>
          <Layout>
            <Aside className="directories">
              <ul>{links}</ul>
            </Aside>
            <Content style={{'overflow': 'initial'}}>
              <Switch>
                {routes}
                <Route path={'/'} component={pages.icon}/>
              </Switch>
            </Content>
          </Layout>
        </Content>

        <Footer className={'footer'}>
          Footer
        </Footer>
      </Layout>
    </Router>
  );
};

export {App};
