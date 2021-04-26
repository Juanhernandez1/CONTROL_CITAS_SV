import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button, Col, Image, Modal, Row, Typography } from 'antd';
import React from 'react';

import './DetailBusinessModal.css';

const { Link, Paragraph, Title } = Typography;

const DetailBusinessModal = ({ businessInfo, ...rest }) => {
  const ellipsisConfig = { expandable: true, symbol: 'Leer más' };
  const imagePlaceholder = <Image preview={false} src="businessInfo.imageURL" width={400} />;

  const footer = [
    <Row justify="space-between">
      <Link href="/" target="_blank" rel="noreferrer noopener">
        Dirección
      </Link>
      <Button type="primary">Ir a gestión</Button>
    </Row>
  ];

  return (
    <Modal {...rest} footer={footer}>
      <Row justify="center">
        <Title>{businessInfo.name}</Title>
      </Row>
      <Row justify="center">
        <Image width={400} src={businessInfo.imageURL} placeholder={imagePlaceholder} />
      </Row>
      <Row className="business-modal__detail">
        <Paragraph ellipsis={ellipsisConfig}>{businessInfo.description}</Paragraph>
      </Row>
      <Row>
        <Col span={2}>
          <FacebookOutlined style={{ fontSize: '1.5rem' }} />
        </Col>
        <Col span={2}>
          <InstagramOutlined style={{ fontSize: '1.5rem' }} />
        </Col>
        <Col span={2}>
          <TwitterOutlined style={{ fontSize: '1.5rem' }} />
        </Col>
      </Row>
    </Modal>
  );
};

export default DetailBusinessModal;
