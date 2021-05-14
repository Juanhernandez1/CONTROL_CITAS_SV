import { Form, message, Input, Button, Row, Divider } from 'antd';

import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';

import './Login.css';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { auth } from '../../config/urls';
import useGetData from '../../hooks/useGetData/useGetData';

import popupTools from 'popup-tools';

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 12
  }
};

const Login = () => {
  const [negociosLogin, setnegociosLogin] = useState(false);
  const { setuserauthenticates, user } = useContext(GlobalContext);
  const [UrlLogin, setUrlLogin] = useState('');
  const [isLastFiveDaysLoading, lastFiveDays] = useGetData(UrlLogin, errorMessage => {
    message.error(errorMessage);
  });

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const getCookie = (cname, calllback) => {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      console.log(c);
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  const onCode = (code, params) => {
    console.log('wooooo a code', code);
    console.log('alright! the URLSearchParams interface from the popup url', params);
  };
  const onClose = () => console.log('closed!');

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
        {!negociosLogin && (
          <Row justify="start">
            <h3>Otras Formas:</h3>
            <div className="icons-list">
              <Button
                type="link"
                icon={<FcGoogle style={{ fontSize: '25px', marginLeft: '10px' }} />}
                onClick={() => {
                  window.open(
                    'https://citasparatunegocio.herokuapp.com/connect/google',
                    '_blank',
                    'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400'
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
                        alert(err.message);
                      } else {
                        // save the returned user in localStorage/cookie or something
                        console.log(user);
                      }
                    }
                  );
                }}
              />
            </div>
          </Row>
        )}
      </Form>
    </Row>
  );
};

export default Login;
