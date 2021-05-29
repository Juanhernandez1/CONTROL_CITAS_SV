/* eslint-disable unicorn/filename-case */
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button, Col, Image, Row, Typography } from 'antd';
import React, { useContext, useEffect } from 'react';
import { Link as RouterLink, useHistory, useParams } from 'react-router-dom';

import { paths } from '../../config/paths';
import { GlobalContext } from '../../context/GlobalState';
import { getData } from '../../api/baseClient';
import { business as getBusinessPath } from '../../config/urls';

const { Link, Paragraph, Title } = Typography;

const useGetBusinessDetail = (isModal = false) => {
  const { push } = useHistory();
  const { businessSelected, setBusinessSelected } = useContext(GlobalContext);
  const { id } = useParams();

  console.log(businessSelected);

  useEffect(() => {
    !businessSelected.hasOwnProperty('idbusiness') &&
      (async () => {
        const path = getBusinessPath.getBusinessPk(id);
        try {
          const { data, status } = await getData(path);
          if (status === 200) setBusinessSelected(data.data);
          else push('/');
        } catch (error) {
          push('/');
          console.log(error);
        }
      })();
  }, [businessSelected]);

  const ellipsisConfig = isModal ? { expandable: true, symbol: 'Leer más' } : null;
  const imagePlaceholder = (
    <Image preview={false} src={businessSelected.imageurlbusiness} width={400} />
  );
  const colSpan = isModal ? 4 : 2;
  const iconStyle = { fontSize: '1.5rem' };

  const content = (
    <>
      <Row justify="center">
        <Title>{businessSelected.businessname}</Title>
      </Row>
      <Row justify="center">
        <Image width={400} src={businessSelected.imageurlbusiness} placeholder={imagePlaceholder} />
      </Row>
      <Row className="business-modal__detail">
        <Paragraph ellipsis={ellipsisConfig}>{businessSelected.description}</Paragraph>
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
            <Link href="#" target="_blank" rel="noreferrer noopener">
              Dirección
            </Link>
          </Col>
        )}
      </Row>
    </>
  );

  const footer = isModal
    ? [
        <Row justify="space-between" key={businessSelected.idbusiness}>
          <Link href="#" target="_blank" rel="noreferrer noopener">
            Dirección
          </Link>
          <Button type="primary">
            <RouterLink to={`${paths.businessDetail(businessSelected.idbusiness)}`}>
              Ir a gestión
            </RouterLink>
          </Button>
        </Row>
      ]
    : null;

  return { content, footer };
};

export default useGetBusinessDetail;
