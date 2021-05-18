import { Form, message, Col, Input, Button, Row, Divider } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';

import './Login.css';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { auth } from '../../config/urls';
import { paths } from '../../config/paths';
import useGetData from '../../hooks/useGetData/useGetData';

import popupTools from 'popup-tools';
import { setCookie } from '../../utils/Cookies';
import { useHistory } from 'react-router';

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

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row justify="center">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ width: '80%' }}
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
                    popupTools.popup(
                      'https://citasparatunegocio.herokuapp.com/connect/google',
                      'Google Connect',
                      {},
                      function (err, user) {
                        if (err) {
                          console.log(err.message);
                        } else {
                          console.log(user);
                          setuserauthenticates(user.data);
                          setCookie('authControlCitas', JSON.stringify(user), 1);
                          sessionStorage.setItem('sesionControlCitas', JSON.stringify(user));

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

                <Button
                  type="link"
                  icon={
                    <FaFacebookSquare
                      style={{ fontSize: '25px', marginLeft: '10px', color: '#4267B2' }}
                    />
                  }
                  onClick={() => {
                    popupTools.popup(
                      'https://citasparatunegocio.herokuapp.com/connect/facebook',
                      'Facebook Connect',
                      {},
                      function (err, user) {
                        if (err) {
                          console.log(err.message);
                        } else {
                          console.log(user);
                          setuserauthenticates(user.data);
                          setCookie('authControlCitas', JSON.stringify(user), 1);
                          sessionStorage.setItem('sesionControlCitas', JSON.stringify(user));

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
              <Button type="link" block>
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
