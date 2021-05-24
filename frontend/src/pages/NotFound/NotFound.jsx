import { FrownTwoTone } from '@ant-design/icons';
import { Button, Row, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Text, Title } = Typography;

const NotFound = () => {
  return (
    <>
      <Row justify="center">
        <FrownTwoTone style={{ fontSize: '3rem' }} />
      </Row>
      <Row justify="center">
        <Title level={2}>Página No Encontrada</Title>
      </Row>
      <Row justify="center">
        <Text>Lo sentimos, no pudimos encontrar la página que estás buscando.</Text>
      </Row>
      <Row justify="center">
        <Text>Sugerimos que regreses a la sección principal.</Text>
      </Row>
      <Row justify="center" style={{ marginTop: '1.6rem' }}>
        <Button type="primary">
          <Link to="/">Ir a la página principal</Link>
        </Button>
      </Row>
    </>
  );
};

export default NotFound;
