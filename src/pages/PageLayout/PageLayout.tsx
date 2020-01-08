import './PageLayout.scss';
import React from 'react';
import Layout from '../../lib/Layout/Layout';
import Aside from '../../lib/Layout/Aside';
import Footer from '../../lib/Layout/Footer';
import Content from '../../lib/Layout/Content';
import Header from '../../lib/Layout/Header';

export interface PageLayoutProps extends React.PropsWithChildren<any> {

}

const PageLayout: React.FC<PageLayoutProps> = props => {
  return (
    <div className="page-layout">
      <div className="example">
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>

      <div className="example">
        <Layout>
          <Aside>Aside</Aside>
          <Content>Content</Content>
        </Layout>
      </div>

      <div className="example">
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Aside>Aside</Aside>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>

      <div className="example">
        <Layout>
          <Aside>Aside</Aside>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default PageLayout;
