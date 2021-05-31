import { Card, List, message, Row, Button, Modal, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { isEmpty } from 'lodash';
import React, { useContext, useRef, useState } from 'react';

import BusinessDetailModal from '../../components/DetailBusinessServicessModal';

import { GlobalContext } from '../../context/GlobalState';
import useGetBusinessServicess from '../../hooks/useGetBusinessServicess/useGetBusinessServicess';

import './BusinessServicess.css';
import FormServices from './FormServices';
import { postData } from '../../api/baseClient';
import { business } from '../../config/urls';

const { Meta } = Card;
const { Title } = Typography;

const BusinessServicess = props => {
  const { businessSelected, businessServiceSelected, setBusinessServicesSelected, AccesType } =
    useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleFrom, setIsModalVisibleForm] = useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const refObjservice = useRef();
  const { isLoading, businessServicess } = useGetBusinessServicess(
    isModalVisibleFrom,
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

  const showModalForm = () => {
    setIsModalVisibleForm(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      refObjservice.current && refObjservice.current.click();
      setTimeout(() => {
        setIsModalVisibleForm(false);
        setConfirmLoading(false);
      }, 2000);
    }, 2000);
  };

  const handledFinis = dataApi => {
    if (AccesType === 'N') {
      (async () => {
        console.log('ejecutando', dataApi);
        try {
          const { data, status } = await postData(business.postServicess, dataApi);
          if (status === 201) {
            console.log(data);
          } else {
            console.log('error al registrar un servicio');
          }
        } catch (error) {
          console.log('error al registrar un servicio', error);
        }
      })();
    }
  };

  const handleCancel = () => {
    setIsModalVisibleForm(false);
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
      <Row justify="space-between">
        <Title level={2}>Servicios</Title>
        {AccesType === 'N' && (
          <Button type="primary" icon={<PlusOutlined />} size="large" onClick={showModalForm} />
        )}
      </Row>
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

      {AccesType === 'N' && (
        <Modal
          title="Servicio"
          visible={isModalVisibleFrom}
          onOk={handleOk}
          okText="Ingresar"
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <FormServices refObjservice={refObjservice} handledFinis={handledFinis} />
        </Modal>
      )}
    </>
  );
};

export default BusinessServicess;
