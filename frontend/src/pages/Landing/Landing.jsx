import { Button, Card, Form, Input } from 'antd';
import React from 'react';

import { messages } from '../../config/messages';
import Banner from '../../assets/images/banner.jpg';
import './Landing.css';

const { Meta } = Card;
const { Item } = Form;
const { onRequired } = messages;

const Landing = () => {
  return (
    <div className="landing">
      <div className="banner-container">
        <img src={Banner} alt="Banner" />
      </div>
      <div className="landing-search">
        <Form className="landing-form" layout="inline" name="landingForm">
          <Item name="businessSearch" rules={[{ required: true, message: onRequired }]}>
            <Input placeholder="Buscar negocio" />
          </Item>
          <Item>
            <Button htmlType="submit" type="primary">
              Buscar
            </Button>
          </Item>
        </Form>
      </div>
      <div className="cards-container">
        <Card
          hoverable
          className="card"
          cover={
            <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          }
        >
          <Meta
            title="Title 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
        </Card>
        <Card
          hoverable
          className="card"
          cover={
            <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          }
        >
          <Meta
            title="Title 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
        </Card>
        <Card
          hoverable
          className="card"
          cover={
            <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          }
        >
          <Meta
            title="Title 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
        </Card>
      </div>
    </div>
  );
};

export default Landing;
