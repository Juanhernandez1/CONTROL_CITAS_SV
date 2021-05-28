/* eslint-disable unicorn/filename-case */
import { useState } from 'react';
import { Form, Input, Button } from 'antd';

import './UserFrom.css';

const UserFrom = props => {
  const onFinish = values => {
    const objAccess = {
      iduser: null,
      username: values.username,
      password: values.password,
      type: props.registerUserType
    };
    console.log('success objAccess:', objAccess);
    delete values['password'];
    delete values['username'];
    delete values['confirm'];

    const objUser = {
      iduser: null,
      uuiduser: null,
      name: values.name,
      lastname: values.lastname,
      phone: values.phone,
      email: values.email,
      uuidfacebook: null,
      uuidgoogle: null,
      state: 'Activo'
    };
    console.log('Success objUser:', objUser);

    props.handledFinis({
      objUser,
      objAccess
    });
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 10 }
    }
  };

  return (
    <>
      <Form {...formItemLayout} onFinish={onFinish} className="user-from">
        <Form.Item
          label="Nombre"
          name="name"
          rules={[
            {
              required: true,
              message: 'Por Favor Ingres Su Nombre'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Apellido"
          name="lastname"
          rules={[
            {
              required: true,
              message: 'Por Favor Ingres Su Apellido'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Telefono"
          name="phone"
          rules={[
            {
              required: true,
              message: 'Por Favor Ingres Su Numero de Telefono'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Por Favor Ingres Su Numero de Telefono'
            }
          ]}
        >
          <Input />
        </Form.Item>
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
        <Form.Item
          name="confirm"
          label={`Confirmar \nContraseña`}
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('La contrasela Ingresada no es Distita!'));
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item style={{ display: 'none' }}>
          <Button ref={props.refObjUser} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UserFrom;
