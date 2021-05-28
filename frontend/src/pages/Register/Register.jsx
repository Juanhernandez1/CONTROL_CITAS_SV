import { Row, Steps, Button, message, notification } from 'antd';
import { useContext, useRef, useState } from 'react';
import UserFrom from './UserFrom';
import './Register.css';
import { GlobalContext } from '../../context/GlobalState';
import { auth } from '../../config/urls';
import { postData } from '../../api/baseClient';
import { setCookie } from '../../utils/Cookies';
import { useHistory } from 'react-router';

const { Step } = Steps;

const Register = () => {
  const [current, setCurrent] = useState(0);

  const { setuserauthenticates, registerUserType } = useContext(GlobalContext);
  console.log(registerUserType);
  const refObjUser = useRef();
  const { push } = useHistory();

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Ocurrio algun Error',
      description: 'Puede que El Email ya Exixta'
    });
  };

  const next = () => {
    setCurrent(current + 1);
    refObjUser.current && refObjUser.current.click();
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const done = () => {
    if (registerUserType === 'C') {
      refObjUser.current && refObjUser.current.click();
    }
  };

  const handledFinis = dataApi => {
    if (registerUserType === 'C') {
      (async () => {
        console.log('ejecutando', dataApi);
        try {
          const { data, status } = await postData(auth.UserRegister, dataApi);
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

            if (registerUserType === 'C' && status) push('/');
          } else {
            openNotificationWithIcon('error');
          }
        } catch (error) {
          push('/');
          console.log(error);
        }
      })();
    }
  };

  const steps = [
    {
      title: 'Datos de Usuario ',
      content: (
        <UserFrom
          refObjUser={refObjUser}
          registerUserType={registerUserType}
          handledFinis={handledFinis}
        />
      )
    },
    {
      title: 'Datos de Negocio',
      content: 'Second-content',
      style: { display: registerUserType === 'C' ? 'none' : 'auto' }
    },
    {
      title: 'Configuracion de citas',
      content: 'Last-content',
      style: { display: registerUserType === 'C' ? 'none' : 'auto' }
    }
  ];

  return (
    <Row justify="center" style={{ width: '-webkit-fill-available' }}>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} style={item.style} />
        ))}
      </Steps>
      <div className="steps-content">
        <Row justify="center">{steps[current].content}</Row>
      </div>
      <div className="steps-action">
        {current > 0 && (
          <Button
            style={{ margin: '0 8px', display: registerUserType === 'N' ? 'auto' : 'none' }}
            onClick={() => prev()}
          >
            Atras
          </Button>
        )}
        {(current === steps.length - 1 || registerUserType === 'C') && (
          <Button type="primary" onClick={done}>
            Aceptar
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => next()}
            style={{ display: registerUserType === 'N' ? 'auto' : 'none' }}
          >
            Siguiente
          </Button>
        )}
      </div>
    </Row>
  );
};

export default Register;
//   'https://citasparatunegocio.herokuapp.com/connect/google',
