import { HomeOutlined, LoginOutlined, LogoutOutlined, StockOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { paths } from '../../config/paths';
import { GlobalContext } from '../../context/GlobalState';
import './Header.css';

const { Item } = Menu;

const Header = ({ hasLogo = false }) => {
  const { setBusinessName, user } = useContext(GlobalContext);
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
        {isEmpty(user) && (
          <Item key="3" icon={<LoginOutlined />}>
            <Link to={paths.login}>Login</Link>
          </Item>
        )}
        {!isEmpty(user) && (
          <Item key="4" icon={<LogoutOutlined />}>
            {`${user.name} ${user.lastname}`}
          </Item>
        )}
      </Menu>
    </Layout.Header>
  );
};

export default Header;
