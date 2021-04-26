import { List, Card } from 'antd';
import React, { useState } from 'react';

import SearchBusiness from '../../components/form/SearchBusiness';
import BusinessDetailModal from '../../components/DetailBusinessModal';
import { business } from '../../utils/mock';
import './Business.css';

const { Meta } = Card;

const Business = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [businessSelected, setBusinessSelected] = useState(null);
  const gridConfig = { gutter: 48, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 };

  const paginationConfig = {
    total: business.length,
    showSizeChanger: false,
    defaultPageSize: 6
  };

  const showModal = businessInfo => {
    setBusinessSelected(businessInfo);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const renderListItem = item => (
    <List.Item>
      <Card
        cover={<img alt="album" src={item.imageURL} />}
        hoverable
        onClick={() => showModal(item)}
      >
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
      {businessSelected && (
        <BusinessDetailModal
          businessInfo={businessSelected}
          onCancel={closeModal}
          visible={isModalVisible}
        />
      )}
    </>
  );
};

export default Business;
