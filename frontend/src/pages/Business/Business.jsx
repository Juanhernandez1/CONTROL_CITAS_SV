import { List, Card } from 'antd';
import React from 'react';

import SearchBusiness from '../../components/form/SearchBusiness';
import { business } from '../../utils/mock';
import './Business.css';

const { Meta } = Card;

const Business = () => {
  const gridConfig = { gutter: 48, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 };

  const paginationConfig = {
    total: business.length,
    showSizeChanger: false,
    defaultPageSize: 6
  };

  const renderListItem = item => (
    <List.Item>
      <Card cover={<img alt="album" src={item.imageURL} />}>
        <Meta title={item.name} />
      </Card>
    </List.Item>
  );

  return (
    <>
      <SearchBusiness />
      <List
        className="business-list"
        dataSource={business}
        grid={gridConfig}
        pagination={paginationConfig}
        renderItem={renderListItem}
      />
    </>
  );
};

export default Business;
