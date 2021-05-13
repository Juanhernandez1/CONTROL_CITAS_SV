/* eslint-disable unicorn/filename-case */

import { Image, Row, Typography } from 'antd';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';

const { Paragraph, Title } = Typography;

const useGetBusinessServicesDetail = (isModal = false) => {
  const { push } = useHistory();
  const {
    businessServiceSelected: { idbusiness, servicename, description, imageurl, price }
  } = useContext(GlobalContext);

  !idbusiness && push('/');

  const ellipsisConfig = isModal ? { expandable: true, symbol: 'Leer más' } : null;
  const imagePlaceholder = <Image preview={false} src={imageurl} width={400} />;
  const colSpan = isModal ? 4 : 2;

  const content = (
    <>
      <Row justify="center">
        <Title>{servicename}</Title>
      </Row>
      <Row justify="center">
        <Image width={400} src={imageurl} placeholder={imagePlaceholder} />
      </Row>
      <Row className="business-modal__detail">
        <Paragraph ellipsis={ellipsisConfig}>{description}</Paragraph>
      </Row>
      <Row justify="space-between">
        <div style={{ width: '40%' }}></div>
      </Row>
    </>
  );

  const footer = isModal
    ? [
        <Row justify="space-between" key={idbusiness}>
          <h4>Precio: $ {price}</h4>
        </Row>
      ]
    : null;

  return { content, footer };
};

export default useGetBusinessServicesDetail;
