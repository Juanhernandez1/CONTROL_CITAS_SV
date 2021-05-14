import { Button, message, Row, Col, Spin, Typography } from 'antd';
import { isEmpty } from 'lodash';
import React, { useContext, useState } from 'react';

import { business } from '../../config/urls';
import useGetBusinessResolveSetting from '../../hooks/useGetBusinessResolveSetting';
import Table from '../../components/AvailabilityTable';
import './AppointmentBook.css';
import { useHistory, useParams } from 'react-router';
import { paths } from '../../config/paths';
import { GlobalContext } from '../../context/GlobalState';

const { Title, Text } = Typography;

const AppointmentBook = () => {
  const [dateSelected, setDateSelected] = useState('');
  const [timeSelected, setTimeSelected] = useState('');
  const [dateDisplayed, setDateDisplayed] = useState('');
  const { appintmentTime, setAppointmentTime } = useContext(GlobalContext);
  const [isLastFiveDaysLoading, lastFiveDays] = useGetBusinessResolveSetting(
    business.lastFiveDays,
    errorMessage => {
      message.error(errorMessage);
    }
  );

  const { push } = useHistory();
  const { id } = useParams();

  const handleDateSelection = (date = '') => {
    setAppointmentTime(date);
    setDateSelected(date.fulldate.split('/').join('-'));
    setDateDisplayed(date.fulldate);
    setTimeSelected('');
  };

  const handleTimeSelection = objtime => {
    console.log(objtime);
    const ObjAppointmentTime = { ...appintmentTime, ...objtime.obtHora };
    setAppointmentTime(ObjAppointmentTime);
    setTimeSelected(objtime.time);
  };

  const handleBookingButton = () => {
    console.log(appintmentTime);
    push(paths.appointmentDetail(id));
  };

  return (
    <>
      <Row justify="center">
        <Title level={2}>Libro de Citas</Title>
      </Row>
      <Row>
        <Title level={3}>Seleccione la fecha: </Title>
      </Row>
      <Row justify="space-around">
        {isLastFiveDaysLoading && <Spin />}
        {lastFiveDays &&
          lastFiveDays.map(element => (
            <Col style={{ textAlign: 'center' }} key={element.fulldate}>
              <h3>{element.dayName}</h3>
              <Button key={element.fulldate} onClick={() => handleDateSelection(element)}>
                {element.fulldate}
              </Button>
            </Col>
          ))}
      </Row>
      <Row justify="center" className="table-container">
        <Table
          className="time-table"
          dateSelected={dateSelected}
          handleTimeSelection={handleTimeSelection}
        />
      </Row>
      <Row justify="end" align="middle">
        <Text>{`${dateDisplayed} ${timeSelected}`}</Text>
        <Button
          className="booking-button"
          disabled={isEmpty(timeSelected)}
          type="primary"
          onClick={handleBookingButton}
        >
          Reservar cita
        </Button>
      </Row>
    </>
  );
};

export default AppointmentBook;
