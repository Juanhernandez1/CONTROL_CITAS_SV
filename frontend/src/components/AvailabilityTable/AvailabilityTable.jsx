import { Button, message, Table, Tag } from 'antd';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { business } from '../../config/urls';
import { GlobalContext } from '../../context/GlobalState';
import useGetBusinessResolveSetting from '../../hooks/useGetBusinessResolveSetting';

const AvailabilityTable = ({ handleTimeSelection, dateSelected }) => {
  const { AccesType } = useContext(GlobalContext);
  const { id } = useParams();
  const [isAvailabilityLoading, availability] = useGetBusinessResolveSetting(
    business.availability(id, dateSelected),
    errorMessage => {
      message.error(errorMessage);
    }
  );
  let cotnadorId = 0;
  const dataTable = availability.map(element => {
    const timing = `${element.hour}:${
      element.minute < 10 ? `0${element.minute}` : element.minute
    } ${element.time}`;
    const key = timing;
    cotnadorId++;
    return { time: timing, key, state: element.state, obtHora: element, id: cotnadorId };
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
      render: record =>
        AccesType === 'N' ? (
          <Button
            onClick={() => handleTimeSelection(record)}
            type="link"
            style={{ display: record.state === 'O' ? 'none' : 'auto' }}
          >
            Ver
          </Button>
        ) : (
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
