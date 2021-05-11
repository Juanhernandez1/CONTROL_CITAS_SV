import { Card, List, Typography } from 'antd';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BusinessDetailModal from '../../components/DetailBusinessModal';
import SearchBusiness from '../../components/form/SearchBusiness';
import { GlobalContext } from '../../context/GlobalState';
import { business } from '../../utils/mock';
import './Business.css';

const { Meta } = Card;
const { Title } = Typography;

const Business = () => {
  const { businessSelected, setBusinessSelected, businessSearch, setBusinessSearch } = useContext(
    GlobalContext
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [DataBusiness, setDataBusiness] = useState({});
  const [pagination, setPagination] = useState({
    total: business.length,
    showSizeChanger: false,
    defaultPageSize: 6
  });
  const gridConfig = { gutter: 48, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 };

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
        cover={<img alt="album" src={item.imageurlbusiness} />}
        hoverable
        onClick={() => showModal(item)}
      >
        <Meta title={item.businessname} />
      </Card>
    </List.Item>
  );

  const setRequest = useCallback(() => {
    let URL;

    console.log(businessSearch);
    if (businessSearch === undefined || businessSearch === '')
      URL = 'https://citasparatunegocio.herokuapp.com/API/v1/Business/GetAllNoPage/Active';
    else
      URL = `https://citasparatunegocio.herokuapp.com/API/v1/Business//SearchByNameNoPage/${businessSearch}`;

    axios
      .get(URL, {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
      })
      .then(response => {
        console.log(response.data);
        setDataBusiness(response.data);

        setPagination({
          total: response.data.data.length,
          showSizeChanger: false,
          defaultPageSize: 6
        });
      });
  }, [businessSearch, setDataBusiness]);

  useEffect(() => {
    setRequest();
  }, [setRequest]);

  return (
    <>
      <SearchBusiness />

      <Title level={2}>
        {businessSearch === undefined || businessSearch === ''
          ? 'Negocios'
          : 'Resultados de Búsqueda:'}
      </Title>
      <List
        className="business-list"
        dataSource={DataBusiness.data}
        grid={gridConfig}
        pagination={pagination}
        renderItem={renderListItem}
      />
      {businessSelected && <BusinessDetailModal onCancel={closeModal} visible={isModalVisible} />}
    </>
  );
};

export default Business;
