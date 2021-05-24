import { Button, Row, Col, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { useContext } from 'react';
import { isEmpty } from 'lodash';
import { GlobalContext } from '../../context/GlobalState';

import './AppointmentDetail.css';
import ServicesTable from '../../components/ServicesTable';

const AppointmentDetail = () => {
  const { businessSelected, user } = useContext(GlobalContext);

  const handleAppointmentButton = () => {};
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
            <Row justify="start">
              <Title level={4}>{`${user.name} ${user.lastname}`}</Title>
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
              <Title level={5}>25/05/2021</Title>
            </Row>
          </Col>
          <Col className="Col-DateTime-Root-AppointmentDetail">
            <Row justify="end">
              <Col>
                <Row justify="center">
                  <Title level={4}>Hora</Title>
                </Row>
                <Row justify="center">
                  <Title level={5}>07:25 AM</Title>
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
                <ServicesTable />
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
                  <Title level={4}>$ 55.00</Title>
                </Row>
                <Row justify="center" style={{ marginTop: '25px' }}>
                  <Button
                    className="booking-button"
                    disabled={isEmpty(businessSelected)}
                    type="primary"
                    onClick={handleAppointmentButton}
                  >
                    Reservar cita
                  </Button>
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
