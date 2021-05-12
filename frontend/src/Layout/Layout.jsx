import { BookOutlined, CarryOutOutlined } from '@ant-design/icons';
import { Layout as LayoutAnt, Menu } from 'antd';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { paths } from '../config/paths';
import Header from '../components/Header';

import './Layout.css';

const { Content, Sider } = LayoutAnt;

export const Layout = ({ children }) => {
  const { id } = useParams();

  return (
    <LayoutAnt>
      <Sider>
        <div className="logo-container">
          <div className="logo-image-container">
            <img src="https://donejs.com/static/img/react-logo.png" alt="Logo" />
          </div>
        </div>
        <Menu mode="vertical-left" theme="dark">
          <Menu.Item key="1" icon={<CarryOutOutlined />}>
            Servicios
          </Menu.Item>
          <Menu.Item key="2" icon={<BookOutlined />}>
            <Link to={paths.appointmentBook(id)}>Libro de Citas</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <LayoutAnt>
        <Header />
        <Content className="content">
          <div className="site-layout-content">{children}</div>
        </Content>
      </LayoutAnt>
    </LayoutAnt>
  );
};

export const LayoutHeader = ({ children }) => {
  return (
    <LayoutAnt>
      <Header hasLogo />
      <Content className="content">
        <div className="site-layout-content">{children}</div>
      </Content>
    </LayoutAnt>
  );
};
