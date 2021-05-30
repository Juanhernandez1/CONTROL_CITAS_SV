import {
  UserOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  StockOutlined
} from '@ant-design/icons';

import { Layout, Button, Menu } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { paths } from '../../config/paths';
import { GlobalContext } from '../../context/GlobalState';
import './Header.css';
import { setCookie } from '../../utils/Cookies';

const { Item, SubMenu, ItemGroup } = Menu;

const Header = ({ hasLogo = false }) => {
  const { setBusinessName, user, AccesType } = useContext(GlobalContext);
  console.log('header', AccesType);
  const className = hasLogo ? 'header header-space-between' : 'header header-flex-end';
  const { push } = useHistory();

  const handleMenuItem = ({ key }) => {
    if (key === '2') {
      setBusinessName('');

      push(
        AccesType === 'N'
          ? paths.businessDetail(
              user.hasOwnProperty('idbusiness') ? user.idbusiness : user.business.idbusiness
            )
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
          <Link
            to={() => {
              return AccesType === 'N'
                ? paths.businessDetail(
                    user.hasOwnProperty('idbusiness') ? user.idbusiness : user.business.idbusiness
                  )
                : paths.home;
            }}
          >
            Inicio
          </Link>
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

                    const AccesType = isEmpty(user)
                      ? 'C'
                      : user.hasOwnProperty('type')
                      ? user.type
                      : user.hasOwnProperty('access')
                      ? user.access.type
                      : 'C';

                    AccesType === 'N' &&
                      push(
                        paths.businessDetail(
                          user.hasOwnProperty('idbusiness')
                            ? user.idbusiness
                            : user.business.idbusiness
                        )
                      );
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
                      setCookie('authControlCitas', JSON.stringify({}), 1);
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
