import { Button, Form, Input } from 'antd';
import React from 'react';

import { messages } from '../../../config/messages';
import './SearchBusiness.css';

const { Item } = Form;
const { onRequired } = messages;

const SearchBusiness = () => (
  <div className="search-business">
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
);

export default SearchBusiness;
