import { HomeOutlined, LoginOutlined, LogoutOutlined, StockOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { paths } from '../../config/paths';
import './Header.css';

const { Item } = Menu;
const isLoggedIn = false;

const Header = ({ hasLogo = false }) => {
  const className = hasLogo ? 'header header-space-between' : 'header header-flex-end';

  return (
    <Layout.Header className={className}>
      {hasLogo && (
        <div className="header__logo-container">
          <img src="https://donejs.com/static/img/react-logo.png" alt="Logo" />
        </div>
      )}
      <Menu theme="dark" mode="horizontal">
        <Item key="1" icon={<HomeOutlined />}>
          <Link to={paths.home}>Inicio</Link>
        </Item>
        <Item key="2" icon={<StockOutlined />}>
          <Link to={paths.businessResult}> Negocios </Link>
        </Item>
        {!isLoggedIn && (
          <Item key="3" icon={<LoginOutlined />}>
            Login
          </Item>
        )}
        {isLoggedIn && (
          <Item key="4" icon={<LogoutOutlined />}>
            Log out
          </Item>
        )}
      </Menu>
    </Layout.Header>
  );
};

export default Header;
