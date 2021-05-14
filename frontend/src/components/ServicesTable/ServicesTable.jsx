import { Table, Input, Button, Row } from 'antd';

import React, { useState } from 'react';
import FilterDropdow from './FilterDropdow';

const ServicesTable = () => {
  const [state, setstate] = useState({
    selectedRowKeys: [], // Check here to configure the default column
    loading: false
  });

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`
    });
  }

  const start = () => {
    setstate({ ...state, loading: true });
    // ajax request after empty completing
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
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setstate({ ...state, selectedRowKeys });
  };

  const { loading, selectedRowKeys } = state;
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  const hasSelected = selectedRowKeys.length > 0;

  // * seacrhc

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...FilterDropdow({ dataIndex: 'address' })
    },
    {
      title: 'Age',
      dataIndex: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address'
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
      <Table
        style={{ width: '-webkit-fill-available', height: '-webkit-fill-available' }}
        rowSelection={rowSelection}
        pagination={paginationConfig}
        columns={columns}
        dataSource={data}
      />
    </Row>
  );
};

export default ServicesTable;
