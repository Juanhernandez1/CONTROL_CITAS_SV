import { BookOutlined, CarryOutOutlined, ProfileOutlined } from '@ant-design/icons';
import { Layout as LayoutAnt, Menu } from 'antd';
import React, { useContext, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { business as getBusinessPath } from '../config/urls';

import { paths } from '../config/paths';
import Header from '../components/Header';

import './Layout.css';
import { GlobalContext } from '../context/GlobalState';
import { getData } from '../api/baseClient';

const { Content, Sider } = LayoutAnt;

export const Layout = ({ children }) => {
  const { id } = useParams();
  const { push } = useHistory();
  const { businessSelected, setBusinessSelected } = useContext(GlobalContext);

  useEffect(() => {
    !businessSelected.hasOwnProperty('idbusiness') &&
      (async () => {
        const path = getBusinessPath.getBusinessPk(id);
        try {
          const { data, status } = await getData(path);
          if (status === 200) setBusinessSelected(data.data);
          else push('/');
        } catch (error) {
          push('/');
          console.log(error);
        }
      })();
  }, [businessSelected]);

  return (
    <LayoutAnt>
      <Sider>
        <div className="logo-container">
          <div className="logo-image-container">
            <img src="https://donejs.com/static/img/react-logo.png" alt="Logo" />
          </div>
        </div>
        <Menu mode="vertical-left" theme="dark">
          <Menu.Item key="1" icon={<ProfileOutlined />}>
            <Link to={paths.businessDetail(id)}>
              {window.location.pathname === `/business-detail/${id}`
                ? 'Informacion'
                : businessSelected.businessname}
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<CarryOutOutlined />}>
            <Link to={paths.businessServices(id)}>Servicios</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BookOutlined />}>
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
        <div
          className="site-layout-content"
          style={{ width: window.location.pathname === '/login' ? '45%' : '80%' }}
        >
          {children}
        </div>
      </Content>
    </LayoutAnt>
  );
};
