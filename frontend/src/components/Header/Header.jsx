import { Layout, Menu } from 'antd';
import React from 'react';
import './Header.css';

const { Item } = Menu;
const isLoggedIn = false;

const Header = () => {
  return (
    <Layout.Header className="header">
      <div className="logo-container">
        <img src="https://donejs.com/static/img/react-logo.png" alt="Logo" />
      </div>
      <Menu theme="dark" mode="horizontal">
        <Item key="1">Inicio</Item>
        <Item key="2">Negocios</Item>
        {!isLoggedIn && <Item key="3">Login</Item>}
      </Menu>
      {isLoggedIn && <div>Log out</div>}
    </Layout.Header>
  );
};

export default Header;
