/* eslint-disable unicorn/filename-case */
import { useContext } from 'react';
import { Form, Input, Button, Select, Tooltip, InputNumber, TimePicker } from 'antd';

import './SettingBusinessForm.css';
import { GlobalContext } from '../../../context/GlobalState';

const SettingBusinessForm = props => {
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
      email: '${label} no es valido!',
      number: '${label} No es un Numero Valido!'
    },
    number: {
      range: '${label} Valor fuera de Rango: ${min} a ${max}'
    }
  };

  const [form] = Form.useForm();

  const onCheck = async () => {
    try {
      const values = await form.validateFields();

      const obtSetting = {
        idbusiness: null,
        starttime: values.starttime.format('LT'),
        timeends: values.timeends.format('LT'),
        nsa: values.nsa,
        ta: values.ta,
        tba: values.tba,
        ad: values.ad,
        workingdays: 'Habiles',
        lunchtime: 1,
        startimelunch: '12:00 PM'
      };

      console.log('Success Business:', { ...props.ObjBusiness, obtSetting });

      props.handledFinis({ ...props.ObjBusiness, obtSetting });
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return (
    <>
      <Form
        {...formItemLayout}
        name="BusinessSetting"
        initialValues={{
          remember: true
        }}
        form={form}
        className="user-from"
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Inicia"
          name="starttime"
          rules={[
            {
              required: true,
              message: 'Por Favor Ingres la hora en la cual inicia Labores'
            }
          ]}
        >
          <TimePicker showNow={false} use12Hours format="h:mm A" />
        </Form.Item>
        <Form.Item
          label="Finaliza"
          name="timeends"
          rules={[
            {
              required: true,
              message: 'Por Favor Ingres la hora en la cual finaliza Labores'
            }
          ]}
        >
          <TimePicker showNow={false} use12Hours format="h:mm A" />
        </Form.Item>
        <Form.Item
          label="N° de Servicios"
          name="nsa"
          tooltip={
            <Tooltip placement="right">
              <span>Por Favor el Numero de servicios permitidos por cita</span>
            </Tooltip>
          }
          rules={[
            {
              required: true,
              message: 'Por Favor el numero de servicios Permitidos por cita'
            }
          ]}
        >
          <InputNumber min={0} style={{ width: '134px' }} />
        </Form.Item>

        <Form.Item
          label="Tiempo por Cita"
          name="ta"
          tooltip={
            <Tooltip placement="right">
              <span>
                Por Favor ingrese tiempo Estimado por cita Ejemplo: 1 es igual a 1 hora o 0.30 es
                igual a 30 minutos
              </span>
            </Tooltip>
          }
          rules={[
            {
              required: true,
              message: 'Por Favor ingrese tiempo Estimado por cita'
            }
          ]}
        >
          <InputNumber min={0} style={{ width: '134px' }} />
        </Form.Item>

        <Form.Item
          label="Tiempo entre Cita"
          name="tba"
          tooltip={
            <Tooltip placement="right">
              <span>
                Por Favor ingrese tiempo entre cita Ejemplo: 1 es igual a 1 minuto maximo puede ser
                30 minutos minutos
              </span>
            </Tooltip>
          }
          rules={[
            {
              required: true,
              type: 'number',
              min: 1,
              max: 30,
              message: 'Por Favor ingrese tiempo Estimado por cita'
            }
          ]}
        >
          <InputNumber min={0} max={30} style={{ width: '134px' }} />
        </Form.Item>

        <Form.Item
          label="Citas por Dia"
          name="ad"
          tooltip={
            <Tooltip placement="right">
              <span>Por Favor el Numero de Citas a Atender por Dia</span>
            </Tooltip>
          }
          rules={[
            {
              required: true,
              message: 'Por Favor el Numero de Citas a Atender por Dia'
            }
          ]}
        >
          <InputNumber min={0} style={{ width: '134px' }} />
        </Form.Item>

        <Form.Item style={{ display: 'none' }}>
          <Button ref={props.refObjBusinessSetting} type="primary" onClick={onCheck}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SettingBusinessForm;
