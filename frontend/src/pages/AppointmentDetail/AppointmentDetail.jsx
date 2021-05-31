import { Button, message, notification, Spin, Row, Col, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { useContext, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { GlobalContext } from '../../context/GlobalState';

import './AppointmentDetail.css';
import ServicesTable from '../../components/ServicesTable';
import { useHistory, useParams } from 'react-router';
import { paths } from '../../config/paths';
import { postData, getData } from '../../api/baseClient';
import { business } from '../../config/urls';

const AppointmentDetail = () => {
  const [price, setPrice] = useState(0);

  const { businessSelected, user, appintmentTime, detail, AccesType } = useContext(GlobalContext);
  const { push } = useHistory();
  const { id } = useParams();

  const [Detail, setDetail] = useState({});

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Completado',
      description: 'Resevacion Completa'
    });
  };

  console.log(appintmentTime);
  const handleAppointmentButton = () => {
    const Objappointment = {
      idappointment: null,
      uuidappointment: `${appintmentTime.complemtouuid}-${appintmentTime.fulldate}`,
      iduser: user.iduser,
      idbusiness: appintmentTime.idbusiness,
      dateappointment: {
        day: appintmentTime.day,
        dayName: appintmentTime.dayName,
        hour: appintmentTime.hour,
        minute: appintmentTime.minute,
        month: appintmentTime.month,
        monthName: appintmentTime.monthName,
        time: appintmentTime.time,
        year: appintmentTime.year,
        fulldate: appintmentTime.fulldate
      },
      total: price,
      state: 'C'
    };

    const ArrayDetail = [];

    detail.forEach(element => {
      const Objdetail = {
        iddetails: null,
        idappointment: null,
        idservices: element.idservices,
        price: element.price
      };
      ArrayDetail.push(Objdetail);
    });

    console.log(ArrayDetail, 'cita', Objappointment);

    (async () => {
      const { data, status } = await postData(business.postAppointment, {
        Objappointment,
        ArrayDetail
      });
      if (status) {
        openNotificationWithIcon('success');
        push(paths.appointmentBook(id));
      }
    })();
  };

  useEffect(() => {
    AccesType === 'N' &&
      (async () => {
        const { data, status } = await getData(
          business.getAppointmentBisness(
            id,
            `${appintmentTime.complemtouuid}-${appintmentTime.fulldate.split('/').join('-')}`
          )
        );
        if (status === 200) {
          console.log(data);
          setDetail(data.data);
        }
      })();
    console.log(Detail);
  }, []);

  if (!appintmentTime.hasOwnProperty('fulldate')) {
    push(paths.appointmentBook(id));
  }
  return (
    <Row justify="center">
      <div className="Root-AppointmentDetail">
        <Row justify="center">
          <Col className="Col-Title-Root-AppointmentDetail">
            <Row justify="center">
              <Title level={3}>Detalle de Cita</Title>
            </Row>
          </Col>
          <Col className="Col-UserFullName-Root-AppointmentDetail">
            <Row justify="space-between">
              <Title level={4}>
                {AccesType === 'N' && !isEmpty(Detail)
                  ? `${Detail.AppointmentiduserUser.name} ${Detail.AppointmentiduserUser.lastname}`
                  : `${user.name} ${user.lastname}`}
              </Title>
              {AccesType === 'N' && !isEmpty(Detail) && (
                <Title level={5}>{`Telefono: ${Detail.AppointmentiduserUser.phone}`}</Title>
              )}
            </Row>
          </Col>
        </Row>
        <Divider className="divider" />
        <Row justify="space-around">
          <Col className="Col-DateTime-Root-AppointmentDetail">
            <Row justify="center" className="Col-DateTime-Item-AppointmentDetail">
              <Title level={4}>Fecha</Title>
            </Row>
            <Row justify="center" className="Col-DateTime-Item-AppointmentDetail">
              <Title level={5}>
                {AccesType === 'N' && !isEmpty(Detail)
                  ? `${Detail.dateappointment.fulldate}`
                  : `${appintmentTime.fulldate}`}
              </Title>
            </Row>
          </Col>
          <Col className="Col-DateTime-Root-AppointmentDetail">
            <Row justify="end">
              <Col>
                <Row justify="center">
                  <Title level={4}>Hora</Title>
                </Row>
                <Row justify="center">
                  <Title level={5}>
                    {AccesType === 'N' && !isEmpty(Detail)
                      ? `${Detail.dateappointment.hour}:${Detail.dateappointment.minute} ${Detail.dateappointment.time}`
                      : `${appintmentTime.hour}:${appintmentTime.minute} ${appintmentTime.time}`}
                  </Title>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider className="divider" />
        <Row justify="center">
          <Col className="Col-Table-Root-AppointmentDetail">
            <Row justify="center">
              <Title level={3}>Servicios</Title>
            </Row>
          </Col>
          <Col className="Col-Table-Item-AppointmentDetail">
            <Row justify="center" align="middle" style={{ width: '100%' }}>
              <Col style={{ width: '100%' }}>
                <ServicesTable SetPrice={setPrice} DetailBusinessView={Detail.details} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider className="divider" />
        <Row justify="space-around">
          <Col className="Col-DateTime-Root-AppointmentDetail">
            <Row justify="center" style={{ width: '21.5%' }}>
              <Title level={4}>Precio</Title>
            </Row>
          </Col>
          <Col className="Col-DateTime-Root-AppointmentDetail">
            <Row justify="end">
              <Col>
                <Row justify="center">
                  <Title level={4}>{`$ ${price.toFixed(2)}`}</Title>
                </Row>
                <Row justify="center" style={{ marginTop: '25px' }}>
                  {AccesType === 'C' && (
                    <Button
                      className="booking-button"
                      disabled={isEmpty(businessSelected)}
                      type="primary"
                      onClick={handleAppointmentButton}
                    >
                      Reservar cita
                    </Button>
                  )}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default AppointmentDetail;
