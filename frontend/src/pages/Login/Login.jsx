import { Form, notification, message, Col, Input, Button, Row, Divider } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';

import './Login.css';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { auth } from '../../config/urls';
import { paths } from '../../config/paths';

import popupTools from 'popup-tools';
import { setCookie } from '../../utils/Cookies';
import { useHistory } from 'react-router';
import { postData } from '../../api/baseClient';

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

const Login = () => {
  const [negociosLogin, setnegociosLogin] = useState(false);
  const { setuserauthenticates, appintmentTime } = useContext(GlobalContext);
  const { push } = useHistory();

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'No Se puede Acceder',
      description: 'Credenciales no validas, verifique su usario y contraseña'
    });
  };

  const openNotificationWithIcon2 = type => {
    notification[type]({
      message: 'No Se puede Acceder',
      description: 'Credenciales no validas, Puede que su usario no pertenesca a algun negocio'
    });
  };

  const onFinish = values => {
    console.log('Success:', values);
    (async () => {
      console.log('ejecutando');
      try {
        const { data, status } = await postData(
          !negociosLogin ? auth.LoginBusiness('N') : auth.Login,
          values
        );
        if (status === 202) {
          console.log(data);
          setuserauthenticates(data.data);
          setCookie(
            'authControlCitas',
            JSON.stringify({
              ...data,
              data: { id: data.data.iduser }
            }),
            1
          );

          !negociosLogin
            ? push('/')
            : push(
                appintmentTime.hasOwnProperty('idbusiness')
                  ? paths.appointmentDetail(appintmentTime.idbusiness)
                  : '/'
              );
        } else {
          !negociosLogin ? openNotificationWithIcon2('error') : openNotificationWithIcon('error');
        }
      } catch (error) {
        !negociosLogin ? openNotificationWithIcon2('error') : openNotificationWithIcon('error');
        console.log(error);
      }
    })();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row justify="center" style={{ width: '-webkit-fill-available' }}>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ width: '-webkit-fill-available' }}
      >
        <Row className="row-altura" align="bottom">
          <Form.Item>
            <Button
              type="link"
              onClick={() => {
                setnegociosLogin(!negociosLogin);
              }}
            >
              {!negociosLogin ? 'Negocios' : 'Usuario'}
            </Button>
          </Form.Item>
        </Row>

        <Divider style={{ margin: '10px' }} />
        <Form.Item
          label="Usuario"
          name="username"
          rules={[
            {
              required: true,
              message: 'Por Favor Ingres Su Usiario'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Contraseña"
          name="password"
          rules={[
            {
              required: true,
              message: 'Por Favor Ingrese Su Contraseña'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Row justify="space-between">
          <Row justify="end" align="bottom">
            <Button type="link" block>
              Olvide Mi Contraseña
            </Button>
          </Row>
          <Row align="middle">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Ingresar
              </Button>
            </Form.Item>
          </Row>
        </Row>

        <Divider style={{ margin: '12px' }} />

        <Row justify="space-between">
          {!negociosLogin && (
            <Col>
              <h3>Otras Formas:</h3>
              <div className="icons-list">
                <Button
                  type="link"
                  icon={<FcGoogle style={{ fontSize: '25px', marginLeft: '10px' }} />}
                  onClick={() => {
                    popupTools.popup(auth.AuthGoogle, 'Google Connect', {}, function (err, user) {
                      if (err) {
                        console.log(err.message);
                      } else {
                        console.log(user);
                        setuserauthenticates(user.data);
                        setCookie(
                          'authControlCitas',
                          JSON.stringify({
                            ...user,
                            data: { id: user.data.iduser }
                          }),
                          1
                        );

                        push(
                          appintmentTime.hasOwnProperty('idbusiness')
                            ? paths.appointmentDetail(appintmentTime.idbusiness)
                            : '/'
                        );
                      }
                    });
                  }}
                />

                <Button
                  type="link"
                  icon={
                    <FaFacebookSquare
                      style={{ fontSize: '25px', marginLeft: '10px', color: '#4267B2' }}
                    />
                  }
                  onClick={() => {
                    popupTools.popup(
                      auth.AuthFacebook,
                      'Facebook Connect',
                      {},
                      function (err, user) {
                        if (err) {
                          console.log(err.message);
                        } else {
                          console.log(user);
                          setuserauthenticates(user.data);
                          setCookie(
                            'authControlCitas',
                            JSON.stringify({
                              ...user,
                              data: { id: user.data.iduser }
                            }),
                            1
                          );

                          push(
                            appintmentTime.hasOwnProperty('idbusiness')
                              ? paths.appointmentDetail(appintmentTime.idbusiness)
                              : '/'
                          );
                        }
                      }
                    );
                  }}
                />
              </div>
            </Col>
          )}
          <Col style={{ width: negociosLogin ? '100%' : 'auto' }}>
            <Row justify="end" align="bottom">
              <Button
                type="link"
                onClick={() => {
                  push(paths.register(negociosLogin ? 'N' : 'C'));
                }}
              >
                Registrarse
              </Button>
            </Row>
          </Col>
        </Row>
      </Form>
    </Row>
  );
};

export default Login;
//   'https://citasparatunegocio.herokuapp.com/connect/google',
