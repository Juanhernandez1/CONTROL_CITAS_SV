import { Form, Input, Button, Row, Divider } from 'antd';

import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';

import './Login.css';
import { useState } from 'react';

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
        {!negociosLogin && (
          <Row justify="start">
            <h3>Otras Formas:</h3>
            <div className="icons-list">
              <Button
                type="link"
                icon={<FcGoogle style={{ fontSize: '25px', marginLeft: '10px' }} />}
              />
              <Button
                type="link"
                icon={
                  <FaFacebookSquare
                    style={{ fontSize: '25px', marginLeft: '10px', color: '#4267B2' }}
                  />
                }
              />
            </div>
          </Row>
        )}
      </Form>
    </Row>
  );
};

export default Login;
