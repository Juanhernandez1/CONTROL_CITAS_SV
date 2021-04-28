import { Card, List, Typography } from 'antd';
import React, { useContext, useState } from 'react';

import BusinessDetailModal from '../../components/DetailBusinessModal';
import SearchBusiness from '../../components/form/SearchBusiness';
import { GlobalContext } from '../../context/GlobalState';
import { business } from '../../utils/mock';
import './Business.css';

const { Meta } = Card;
const { Title } = Typography;

const Business = () => {
  const { businessSelected, setBusinessSelected } = useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
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
      <Title level={2}>Resultados de Búsqueda:</Title>
      <List
        className="business-list"
        dataSource={business}
        grid={gridConfig}
        pagination={paginationConfig}
        renderItem={renderListItem}
      />
      {businessSelected && <BusinessDetailModal onCancel={closeModal} visible={isModalVisible} />}
    </>
  );
};

export default Business;
