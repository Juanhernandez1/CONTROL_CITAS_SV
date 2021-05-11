/* eslint-disable unicorn/filename-case */
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button, Col, Image, Row, Typography } from 'antd';
import React, { useContext, useEffect } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';
import { paths } from '../../config/paths';

const { Link, Paragraph, Title } = Typography;

const useGetBusinessDetail = (isModal = false) => {
  const {
    businessSelected: { idbusiness, businessname, description, imageurlbusiness }
  } = useContext(GlobalContext);

  const ellipsisConfig = isModal ? { expandable: true, symbol: 'Leer más' } : null;
  const imagePlaceholder = <Image preview={false} src="imageURL" width={400} />;
  const colSpan = isModal ? 4 : 2;
  const iconStyle = { fontSize: '1.5rem' };

  const content = (
    <>
      <Row justify="center">
        <Title>{businessname}</Title>
      </Row>
      <Row justify="center">
        <Image width={400} src={imageurlbusiness} placeholder={imagePlaceholder} />
      </Row>
      <Row className="business-modal__detail">
        <Paragraph ellipsis={ellipsisConfig}>{description}</Paragraph>
      </Row>
      <Row justify="space-between">
        <div style={{ width: '40%' }}>
          <Row justify="start">
            <Col span={colSpan} style={{ margin: '4px' }}>
              <FacebookOutlined style={iconStyle} />
            </Col>
            <Col span={colSpan} style={{ margin: '4px' }}>
              <InstagramOutlined style={iconStyle} />
            </Col>
            <Col span={colSpan} style={{ margin: '4px' }}>
              <TwitterOutlined style={iconStyle} />
            </Col>
          </Row>
        </div>
        {!isModal && (
          <Col>
            <Link href="/" target="_blank" rel="noreferrer noopener">
              Dirección
            </Link>
          </Col>
        )}
      </Row>
    </>
  );

  const footer = isModal
    ? [
        <Row justify="space-between" key={idbusiness}>
          <Link href="/" target="_blank" rel="noreferrer noopener">
            Dirección
          </Link>
          <Button type="primary">
            <RouterLink to={`${paths.businessDetail(idbusiness)}`}>Ir a gestión</RouterLink>
          </Button>
        </Row>
      ]
    : null;

  return { content, footer };
};

export default useGetBusinessDetail;
