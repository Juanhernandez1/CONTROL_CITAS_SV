import { Table, message, Spin, Input, Button, Row } from 'antd';
import e from 'cors';

import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { business } from '../../config/urls';
import { GlobalContext } from '../../context/GlobalState';
import useGetData from '../../hooks/useGetData/useGetData';

import FilterDropdow from './FilterDropdow';

const ServicesTable = props => {
  const { appintmentTime, setDetailServices, detail } = useContext(GlobalContext);
  const [state, setstate] = useState({
    selectedRowKeys: [], // Check here to configure the default column
    loading: false
  });

  const { id } = useParams();

  const [isLoading, dataAPI] = useGetData(
    business.getAllBusinessServicess(id),
    null,
    errorMessage => {
      message.error(errorMessage);
    }
  );

  const data = [];
  dataAPI.success &&
    dataAPI.data.forEach(element => {
      data.push({ ...element, key: element.idservices });
    });

  const start = () => {
    setstate({ ...state, loading: true });
    // ajax request after empty completing
    props.SetPrice(0.0);
    setTimeout(() => {
      setstate({
        selectedRowKeys: [],
        loading: false
      });
    }, 1000);
  };

  const paginationConfig = {
    hideOnSinglePage: true,
    showSizeChanger: false,
    defaultPageSize: 4
  };
  const onSelectChange = selectedRowKeys => {
    const arraydetalle = [];
    if (selectedRowKeys.length > 0 && selectedRowKeys.length <= appintmentTime.limitService) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      let perci = 0;
      selectedRowKeys.forEach(element => {
        console.log(element);
        let Service = dataAPI.data.filter(service => service.idservices === element);
        console.log(Service);
        perci += parseFloat(Service[0].price);
        const objdetail = {
          idservices: Service[0].idservices,
          price: Service[0].price
        };
        arraydetalle.push(objdetail);
      });
      props.SetPrice(perci);
      setDetailServices(arraydetalle);
      setstate({ ...state, selectedRowKeys });
    }
  };

  const { loading, selectedRowKeys } = state;
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  const hasSelected = () => {
    return selectedRowKeys.length > 0 && selectedRowKeys.length <= appintmentTime.limitService;
  };
  // * seacrhc

  const columns = [
    {
      title: 'Servicio',
      dataIndex: 'servicename',
      key: 'idservices',
      width: '30%',
      ...FilterDropdow({ dataIndex: 'servicename' })
    },
    {
      title: 'Descripcion',
      dataIndex: 'description'
    },
    {
      title: 'Precio',
      dataIndex: 'price'
    }
  ];
  return (
    <Row style={{ width: '100%' }}>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      {isLoading && <Spin />}
      {dataAPI.success && (
        <Table
          style={{ width: '-webkit-fill-available', height: '-webkit-fill-available' }}
          rowSelection={rowSelection}
          pagination={paginationConfig}
          columns={columns}
          dataSource={data}
        />
      )}
    </Row>
  );
};

export default ServicesTable;
