import { Button, message, Table, Tag } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';

import useGetData from '../../hooks/useGetData';
import { business } from '../../config/urls';

const AvailabilityTable = ({ handleTimeSelection, dateSelected }) => {
  const { id } = useParams();
  const [isAvailabilityLoading, availability] = useGetData(
    business.availability(id, dateSelected),
    errorMessage => {
      message.error(errorMessage);
    }
  );

  const dataTable = availability.map(({ hour, minute, time, state }) => {
    const timing = `${hour}:${minute} ${time}`;
    const key = time;

    return { time: timing, key, state };
  });

  const columns = [
    { title: 'Hora', dataIndex: 'time', key: 'time' },
    {
      title: 'Estado',
      dataIndex: 'state',
      key: 'state',
      render: state =>
        state === 'O' ? <Tag color="cyan">Disponible</Tag> : <Tag color="red">No Disponible</Tag>
    },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: record => (
        <Button
          disabled={record.state === 'C'}
          onClick={() => handleTimeSelection(record)}
          type="link"
        >
          Seleccionar
        </Button>
      )
    }
  ];

  return (
    <Table
      className="time-table"
      columns={columns}
      dataSource={dataTable}
      loading={isAvailabilityLoading}
      pagination={false}
    />
  );
};

export default AvailabilityTable;
