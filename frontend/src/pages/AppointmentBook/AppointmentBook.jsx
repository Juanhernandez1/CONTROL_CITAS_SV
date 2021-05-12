import { Button, message, Row, Col, Spin, Typography } from 'antd';
import { isEmpty } from 'lodash';
import React, { useState } from 'react';

import { business } from '../../config/urls';
import useGetData from '../../hooks/useGetData';
import Table from '../../components/AvailabilityTable';
import './AppointmentBook.css';

const { Title, Text } = Typography;

const AppointmentBook = () => {
  const [dateSelected, setDateSelected] = useState('');
  const [timeSelected, setTimeSelected] = useState('');
  const [dateDisplayed, setDateDisplayed] = useState('');
  const [isLastFiveDaysLoading, lastFiveDays] = useGetData(business.lastFiveDays, errorMessage => {
    message.error(errorMessage);
  });

  const handleDateSelection = (date = '') => {
    setDateSelected(date.split('/').join('-'));
    setDateDisplayed(date);
    setTimeSelected('');
  };

  const handleTimeSelection = ({ time }) => {
    setTimeSelected(time);
  };

  const handleBookingButton = () => {};

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
          lastFiveDays.map(({ dayName, fulldate }) => (
            <Col style={{ textAlign: 'center' }} key={fulldate}>
              <h3>{dayName}</h3>
              <Button key={fulldate} onClick={() => handleDateSelection(fulldate)}>
                {fulldate}
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
