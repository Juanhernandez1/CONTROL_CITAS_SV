import { Row, Steps, Button, message, notification } from 'antd';
import { useContext, useEffect, useRef, useState } from 'react';
import UserFrom from './UserFrom';
import './Register.css';
import { GlobalContext } from '../../context/GlobalState';
import { auth, business } from '../../config/urls';
import { postData } from '../../api/baseClient';
import { getCookie, setCookie } from '../../utils/Cookies';
import { useHistory, useParams } from 'react-router';
import ContacBusinessFrom from './ContacBusinessFrom/ContacBusinessFrom';
import SettingBusinessForm from './SettingBusinessForm';
import { paths } from '../../config/paths';

const { Step } = Steps;

const Register = () => {
  const [current, setCurrent] = useState(0);
  const [ObjBusiness, setObjBusiness] = useState({});
  const { setuserauthenticates } = useContext(GlobalContext);

  const refObjUser = useRef();
  const refObjBusiness = useRef();
  const refObjBusinessSetting = useRef();

  const { push } = useHistory();
  const { typeR } = useParams();

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Ocurrio algun error',
      description: 'Puede que el email ya exista'
    });
  };

  const openNotificationWithIconB = type => {
    notification[type]({
      message: 'Ocurrio algun error',
      description: 'Verificar su informacion'
    });
  };

  const next = () => {
    console.log(refObjUser.current);
    refObjUser.current && current === 0 && refObjUser.current.click();
    refObjBusiness.current && current === 1 && refObjBusiness.current.click();
  };

  const prev = () => {
    setCurrent(current > 1 && typeR === 'N' ? current - 1 : current);
  };

  const done = () => {
    if (typeR === 'C') {
      refObjUser.current && refObjUser.current.click();
    }
    if (typeR === 'N') {
      refObjBusinessSetting.current && refObjBusinessSetting.current.click();
    }
  };

  const handledFinis = dataApi => {
    if (current === 0) {
      (async () => {
        console.log('ejecutando', dataApi);
        try {
          const { data, status } = await postData(auth.UserRegister, dataApi);
          if (status === 201) {
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

            if (typeR === 'C' && status === 201) push('/');
          } else {
            openNotificationWithIcon('error');
          }
        } catch (error) {
          openNotificationWithIcon('error');
        }
      })();
    }

    if (typeR === 'N' && current === 2) {
      (async () => {
        console.log('ejecutando', dataApi);

        try {
          const { data, status } = await postData(business.businessCreate, dataApi);
          if (status === 201) {
            console.log(data);
            const { Business } = data;

            const cookiedata = getCookie('authControlCitas');

            setCookie(
              'authControlCitas',
              JSON.stringify({
                ...cookiedata,
                data: { ...cookiedata.data, idbusiness: Business.data.idbusiness }
              }),
              1
            );

            if (Business.success && status === 201)
              push(paths.businessDetail(Business.data.idbusiness));
          } else {
            openNotificationWithIconB('error');
          }
        } catch (error) {
          openNotificationWithIconB('error');
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
          registerUserType={typeR}
          setCurrent={setCurrent}
          current={current}
          handledFinis={handledFinis}
        />
      )
    },
    {
      title: 'Datos de Negocio',
      content: (
        <ContacBusinessFrom
          refObjBusiness={refObjBusiness}
          setCurrent={setCurrent}
          current={current}
          setObjBusiness={setObjBusiness}
        />
      ),
      style: { display: typeR === 'C' ? 'none' : 'auto' }
    },
    {
      title: 'Configuracion de citas',
      content: (
        <SettingBusinessForm
          refObjBusinessSetting={refObjBusinessSetting}
          ObjBusiness={ObjBusiness}
          handledFinis={handledFinis}
        />
      ),
      style: { display: typeR === 'C' ? 'none' : 'auto' }
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
            style={{ margin: '0 8px', display: typeR === 'N' ? 'auto' : 'none' }}
            onClick={() => prev()}
          >
            Atras
          </Button>
        )}
        {(current === steps.length - 1 || typeR === 'C') && (
          <Button type="primary" onClick={done}>
            Aceptar
          </Button>
        )}

        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => next()}
            style={{ display: typeR === 'N' ? 'auto' : 'none' }}
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
