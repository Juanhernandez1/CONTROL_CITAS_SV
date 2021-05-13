import { Card, List, message, Typography } from 'antd';
import { isEmpty } from 'lodash';
import React, { useContext, useState } from 'react';

import BusinessDetailModal from '../../components/DetailBusinessServicessModal';

import { GlobalContext } from '../../context/GlobalState';
import useGetBusinessServicess from '../../hooks/useGetBusinessServicess/useGetBusinessServicess';

import './BusinessServicess.css';

const { Meta } = Card;
const { Title } = Typography;

const BusinessServicess = props => {
  const { businessSelected, businessServiceSelected, setBusinessServicesSelected } =
    useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { id } = props;

  const { isLoading, businessServicess } = useGetBusinessServicess(
    businessSelected.idbusiness,
    errorMessage => {
      message.error(errorMessage);
    }
  );
  const gridConfig = { gutter: 48, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 };
  const paginationConfig = {
    hideOnSinglePage: true,
    total: businessServicess?.length,
    showSizeChanger: false,
    defaultPageSize: 6
  };

  const showModal = businessServicessInfo => {
    setBusinessServicesSelected(businessServicessInfo);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const renderListItem = item => (
    <List.Item>
      <Card
        cover={<img alt="album" src={item.imageurl} />}
        hoverable
        onClick={() => showModal(item)}
      >
        <Meta title={item.servicename} />
      </Card>
    </List.Item>
  );

  return (
    <>
      <Title level={2}>Servicios</Title>
      <List
        className="businessServicess-list"
        dataSource={businessServicess}
        grid={gridConfig}
        loading={isLoading}
        pagination={paginationConfig}
        renderItem={renderListItem}
      />
      {!isEmpty(businessServiceSelected) && (
        <BusinessDetailModal onCancel={closeModal} visible={isModalVisible} />
      )}
    </>
  );
};

export default BusinessServicess;
