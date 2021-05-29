import {
  UserOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  StockOutlined
} from '@ant-design/icons';

import { Layout, Button, Menu } from 'antd';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { paths } from '../../config/paths';
import { GlobalContext } from '../../context/GlobalState';
import './Header.css';
import { setCookie } from '../../utils/Cookies';

const { Item, SubMenu, ItemGroup } = Menu;

const Header = ({ hasLogo = false }) => {
  const { setBusinessName, user } = useContext(GlobalContext);

  const className = hasLogo ? 'header header-space-between' : 'header header-flex-end';
  const { push } = useHistory();

  const handleMenuItem = ({ key }) => {
    if (key === '2') {
      setBusinessName('');
      push(
        user.access.type === 'N'
          ? paths.businessDetail(user.business.idbusiness)
          : paths.businessResult
      );
    }
  };

  return (
    <Layout.Header className={className}>
      {hasLogo && (
        <div>
          <img className="imgLogo" src="https://donejs.com/static/img/react-logo.png" alt="Logo" />
        </div>
      )}
      <Menu className="evitarErrorHerde" theme="dark" mode="horizontal" onClick={handleMenuItem}>
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
          <SubMenu key="SubMenu" icon={<UserOutlined />} title={`${user.name} ${user.lastname}`}>
            <ItemGroup key="GroupMenu">
              <Item key="GroupMenu1">
                <Button
                  icon={<UserOutlined />}
                  onClick={() => {
                    console.log(user);
                    user.access.type === 'N' && paths.businessDetail(user.business.idbusiness);
                  }}
                  type="link"
                  style={{ color: 'white' }}
                >
                  Perfil
                </Button>
              </Item>
              <Item key="GroupMenu2">
                <Button
                  icon={<LogoutOutlined />}
                  onClick={() => {
                    setCookie('authControlCitas', JSON.stringify({}), 1);

                    if (window.location.pathname !== '/login') {
                      push('/');
                    }
                    window.location.reload();
                  }}
                  type="link"
                  style={{ color: 'white' }}
                >
                  Salir
                </Button>
              </Item>
            </ItemGroup>
          </SubMenu>
        )}
      </Menu>
    </Layout.Header>
  );
};

export default Header;
