import { HomeOutlined, LoginOutlined, LogoutOutlined, StockOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { paths } from '../../config/paths';
import { GlobalContext } from '../../context/GlobalState';
import './Header.css';

const { Item } = Menu;
const isLoggedIn = false;

const Header = ({ hasLogo = false }) => {
  const { setBusinessName } = useContext(GlobalContext);
  const className = hasLogo ? 'header header-space-between' : 'header header-flex-end';
  const { push } = useHistory();

  const handleMenuItem = ({ key }) => {
    if (key === '2') {
      setBusinessName('');
      push(paths.businessResult);
    }
  };

  return (
    <Layout.Header className={className}>
      {hasLogo && (
        <div className="header__logo-container">
          <img src="https://donejs.com/static/img/react-logo.png" alt="Logo" />
        </div>
      )}
      <Menu theme="dark" mode="horizontal" onClick={handleMenuItem}>
        <Item key="1" icon={<HomeOutlined />}>
          <Link to={paths.home}>Inicio</Link>
        </Item>
        <Item key="2" icon={<StockOutlined />}>
          Negocios
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
