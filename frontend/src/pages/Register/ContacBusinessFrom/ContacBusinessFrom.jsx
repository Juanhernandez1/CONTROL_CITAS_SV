/* eslint-disable unicorn/filename-case */
import { useContext } from 'react';
import { Form, Input, Button, Select } from 'antd';

import './ContacBusinessFrom.css';
import { GlobalContext } from '../../../context/GlobalState';

const ContacBusinessFrom = props => {
  const { user } = useContext(GlobalContext);

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 20 },
      sm: { span: 12 }
    }
  };

  const validateMessages = {
    required: '${label} es Requerido!',
    types: {
      email: '${label} no es valido!'
    }
  };

  const [form] = Form.useForm();

  const onCheck = async () => {
    try {
      const values = await form.validateFields();

      const objBusiness = {
        idbusiness: null,
        uuidbusiness: null,
        businessname: values.businessname,
        description: values.description,
        imageurlbusiness: values.imageurlbusiness,
        iduser: user.iduser,
        state: 'Activo'
      };
      const objAddres = {
        idbusiness: null,
        department: values.department,
        address: values.address,
        addressurl: values.addressurl
      };
      const objContact = {
        idbusiness: null,
        phone: values.phone,
        email: values.email,
        fabookurl: values.fabookurl,
        whatsappurl: `https://wa.me/503${values.whatsappurl}`,
        twitterurl: values.twitterurl
      };

      console.log('Success Business:', { objBusiness, objAddres, objContact });

      props.setCurrent(props.current + 1);

      props.setObjBusiness({ objBusiness, objAddres, objContact });
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return (
    <>
      <Form
        {...formItemLayout}
        name="Business"
        initialValues={{
          remember: true
        }}
        form={form}
        className="user-from"
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Nombre"
          name="businessname"
          rules={[
            {
              required: true,
              message: 'Por Favor Ingres El Nombre de se Negocio'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descripcion"
          name="description"
          rules={[
            {
              required: true,
              message: 'Por Favor Ingres una Descripcion sobre su Negocio'
            }
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Imagen"
          name="imageurlbusiness"
          rules={[
            {
              required: true,
              message:
                'Por Favor Ingres una Url de su Imagen, Proximamenete podra cagar directamente'
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
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Facebook"
          name="fabookurl"
          rules={[
            {
              required: true,
              message: 'Por Favor Url para redirecionar al Facebook de su Negocio'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Whatsapp"
          name="whatsappurl"
          rules={[
            {
              required: true,
              message: 'Por Favor su Numero Whatsapp sin espacio o gion'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Twitter"
          name="twitterurl"
          rules={[
            {
              required: true,
              message: 'Por Favor Url para redirecionar al Twitter de su Negocio'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Departamento"
          name="department"
          rules={[
            {
              required: true,
              message: 'Por Favor seleciones el Departamento de su Direccion'
            }
          ]}
        >
          <Select>
            <Select.Option value="Santa Ana">Santa Ana</Select.Option>
            <Select.Option value="Ahuachapán">Ahuachapán</Select.Option>
            <Select.Option value="Sonsonate">Sonsonate</Select.Option>
            <Select.Option value="La Libertad">La Libertad</Select.Option>
            <Select.Option value="Chalatenango">Chalatenango</Select.Option>
            <Select.Option value="San Salvador">San Salvador</Select.Option>
            <Select.Option value="Cuscatlán">Cuscatlán</Select.Option>
            <Select.Option value="Usulután">Usulután</Select.Option>
            <Select.Option value="La Paz">La Paz</Select.Option>
            <Select.Option value="San Vicente">San Vicente</Select.Option>
            <Select.Option value="San Miguel">San Miguel</Select.Option>
            <Select.Option value="Cabañas">Cabañas</Select.Option>
            <Select.Option value="Morazán">Morazán</Select.Option>
            <Select.Option value="La Unión">La Unión</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Direccion"
          name="address"
          rules={[
            {
              required: true,
              message: 'Por Favor la Direccion de su Negocio'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Direccion Url"
          name="addressurl"
          rules={[
            {
              required: true,
              message:
                'Puede Colocar La Url proporcionada por Google Maps para mostrar a nuestros usuarios su ubicacion'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item style={{ display: 'none' }}>
          <Button ref={props.refObjBusiness} type="primary" onClick={onCheck}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ContacBusinessFrom;
