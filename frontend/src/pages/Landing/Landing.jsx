import { Card } from 'antd';
import React from 'react';

import SearchBusiness from '../../components/form/SearchBusiness';
import Banner from '../../assets/images/banner.jpg';
import './Landing.css';

const { Meta } = Card;

const Landing = () => {
  return (
    <div className="landing">
      <div className="banner-container">
        <img src={Banner} alt="Banner" />
      </div>
      <SearchBusiness />
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
