import { Card, Row, Typography } from 'antd';
import React from 'react';
import SearchBusiness from '../../components/form/SearchBusiness';
import './Landing.css';

const { Meta } = Card;

const Landing = () => {
  return (
    <div className="landing">
      {/* <div className="banner-container">
        <img src={Banner} alt="Banner" /> ----> Apply after banner is selected
      </div> */}
      <Row justify="center">
        <Typography.Title>Control de Citas</Typography.Title>
      </Row>
      <SearchBusiness />
      <div className="cards-container">
        <Card
          hoverable
          className="card"
          cover={<img alt="example" src={`${process.env.PUBLIC_URL}/proteje.png`} />}
        >
          <Meta
            title="Sugerencia"
            description="Protejete tu y tu Familia y a tus cliesntes usa simpre masacaria y Sanitiza regularmente tu zona de trabajo"
          />
        </Card>
        <Card
          hoverable
          className="card"
          cover={<img alt="example" src={`${process.env.PUBLIC_URL}/appointmet.png`} />}
        >
          <Meta
            title="Control de Citas"
            description="Ayudamos a mejorar tu vida conforme a tu organización, haciéndote ahorrar tiempo para ti y tus Clientes "
          />
        </Card>
        <Card
          hoverable
          className="card"
          cover={<img alt="example" src={`${process.env.PUBLIC_URL}/quienes.png`} />}
        >
          <Meta
            title="Quienes Somos"
            description="Somos una organización de jóvenes que te ayuda en la reserva de tus servicios favoritos haciéndote ahorrar tiempo en tu día a día y que puedas disfrutar de los mejores beneficios "
          />
        </Card>
      </div>
    </div>
  );
};

export default Landing;
