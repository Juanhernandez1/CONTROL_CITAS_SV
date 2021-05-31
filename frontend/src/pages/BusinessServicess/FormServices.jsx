/* eslint-disable unicorn/filename-case */
import { Form, Input, Button, InputNumber } from 'antd';
import { useParams } from 'react-router';

const FormServices = props => {
  const [form] = Form.useForm();
  const { id } = useParams();

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

  const onCheck = async () => {
    try {
      const values = await form.validateFields();

      const objServices = {
        idservices: null,
        idbusiness: id,
        servicename: values.servicename,
        description: values.description,
        imageurl: values.imageurl,
        price: values.price,
        state: 'Activo'
      };
      props.handledFinis(objServices);
      setTimeout(() => {
        form.resetFields();
      }, 2000);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  function onChange(value) {
    console.log('changed', value);
  }

  return (
    <>
      <Form
        {...formItemLayout}
        name="User"
        initialValues={{
          remember: true
        }}
        form={form}
      >
        <Form.Item
          label="Nombre"
          name="servicename"
          rules={[
            {
              required: true,
              message: 'Por Favor Ingres El Nombre del Servicio'
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
              message: 'Por Favor Ingres Una Descripcion de Su servicio'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Imagen"
          name="imageurl"
          rules={[
            {
              required: true,
              message: 'Por Favor Ingres Una Url de la Imagen Que Desea Mostrar'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Precio"
          name="price"
          rules={[
            {
              required: true,
              message: 'Por Favor Ingres El Precio de Su Servicio'
            }
          ]}
        >
          <InputNumber
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            min={1}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item style={{ display: 'none' }}>
          <Button ref={props.refObjservice} type="primary" onClick={onCheck}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormServices;
