import { Layout as LayoutAnt } from 'antd';
import React from 'react';

import Header from '../components/Header';
import './Layout.css';

const { Content } = LayoutAnt;

const Layout = ({ children }) => {
  return (
    <LayoutAnt>
      <Header />
      <Content className="content">
        <div className="site-layout-content">{children}</div>
      </Content>
    </LayoutAnt>
  );
};

export default Layout;
